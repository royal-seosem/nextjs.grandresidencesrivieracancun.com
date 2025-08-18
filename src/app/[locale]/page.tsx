import {cdn} from "@/lib/cdn";
import SmartVideo from "@/components/commons/ui/SmartVideo";
import {Carousel} from "@/components/commons/ui/carousel";

export default function Home() {
    return (
        <>
            <section className="aspect-[5/4] md:aspect-[1921/500]">
                <SmartVideo
                    className="w-full h-auto"
                    poster={cdn('/video/home-banner-m-new.jpg')}
                    srcDesktop={cdn('/video/home-banner-new.mp4')}
                    srcMobile={cdn('/video/home-banner-m-new.mp4')}/>
            </section>
        </>
    );
}
