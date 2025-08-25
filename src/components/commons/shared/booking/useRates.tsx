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

// function getVisibleMonths(base: Date): Date[] {
//     const first = startOfMonth(base);
//     const second = startOfMonth(addMonths(first, 1));
//     return [first, second];          // <- array de Date con los dos meses
// }

// function getCookie(name: string) {
//     const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
//     return match ? decodeURIComponent(match[2]) : null;
// }


// async function ensureCsrfCookie() {
//     if (!getCookie('XSRF-TOKEN')) {
//         await fetch(`https://dev.v2-royalreservations.com/sanctum/csrf-cookie`, {
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             credentials: 'include',
//         });
//     }
// }


async function fetchRate(rateRequest: RateRequest, key: string) {
    // await ensureCsrfCookie();


    if (!rateRequest.month) {
        return [];
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
        .then(data => data.dates);
}

export type Rate = {
    date: string,
    isAvailable: boolean,
    rate: {
        minRate: number,
        discount: number,
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

export const useRate = (rq: RateRequest) => {

    const key = `${rq.month.getFullYear()}-${rq.month.getMonth()}${rq.adults}-${rq.children}-${rq.childAge.slice(0, rq.children).join(',')}-${rq.ratePlanCode}-${rq.roomTypeCode}-${format(rq.month, 'yyyy-MM')}`;

    const {data} = useQuery({
        queryKey: ['rates', key],
        queryFn: () => fetchRate(rq, key)
            .then(data => calculateRate(data)),
        staleTime: Infinity,
    })

    return {
        data,
    }
}