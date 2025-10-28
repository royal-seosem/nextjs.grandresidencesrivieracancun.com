import React from 'react';
import CdnImage from "@/components/commons/ui/CdnImage";
import {useTranslations} from "next-intl";
import MediaRoom from "@/components/pages/media-room/MediaRoom";

const Page = () => {
    const t = useTranslations('media-room');
    return (
        <main>
            <CdnImage
                className={"w-full object-cover mb-10"}
                src="/img/about/granresidences-destino.jpg"
                alt="Granresidences"
                width={750} height={400}/>

            <div className={"my-container"}>
                <h1 className={"text-3xl font-bold md:text-[64px] md:text-center md:my-10"}>
                    {t('media-about.title')}
                </h1>
                <MediaRoom/>
            </div>
        </main>
    );
};

export default Page;