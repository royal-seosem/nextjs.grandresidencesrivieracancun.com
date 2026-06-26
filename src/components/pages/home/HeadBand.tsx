'use client'

import React from 'react';
import {useTranslations} from "next-intl";
import Link from "next/link";

const HeadBand = () => {
    const tHeader = useTranslations('header');

    return (
        <>
            <div className="headband">
                <div className="content gap-4 flex items-center">
                    <p className="text-white desk">{tHeader('title_hicv')}</p>
                    <p className="text-white mobile" dangerouslySetInnerHTML={{__html:tHeader.raw('title_hicv_mobile')}}></p>
                    <Link className="text-white btn-headband text-center" target={"_blank"} href="https://www.holidayinnclub.com/stays/grand-residences?utm_source=grandresidencesrivieracancun&utm_medium=website_header&utm_campaign=grandresidencesrivieracancun_transition_header">{tHeader('btn_visit')}</Link>
                </div>
            </div>
        </>
    )
}

export default HeadBand;