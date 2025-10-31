import React from 'react';
import {getSession} from "@/lib/session";
import Main from "@/components/pages/Gms/my-account/main";
import {getMessages, getTranslations} from "next-intl/server";
import RichText from "@/components/commons/shared/RitchText";
import CdnImage from "@/components/commons/ui/CdnImage";
import Paragraph from "@/components/commons/ui/paragraph";
import PreCheckInIcon from "@/components/commons/icons/pre-check-in.svg";
import DestinationGallery from "@/components/pages/Gms/my-account/DestinationGallery";
import MyAccountOffers from "@/components/pages/Gms/my-account/MyAccountOffers";
import {getMyAccountOffers} from "@/use_case/offers/get_my_account_offers";

const Page = async () => {
    const t = await getTranslations('gms_home');
    const m = await getMessages();
    const user = await getSession();
    const pointsList = m['gms_home']['points-list'];

    const offers = await getMyAccountOffers();

    console.log(offers);

    return (
        <main>
            <Main/>
            <div className={"my-container"}>
                <h1 className="my-6 font-secondary text-4xl text-center">{t('hello', {NAME: user?.name || ""})} </h1>
                <div className={"mb-2"}>
                    <RichText id={"description"} ns={"gms_home"}/>
                </div>

                <div className={"mb-2"}>
                    <CdnImage
                        className={"w-full object-cover"}
                        width={320} height={296}
                        alt={"My Royal"}
                        src={"/img/my-royal/background-my-royal-mobile.jpg"}/>
                </div>

                <Paragraph className={"text-center font-bold text-base"}>{t('points-title')}</Paragraph>

                <ul className="mb-5">
                    {
                        pointsList.map((item: string, index: number) => (
                            <li key={index} className={"flex items-center mb-2 gap-2"}>
                                <PreCheckInIcon width={24} height={24} className={"mr-2"}/>
                                {item}
                            </li>
                        ))
                    }
                </ul>


                <h2 className="text-3xl text-center mb-6">{t('destination-title')}</h2>
                <Paragraph className="text-center">
                    {t('destination-description')}
                </Paragraph>

                <DestinationGallery/>
            </div>
            {
                offers.success && offers.data &&
                <MyAccountOffers offers={offers.data}/>
            }

        </main>
    );
};

export default Page;