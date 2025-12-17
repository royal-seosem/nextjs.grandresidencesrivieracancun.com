import {getMessages, getTranslations} from "next-intl/server";
import dynamic from "next/dynamic";
import {headers} from "next/headers";
import {cdn} from "@/lib/cdn";
import {Carousel, CarouselContent, CarouselItem, CarouselNavigation} from "@/components/commons/ui/carousel";
import CdnImage from "@/components/commons/ui/CdnImage";
import SmartVideo from "@/components/commons/ui/SmartVideo";
import Title from "@/components/commons/ui/title";
import {getHomeOffer} from "@/use_case/offers/get_home_offer";
import RichText from "@/components/commons/shared/RitchText";
import {getReviews} from "@/use_case/reviews/get_reviews";
import SectionMap from "@/components/pages/home/SectionMap";
import SectionInstagram from "@/components/pages/home/SectionInstagram";

const BookingHome = dynamic(() => import("@/components/pages/home/BookingHome"));
const SectionSuites = dynamic(() => import("@/components/pages/home/SectionSuites"));
const SectionOffer = dynamic(() => import("@/components/pages/home/SectionOffer"));
const SectionOffers = dynamic(() => import("@/components/pages/home/SectionOffers"));
const SectionAmenities = dynamic(() => import("@/components/pages/home/SectionAmenities"));
const SectionTripadvisor = dynamic(() => import("@/components/pages/home/SectionTripadvisor"));


