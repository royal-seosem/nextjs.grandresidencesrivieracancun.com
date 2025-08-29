import {cdn} from "@/lib/cdn";
import {Carousel, CarouselContent, CarouselItem, CarouselNavigation} from "@/components/commons/ui/carousel";
import {getLocale, getMessages, getTranslations} from "next-intl/server";
import CdnImage from "@/components/commons/ui/CdnImage";
import Booking from "@/components/commons/shared/booking/Booking";
import SmartVideo from "@/components/commons/ui/SmartVideo";
import Title from "@/components/commons/ui/title";
import Paragraph from "@/components/commons/ui/paragraph";
import SectionSuites from "@/components/pages/home/SectionSuites";
import {getHomeOffer} from "@/use_case/offers/get_home_offer";
import SectionOffer from "@/components/pages/home/SectionOffer";


export default async function Home() {
    const {home: {slider, descripcion_inicial}} = await getMessages();
    const t = await getTranslations('general');
    const locale = await getLocale();
    const offers = await getHomeOffer(locale);
    console.log(offers)


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
                <Booking/>
                <section>
                    <Title>{t('title_resort')}</Title>
                    <CdnImage
                        className={"m-auto"}
                        src="/img/logo/trip-advisor-traveler-choice-awards-2025.png"
                        alt="we are winner of tripadvisor award for our hotels puerto morelos mexico"
                        width="230"
                        height="270"/>

                    {descripcion_inicial.map((item: string, index: number) => (
                        <Paragraph key={index}>{item}</Paragraph>)
                    )}
                </section>
            </div>
            <SectionSuites/>
            <SectionOffer/>
        </main>
    );
}
