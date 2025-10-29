import React from 'react';
import {useTranslations} from "next-intl";
import ResetPasswordForm from "@/components/pages/Gms/reset-password/ResetPasswordForm";

const Page = () => {
    const t = useTranslations('gms');

    return (
        <main>
            <div className={"my-container"}>
                <div className={"max-w-[700px] mx-auto"}>
                    <h1 className="text-center font-secondary text-4xl my-6">{t('Resert your password')}</h1>

                    <ResetPasswordForm/>
                </div>

            </div>
        </main>
    );
};

export default Page;