export default async function Home() {
    const headersList = await headers();
    const isDesktop = headersList.get('sec-ch-ua-mobile') === '?0';

    const {home, weddings} = await getMessages();
    const t = await getTranslations('general');
    const tHome = await getTranslations('home');

    const [offers, reviews] = await Promise.all([
        getHomeOffer(),
        getReviews()
    ])

    const makesOffers = offers.filter(offer => offer.rate != null).map((offer) => {
        return {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "price": offer.rate?.price,
            "priceCurrency": "USD",
            "availabilityEnds": offer.travelWindow.end_date,
            "availabilityStarts": offer.travelWindow.start_date,
        }
    })

    const minRate = offers
        .filter(offer => offer.rate?.price !== null)
        .reduce((min, offer) => offer.rate?.price != undefined ? offer.rate?.price < min ? offer.rate?.price : min : min, 900000);

    const maxRate = offers
        .filter(offer => offer.rate?.price !== null)
        .reduce((max, offer) => offer.rate?.price != undefined ? offer.rate?.price > max ? offer.rate?.price : max : max, 0);

    const jsonDlReviews = reviews.map(review => {
        return {
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": review.traveler_name
            },
            "datePublished": review.review_date,
            "reviewBody": review.review,
            "name": review.title,
            "reviewRating": {
                "@type": "Rating",
                "bestRating": "5",
                "ratingValue": "5",
                "worstRating": "5"
            }
        }
    })


    const jsonLdVideo = {
        "@type": "VideoObject",
        "name": "Grand Residences Riviera Cancun",
        "thumbnailUrl": [
            cdn('/video/home.jpg')
        ],
        "uploadDate": "2023-05-31T08:00:00+08:00",
        "duration": "PT15S",
        "contentUrl": cdn('/video/home-low.mp4'),
        "description": tHome('metadescription'),
    }


    const jsonDlResort = {
        "@context": "http://schema.org/",
        "@type": "Resort",
        "name": 'Grand Residences Riviera Cancun',
        "description": tHome('metadescription'),
        "image": [
            cdn('/video/home-banner-new.jpg')
        ],
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Blvd. El Cid, Unidad 28 Lote 1-01, 77580 Puerto Morelos, Quintana Roo, Mexico",
            "addressCountry": "Mexico"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "20.827114863410653",
            "longitude": "-86.89710833173757"
        },
        "telephone": '52 99 81 00 06 92',
        "starRating": {
            "@type": "Rating",
            "ratingValue": "5"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": 5,
            "bestRating": 5,
            "reviewCount": 2081
        },
        "openingHours": "Mo-Su Monday through Sunday, all day",
        makesOffer: {
            "@type": "AggregateOffer",
            "priceCurrency": "USD",
            "highPrice": maxRate,
            "lowPrice": minRate,
            "offerCount": makesOffers.length,
            'offers': makesOffers
        },
        review: jsonDlReviews
    }

    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLdVideo).replace(/</g, '\\u003c'),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonDlResort).replace(/</g, '\\u003c'),
                }}
            />
            <section className="relative lg:-mb-10">
                <div className="aspect-5/4 md:aspect-1921/500">
                    <SmartVideo
                        isDesktop={isDesktop}
                        fetchPriority="high"
                        className="w-full h-auto"
                        posterDesktop={cdn('/video/home-banner-new.jpg')}
                        posterMobile={cdn('/video/home-banner-m-new.jpg')}
                        srcDesktop={cdn('/video/home-banner-new.mp4')}
                        srcMobile={cdn('/video/home-banner-m-new.mp4')}/>
                </div>


                <div className="my-container -mt-15 pb-5
                    lg:absolute lg:w-112.5 lg:bottom-10 lg:right-0 md:mt-0">
                    <Carousel>
                        <div className="bg-[#ffffffe6] p-5 shadow-lg">
                            <CarouselContent className="items-stretch ">
                                {
                                    home.slider.map((item: { title: string, description: string }, index: number) => (
                                        <CarouselItem key={index}>
                                            <article className=" h-full  gap-4 flex flex-col justify-between">
                                            <span
                                                className="text-lg text-accent font-bold mb ">
                                                Traveller&apos;s Choice 2025
                                            </span>
                                                <p className="text-2xl font-bold">{item.title}</p>
                                                <p className="text-base">{item.description}</p>
                                                <CdnImage
                                                    className={"self-end"}
                                                    alt={"Logo Tripadvisor"}
                                                    src="/img/logo/767/tripadvisor-lite.png"
                                                    width={123}
                                                    height={25}
                                                />
                                            </article>
                                        </CarouselItem>
                                    ))
                                }
                            </CarouselContent>
                        </div>
                        <CarouselNavigation/>
                    </Carousel>
                </div>
            </section>
            <BookingHome/>
            <div className="my-container p-5">
                <section className="lg:mb-14">
                    <Title className="lg:text-center lg:text-6xl lg:mb-8">
                        {t('title_resort')}
                    </Title>
                    <div className="lg:flex lg:justify-between lg:items-center lg:gap-10 lg:mb-20">
                        <div className={"lg:w-1/2 lg:max-w-[400px] shrink-0"}>
                            <CdnImage
                                className={"m-auto"}
                                src="/img/logo/trip-advisor-traveler-choice-awards-2025.png"
                                alt="we are winner of tripadvisor award for our hotels puerto morelos mexico"
                                width="230"
                                height="270"/>
                        </div>

                        <div>
                            <RichText id={"descripcion_inicial"} ns={"home"}/>
                        </div>
                    </div>
                </section>
            </div>
            <SectionSuites
                text={{
                    goToSuites: t('go to suites'),
                    habitacionesTitulo: tHome('habitaciones titulo'),
                    habitacionesDescripcion: tHome('habitaciones descripcion'),
                    planesTituloGeneral: tHome('planes titulo general'),
                    planesSubtitulo: tHome('planes subtitulo'),
                    planAi: tHome('plan ai'),
                    planAiDescripcion: tHome('plan ai descripcion'),
                    planAiBtn: tHome('plan ai btn'),
                    planBb: tHome('plan bb'),
                    planBbDescripcion: tHome('plan bb descripcion'),
                    planEp: tHome('plan ep'),
                    planEpDescripcion: home['plan ep descripcion'],
                }}
                group_event_alt={weddings['group_event_alt']}
                habitaciones={home['habitaciones']}
                amenities_alt={home['amenities_alt']}
            />
            <SectionOffer offers={offers} className={"mb-10 lg:hidden"}/>
            <SectionOffers offers={offers}/>
            <SectionAmenities/>
            <SectionMap/>
            <SectionTripadvisor reviews={reviews}/>
            <SectionInstagram/>
        </main>
    );
}
