import {useQuery} from "@tanstack/react-query";

export type Airport = {
    label: string,
    value: string,
}

const fetchAirport = async (search: string): Promise<Airport[]> => {
    return fetch(`https://www.reservhotel.com/ibe/5/get_airports.php?p_search=${search}`, {
        method: 'GET',
    }).then(response => response.json())
}

const useAirport = (search: string) => {
    return useQuery({
        queryKey: ['airports', search],
        queryFn: () => fetchAirport(search),
        staleTime: Infinity,
    });
};

export default useAirport;