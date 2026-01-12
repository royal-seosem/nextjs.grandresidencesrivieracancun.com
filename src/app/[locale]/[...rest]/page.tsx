import {Metadata} from "next";
import React from 'react';
import CdnImage from "@/components/commons/ui/CdnImage";
import {getTranslations} from "next-intl/server";
import EventNotFound from "@/app/[locale]/[...rest]/EventNotFound";

export const metadata: Metadata = {
    title: "404 - Not Found",
}

const Page = async () => {
    const m = await getTranslations('general');
    return (
        <>
            <div className={"flex justify-center items-center"}>
                <div className={"flex flex-col items-center"}>
                    <CdnImage
                        alt={"Error"}
                        width={800}
                        height={504}
                        src={"/img/error/404.png"}/>

                    <h1 className="text-4xl mb-20">{m("not_found.title")}</h1>
                    <p className="mb-20">{m("not_found.subtitle")}</p>
                </div>
            </div>
            <EventNotFound/>
        </>
    );
};

export default Page;