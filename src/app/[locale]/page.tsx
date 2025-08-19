import {cdn} from "@/lib/cdn";
import SmartVideo from "@/components/commons/ui/SmartVideo";
import {Carousel, CarouselContent, CarouselItem, CarouselNavigation} from "@/components/commons/ui/carousel";
import {getMessages} from "next-intl/server";
import CdnImage from "@/components/commons/ui/CdnImage";


export default async function Home() {
    const {home: {slider}} = await getMessages();
    return (
        <>
            <section className="aspect-[5/4] md:aspect-[1921/500] relative">
                <SmartVideo
                    className="w-full h-auto"
                    poster={cdn('/video/home-banner-m-new.jpg')}
                    srcDesktop={cdn('/video/home-banner-new.mp4')}
                    srcMobile={cdn('/video/home-banner-m-new.mp4')}/>

                <div className="my-container -mt-15 pb-5
                    lg:absolute lg:w-[450px] lg:bottom-10 lg:right-0 md:mt-0">
                        <Carousel>
                            <div className="bg-[#ffffffe6] p-5 shadow-lg">
                                <CarouselContent className="items-stretch ">
                                    {
                                        slider.map((item, index) => (
                                            <CarouselItem key={index}>
                                                <article className=" h-full  gap-4 flex flex-col justify-between">
                                            <span
                                                className="text-lg text-accent font-bold mb ">
                                                Travellers' Choice 2025
                                            </span>
                                                    <p className="text-2xl font-bold">{item.title}</p>
                                                    <p className="text-base">{item.description}</p>
                                                    <CdnImage
                                                        className={"self-end"}
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
        </>
    );
}
