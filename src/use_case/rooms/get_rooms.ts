'use server'

import {GrFetcher} from "@/lib/api_grandresidences";
import {Room} from "@/use_case/rooms/types";

export const getRooms = async () => {
    return GrFetcher<Room[]>('suites', {
        method: 'GET'
    })
}