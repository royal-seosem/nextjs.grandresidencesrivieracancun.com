'use client'
import React from 'react';
import MyRoyalCircleIcon from "@/components/commons/icons/my-royal-circle.svg?svgo=false";
import ArrowRightIcon from "@/components/commons/icons/arrow-right.svg";

import {useTranslations} from "next-intl";
import {Button} from "@/components/commons/ui/button";
import ModalMyRoyalSignUp from "@/components/commons/shared/my-royal/ModalMyRoyalSignUp";


const LogInModalOffer = () => {
    const t = useTranslations('offers-template2');
    const [show, setShow] = React.useState(false);

    return (
        <div className="@container">
            <div className="bg-[#fbf1de] flex flex-col items-center justify-center gap-2 py-6 px-5
                   @3xl:justify-between @3xl:flex-row @3xl:px-8">
                <div className="flex flex-col items-center gap-2
                    @3xl:flex-row @3xl:w-1/2 mb-2">
                    <MyRoyalCircleIcon width={37} height={37}/>
                    <p className={"text-center"}>
                        {
                            t.rich('cintillo_text', {
                                b: (chunks) => <b>{chunks}</b>
                            })
                        }
                    </p>
                </div>

                <Button variant={"outline"} className="uppercase bg-transparent"
                        onClick={() => setShow(true)}>
                    {t('cintillo_btn')}
                    <ArrowRightIcon width={16} height={16}/>
                </Button>
            </div>

            <ModalMyRoyalSignUp show={show} setShow={setShow}/>
        </div>

    );
};


export default LogInModalOffer;