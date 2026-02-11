import React from 'react';
import {NextIntlClientProvider} from "next-intl";
import {getTranslations} from "next-intl/server";
import Paragraph from "@/components/commons/ui/paragraph";
import ForgotPasswordForm from "@/components/pages/Gms/forgot-password/ForgotPasswordForm";
import {getMessages} from "next-intl/server";



const Page = async () => {
    const m = await getMessages();
    const t =  await getTranslations('gms_forgot_password');
    return (
        <NextIntlClientProvider messages={{
            gms_forgot_password: m['gms_forgot_password'],
            gms: m['gms'],
        }}>
        <main>
            <div className={"my-container pb-20"}>
                <div className={"max-w-[700px] mx-auto"}>
                    <h1 className="text-center font-secondary text-4xl my-6">{t('title')}</h1>
                    <Paragraph className="text-center">{t('description')}</Paragraph>

                    <div className={"p-5"}>
                        <ForgotPasswordForm/>
                    </div>
                </div>
            </div>
        </main>
        </NextIntlClientProvider>
    );
};

export default Page;