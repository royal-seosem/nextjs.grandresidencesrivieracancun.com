'use client'
import {useQuery} from "@tanstack/react-query";
import {format} from 'date-fns';

export type RateRequest = {
    adults: number,
    children: number,
    childAge: number[],
    currency: string,
    month: Date,
    discountCode: string,
    hotelCode: string,
    ratePlanCode: string,
    roomTypeCode: string,
    rooms: number,
}


async function fetchRate(rateRequest: RateRequest, key: string): Promise<Map<string, Rate>> {

    if (!rateRequest.month) {
        return new Map<string, Rate>();
    }

    let startDate = new Date(rateRequest.month.getTime());
    startDate.setDate(1);

    if (startDate < new Date()) {
        startDate = new Date();
    }

    const endDate = new Date(rateRequest.month.getTime());
    endDate.setDate(1);
    endDate.setMonth(endDate.getMonth() + 1);

    const rq = {
        ...rateRequest,
        dateIn: format(startDate, 'yyyy-MM-dd'),
        dateOut: format(endDate, 'yyyy-MM-dd')
    };

    return fetch(`https://dev.v2-royalreservations.com/shop/v1/hotel/basicavail/${key}`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(rq),
    }).then(res => res.json())
        .then(data => data.dates)
        .then(data => calculateRate(data));
}

export type Rate = {
    date: string,
    isAvailable: boolean,
    isMinRate: boolean,
    rate: {
        minRate: number,
        discount: number,
    }
}
const calculateRate = (rates: Rate[]) => {

    const minRate = Math.min(...rates.map(r => r.rate.minRate - r.rate.discount)).toFixed(0);
    const maxRate = Math.max(...rates.map(r => r.rate.minRate - r.rate.discount)).toFixed(0);

    console.log(`Min: ${minRate} - Max: ${maxRate}`);

    const map = new Map<string, Rate>();

    rates.forEach((r) => {
        const rate = {
            date: r.date,
            isAvailable: r.isAvailable,
            isMinRate: false,
            rate: {
                minRate: r.rate.minRate,
                discount: r.rate.discount,
            }
        }

        if (minRate !== maxRate && (r.rate.minRate - r.rate.discount).toFixed(0) === minRate) {
            rate.isMinRate = true;
        }

        map.set(r.date, rate)
    });
    return map;
}

export const useRate = (rq: RateRequest) => {

    const key = `${rq.month.getFullYear()}-${rq.month.getMonth()}${rq.adults}-${rq.children}-${rq.childAge.slice(0, rq.children).join(',')}-${rq.ratePlanCode}-${rq.roomTypeCode}-${format(rq.month, 'yyyy-MM')}`;

    const {data} = useQuery({
        queryKey: ['rates', key],
        queryFn: () => fetchRate(rq, key),
        staleTime: Infinity,
    })

    return {
        data,
    }
}