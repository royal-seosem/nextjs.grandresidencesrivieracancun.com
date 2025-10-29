import React from 'react';
import {useTranslations} from "next-intl";
import Paragraph from "@/components/commons/ui/paragraph";
import ForgotPasswordForm from "@/components/pages/Gms/forgot-password/ForgotPasswordForm";

const Page = () => {
    const t = useTranslations('gms_forgot_password');
    return (
        <main>
            <div className={"my-container"}>
                <div className={"max-w-[700px] mx-auto"}>
                    <h1 className="text-center font-secondary text-4xl my-6">{t('title')}</h1>
                    <Paragraph className="text-center">{t('description')}</Paragraph>

                    <div className={"p-5"}>
                        <ForgotPasswordForm/>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Page;