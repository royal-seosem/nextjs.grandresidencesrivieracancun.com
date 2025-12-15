'use client'
import dynamic from "next/dynamic";
import React from 'react';
import MyRoyalCircleIcon from "@/components/commons/icons/my-royal-circle.svg?svgo=false";
import ArrowRightIcon from "@/components/commons/icons/arrow-right.svg";
import {Button} from "@/components/commons/ui/button";
import WithTranslateCliente, {WithTranslationProps} from "@/components/commons/shared/withTranslateCliente";
const ModalMyRoyalSignUp = dynamic(()=> import("@/components/commons/shared/my-royal/ModalMyRoyalSignUp"));

type LogInModalOfferProps = object

const LogInModalOffer = (
    {messages}: {} & WithTranslationProps
) => {
    const [show, setShow] = React.useState(false);

    return (
        <div className="@container">
            <div className="bg-[#fbf1de] flex flex-col items-center justify-center gap-2 py-6 px-5
                   @3xl:justify-between @3xl:flex-row @3xl:px-8">
                <div className="flex flex-col items-center gap-2
                    @3xl:flex-row @3xl:w-1/2 mb-2">
                    <MyRoyalCircleIcon width={37} height={37}/>
                    <p className={"text-center"}
                       dangerouslySetInnerHTML={{__html: messages['offers-template2.cintillo_text'] as string}}>
                    </p>
                </div>

                <Button variant={"outline"} className="uppercase bg-transparent"
                        onClick={() => setShow(true)}>
                    {messages['offers-template2.cintillo_btn'] as string}
                    <ArrowRightIcon width={16} height={16}/>
                </Button>
            </div>

            {show && <ModalMyRoyalSignUp show={show} setShow={setShow}/>}
        </div>

    );
};


export default WithTranslateCliente(LogInModalOffer, [
    "offers-template2.cintillo_text",
    "offers-template2.cintillo_btn"
]) as React.FC<LogInModalOfferProps>;