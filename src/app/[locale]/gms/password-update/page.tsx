import React from 'react';
import MyRoyal from "@/components/pages/Gms/my-account/MyRoyal";
import {NextIntlClientProvider} from "next-intl";
import RichText from "@/components/commons/shared/RitchText";
import PasswordUpdateForm from "@/components/pages/Gms/password-update/PasswordUpdateForm";
import {getMessages, getTranslations} from "next-intl/server";

const Page = async () => {

    const m = await getMessages();
    const t = await getTranslations('gms_password');

    return (
        <NextIntlClientProvider messages={{
            menu: m['menu'],
            gms: m['gms'],
            gms_password: m['gms_password'],
        }}>
            <main className={"my-container min-h-[70dvh] lg:flex"}>
                <div className={"lg:flex items-stretch gap-5 h-full"}>
                    <div className={"hidden lg:block py-5 w-[360px] m-auto h-full"}>
                        <MyRoyal/>
                    </div>
                    <div>
                        <div className={"p-5 max-w-[880px] mx-auto"}>
                            <h1 className="text-primary text-center text-4xl lg:text-6xl my-5 lg:my-10">{t('title')}</h1>
                            <div className={"text-center"}>
                                <RichText id={'description'} ns={'gms_password'}/>
                            </div>
                        </div>

                        <div className={"pb-5"}>
                            <PasswordUpdateForm/>
                        </div>
                    </div>
                </div>

            </main>
        </NextIntlClientProvider>

    );
};

export default Page;