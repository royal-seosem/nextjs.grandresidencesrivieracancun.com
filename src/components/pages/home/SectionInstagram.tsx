import React from 'react';
import Paragraph from "@/components/commons/ui/paragraph";
import WebCam from "@/components/pages/suites/WebCam";
import {getTranslations} from "next-intl/server";
import {InstagramClient} from "@/components/pages/home/HomeClientComponents";

const SectionInstagram = async () => {
    const t = await getTranslations('home');

    return (
        <div className="my-container">
            <span className="text-5xl text-center text-primary font lg:text-center block">
                #GRMexico
            </span>
            <Paragraph className="text-center text-xl font-bold mb-2">
                {t('instagram')}
            </Paragraph>
            <div className='flex justify-center mb-10'>
                <WebCam
                    className={"border border-primary p-2 rounded-sm text-sm font-bold uppercase"}/>
            </div>

            <InstagramClient/>
        </div>
    );
};

export default SectionInstagram;