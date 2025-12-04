import React from 'react';
import CdnImage from "@/components/commons/ui/CdnImage";
import MediaRoom from "@/components/pages/media-room/MediaRoom";
import {getMessages} from "next-intl/server";
import {NextIntlClientProvider} from "next-intl";

const Page = async () => {
    const {'media-room': mediaRoom, suites} = await getMessages();

    return (
        <NextIntlClientProvider messages={{
            "media-room": mediaRoom,
            suites: suites
        }}>
            <main>
                <CdnImage
                    className={"w-full object-cover mb-10"}
                    src="/img/about/granresidences-destino.jpg"
                    alt="Granresidences"
                    width={750} height={400}/>

                <div className={"my-container"}>
                    <h1 className={"text-3xl font-bold md:text-[64px] md:text-center md:my-10"}>
                        {mediaRoom['media-about.title']}
                    </h1>
                    <MediaRoom/>
                </div>
            </main>
        </NextIntlClientProvider>

    );
};

export default Page;