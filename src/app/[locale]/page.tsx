import {cdn} from "@/lib/cdn";
import {Carousel, CarouselContent, CarouselItem, CarouselNavigation} from "@/components/commons/ui/carousel";
import {getLocale, getMessages, getTranslations} from "next-intl/server";
import CdnImage from "@/components/commons/ui/CdnImage";
import Booking from "@/components/commons/shared/booking/Booking";
import SmartVideo from "@/components/commons/ui/SmartVideo";
import Title from "@/components/commons/ui/title";
import SectionSuites from "@/components/pages/home/SectionSuites";
import {getHomeOffer} from "@/use_case/offers/get_home_offer";
import SectionOffer from "@/components/pages/home/SectionOffer";
import SectionAmenities from "@/components/pages/home/SectionAmenities";
import RichText from "@/components/commons/shared/RitchText";
import SectionMap from "@/components/pages/home/SectionMap";
import SectionTripadvisor from "@/components/pages/home/SectionTripadvisor";
import {getReviews} from "@/use_case/reviews/get_reviews";
import SectionInstagram from "@/components/pages/home/SectionInstagram";
import SectionOffers from "@/components/pages/home/SectionOffers";


export default async function Home() {
    const {home: {slider}} = await getMessages();
    const t = await getTranslations('general');
    const locale = await getLocale();

    const [offers, reviews] = await Promise.all([
        getHomeOffer(),
        getReviews()
    ])
    // const offers = await getHomeOffer();
    // const reviews = await getReviews();

    return (
        <main>
            <section className="relative">
                <div className="aspect-[5/4] md:aspect-[1921/500]">
                    <SmartVideo
                        className="w-full h-auto"
                        posterDesktop={cdn('/video/home-banner-new.jpg')}
                        posterMobile={cdn('/video/home-banner-m-new.jpg')}
                        srcDesktop={cdn('/video/home-banner-new.mp4')}
                        srcMobile={cdn('/video/home-banner-m-new.mp4')}/>
                </div>


                <div className="my-container -mt-15 pb-5
                    lg:absolute lg:w-[450px] lg:bottom-10 lg:right-0 md:mt-0">
                    <Carousel>
                        <div className="bg-[#ffffffe6] p-5 shadow-lg">
                            <CarouselContent className="items-stretch ">
                                {
                                    slider.map((item: { title: string, description: string }, index: number) => (
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
            <div className="my-container p-5">
                <div className="translate-y-[-50%] z-10 relative hidden lg:block">
                    <Booking/>
                </div>
                <section className="lg:mb-14">
                    <Title className="lg:text-center lg:text-6xl ">
                        {t('title_resort')}
                    </Title>
                    <div className="lg:flex lg:justify-between lg:items-center lg:gap-10">
                        <CdnImage
                            className={"m-auto"}
                            src="/img/logo/trip-advisor-traveler-choice-awards-2025.png"
                            alt="we are winner of tripadvisor award for our hotels puerto morelos mexico"
                            width="230"
                            height="270"/>

                        <div>
                            <RichText id={"descripcion_inicial"} ns={"home"}/>
                        </div>
                    </div>
                </section>
            </div>
            <SectionSuites/>
            <SectionOffer offers={offers} className={"mb-10 lg:hidden"}/>
            <SectionOffers offers={offers}/>
            <SectionAmenities/>
            <SectionMap/>
            <SectionTripadvisor reviews={reviews}/>
            <SectionInstagram/>
        </main>
    );
}
