'use client'
import React from 'react';
import Paragraph from "@/components/commons/ui/paragraph";
import {useTranslations} from "next-intl";
import InstagramFeed from "@/components/commons/shared/InstagramFeed";
import {useInViewport} from "@/components/commons/hooks/useInViewport";
import WebCam from "@/components/pages/suites/WebCam";

const SectionInstagram = () => {
    const t = useTranslations('home');

    const [ref, inView] = useInViewport<HTMLDivElement>({rootMargin: '100px'});

    return (
        <div ref={ref} className="my-container">
            <span className="text-5xl text-center text-primary font lg:text-center block">
                #GRMexico
            </span>
            <Paragraph className="text-center text-xl font-bold mb-2">
                {t('instagram')}
            </Paragraph>
            <div className='flex justify-center mb-10'>
                <WebCam
                    className={"border border-primary p-2 rounded-sm text-sm font-bold uppercase"}/>
                {/*<Button variant={"outline"} className={"font-bold"}>*/}
                {/*    <WebcamIcon className="shrink-0" width={23} height={23}/>*/}
                {/*    <span>WEB CAM</span>*/}
                {/*</Button>*/}
            </div>

            {inView && <InstagramFeed/>}
        </div>
    );
};

export default SectionInstagram;