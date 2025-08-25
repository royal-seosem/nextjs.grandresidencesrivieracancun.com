'use client'
import {useQueries} from "@tanstack/react-query";
import {addMonths, format, startOfMonth} from 'date-fns';
import {util} from "protobufjs";
import float = util.float;

export type rateRquest = {
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

function getVisibleMonths(base: Date): Date[] {
    const first = startOfMonth(base);
    const second = startOfMonth(addMonths(first, 1));
    return [first, second];          // <- array de Date con los dos meses
}

function getCookie(name: string) {
    const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
    return match ? decodeURIComponent(match[2]) : null;
}


async function ensureCsrfCookie() {
    if (!getCookie('XSRF-TOKEN')) {
        await fetch(`https://dev.v2-royalreservations.com/sanctum/csrf-cookie`, {
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        });
    }
}


async function fetchRate(rateRquest: rateRquest, key: string) {
    await ensureCsrfCookie();
    let startDate = new Date(rateRquest.month.getTime());
    startDate.setDate(1);

    if (startDate < new Date()) {
        startDate = new Date();
    }

    const endDate = new Date(rateRquest.month.getTime());
    endDate.setDate(1);
    endDate.setMonth(endDate.getMonth() + 1);

    const rq = {
        ...rateRquest,
        dateIn: format(startDate, 'yyyy-MM-dd'),
        dateOut: format(endDate, 'yyyy-MM-dd')
    };
    return await fetch(`https://dev.v2-royalreservations.com/shop/v1/hotel/basicavail/${key}`, {
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
    rate: {
        minRate: float,
        discount: float,
    }
}
const calculateRate = (rates: Rate[]) => {
    const map = new Map<string, Rate>();

    rates.forEach(r => map.set(r.date, {
        date: r.date,
        isAvailable: r.isAvailable,
        rate: {
            minRate: r.rate.minRate,
            discount: r.rate.discount,
        }
    }));

    return map;
}

const useRates = (rq: rateRquest) => {
    const months = getVisibleMonths(rq.month);
    return  useQueries({
        queries: months.map((month) => {
            const data = {
                ...rq,
                month: month,
            }
            const key = `${data.month.getFullYear()}-${data.month.getMonth()}${data.adults}-${data.children}-${data.childAge.slice(0, data.children).join(',')}-${data.ratePlanCode}-${data.roomTypeCode}-${format(month, 'yyyy-MM')}`;

            return {
                queryKey: ['rates', key],
                queryFn: () => fetchRate(data, key),
                staleTime: Infinity,
            }
        })
    });

    // return queries.reduce((map, q) => {
    //     q.data?.forEach(r => map.set(r.date, r.price));
    //     return map;
    // }, new Map<string, number>());

};

export default useRates;