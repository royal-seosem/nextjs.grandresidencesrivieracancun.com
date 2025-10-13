import React from 'react';
import MyRoyalCircleIcon from "@/components/commons/icons/my-royal-circle.svg?svgo=false";
import ArrowRightIcon from "@/components/commons/icons/arrow-right.svg";
import {useTranslations} from "next-intl";
import {Button} from "@/components/commons/ui/button";

const LogInModalOffer = () => {
    const t = useTranslations('offers-template2');
    return (
        <div className="@container">
            <div className="bg-[#fbf1de] flex flex-col items-center justify-center gap-2 py-6 px-5
                   @3xl:justify-between @3xl:flex-row @3xl:py-1 @3xl:px-8">
                <div className="flex flex-col items-center gap-2
                    @3xl:flex-row @3xl:w-1/2">
                    <MyRoyalCircleIcon width={37} height={37}/>
                    <p>
                        {
                            t.rich('cintillo_text', {
                                b: (chunks) => <b>{chunks}</b>
                            })
                        }
                    </p>
                </div>

                <Button className="border-primary border bg-transparent text-primary rounded-xs font-bold uppercase">
                    {t('cintillo_btn')}
                    <ArrowRightIcon width={16} height={16}/>
                </Button>
            </div>
        </div>

    );
};


export default LogInModalOffer;