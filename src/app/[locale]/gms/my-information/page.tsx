import React from 'react';
import Paragraph from "@/components/commons/ui/paragraph";
import InformationForm from "@/components/pages/Gms/information/InformationForm";
import {withGmsAuth} from "@/lib/withGmsAuth";
import {getTranslations} from "next-intl/server";
import {getInformation} from "@/use_case/gms/information/get_information";
import {redirect} from "next/navigation";
import MyRoyal from "@/components/pages/Gms/my-account/MyRoyal";

const Page = async () => {
    const t = await getTranslations('gms_information');
    const data = await getInformation();

    console.log(data)
    if (!data.data) {
        redirect('/gms/login')

        return <></>
    }


    return (
        <main className={"my-container min-h-[70dvh] lg:flex"}>
            <div className={"lg:flex items-stretch gap-5 h-full"}>
                <div className={"hidden lg:block py-5 w-[360px] m-auto h-full"}>
                    <MyRoyal/>
                </div>
                <div>
                    <div className={"p-5 max-w-[880px] mx-auto"}>
                        <h1 className="text-primary text-center text-4xl lg:text-6xl my-5 lg:my-10">{t('title')}</h1>
                        <Paragraph className="text-center">{t('description')}</Paragraph>
                    </div>

                    <div className={"pb-5"}>
                        <InformationForm data={data.data}/>
                    </div>
                </div>
            </div>

        </main>
    );
};

export default withGmsAuth(Page);