import {GrFetcher, GrFetcherResponse} from "@/lib/api_grandresidences";
import {Offer} from "@/use_case/offers/get_home_offer";

export const getMyAccountOffers = async () => {
    return GrFetcher<GrFetcherResponse<Offer[]>>('offers/my-account', {
        method: 'GET',
        cache: 'no-store',
    })
}
