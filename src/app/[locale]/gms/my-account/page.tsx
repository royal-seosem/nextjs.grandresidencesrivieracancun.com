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
import {withGmsAuth} from "@/lib/withGmsAuth";
import BlogList from "@/components/pages/Gms/my-account/BlogList";
import MyRoyal from "@/components/pages/Gms/my-account/MyRoyal";

const Page = async () => {
    const t = await getTranslations('gms_home');

    const m = await getMessages();
    const user = await getSession();
    const pointsList = m['gms_home']['points-list'];

    const offers = await getMyAccountOffers();

    return (
        <main>
            <Main/>
            <div className={"my-container"}>
                <div className={"lg:flex items-stretch gap-5"}>
                    <div className={"hidden h-auto lg:block basis-1/3 w-1/3 grow-0 shrink-0"}>
                        <MyRoyal/>
                    </div>
                    <div className={"basis-2/3"}>
                        <h1 className="my-6 font-secondary text-4xl text-center md:text-6xl">
                            {t('hello', {NAME: user?.name || ""})}
                        </h1>

                        <div className={"mb-2"}>
                            <RichText id={"description"} ns={"gms_home"}/>
                        </div>

                        <div className={"md:flex md:mb-10 items-stretch flex-row-reverse gap-8"}>

                            <div className={"mb-2 basis-1/2 md:min-h-[500px]"}>
                                <CdnImage
                                    className={"w-full h-full object-cover"}
                                    width={320} height={296}
                                    alt={"My Royal"}
                                    src={"/img/my-royal/background-my-royal-mobile.jpg"}/>
                            </div>

                            <div className={"basis-1/2 md:flex md:items-center "}>
                                <div>
                                    <Paragraph
                                        className={"text-center font-bold text-base"}>{t('points-title')}</Paragraph>
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
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <h2 className="text-3xl md:text-5xl text-center mb-6">
                    {t('destination-title')}
                </h2>
                <Paragraph className="text-center">
                    {t('destination-description')}
                </Paragraph>

                <div className={"mb-10"}>
                    <DestinationGallery/>
                </div>

            </div>

            {
                offers.success && offers.data &&
                <div className={"mb-5"}>
                    <MyAccountOffers offers={offers.data}/>
                </div>
            }

            <div className={"my-container"}>
                <h2 className="text-3xl md:text-5xl text-center mb-5">
                    {t('blog-title')}
                </h2>
            </div>

            <BlogList/>

        </main>
    );
};

export default withGmsAuth(Page);