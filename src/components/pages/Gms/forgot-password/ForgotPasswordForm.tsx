'use client'
import React from 'react';
import {useTranslations} from "next-intl";
import {zodResolver} from "@hookform/resolvers/zod";
import {ForgotPasswordSchema, ForgotPasswordSchemaType} from "@/use_case/gms/forgot_password.schema";
import {Form, FormField, FormInput, FormItem, FormLabel} from "@/components/commons/ui/form";
import {useForm} from "react-hook-form";
import {Button} from "@/components/commons/ui/button";
import {sendForgotPassword} from "@/use_case/gms/send_forgot_password";

const ForgotPasswordForm = () => {
    const [isSent, setIsSent] = React.useState(false);

    const formPassword = useForm<ForgotPasswordSchemaType>({
        resolver: zodResolver(ForgotPasswordSchema)
    })

    const t = useTranslations('gms');
    const tF = useTranslations('gms_forgot_password');

    const handleSubmit = async (values: ForgotPasswordSchemaType) => {
        const resp = await sendForgotPassword(values);

        if (!resp.success) {
            alert(resp.error?.message || "");
            setIsSent(false);
        }

        if (resp.success) {
            setIsSent(true);
        }
    };

    return (
        <div>
                {
                    isSent &&
                    <div className={"p-2.5 text-center text-lg bg-secondary rounded-md mb-6"}>
                        {t('reset-email-message')}
                    </div>
                }
                <Form {...formPassword}>
                    <form onSubmit={formPassword.handleSubmit(handleSubmit)}>
                        <FormField
                            name={"email"}
                            control={formPassword.control}
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>{t('Email')}</FormLabel>
                                    <FormInput {...field} value={field.value || ""}/>
                                </FormItem>
                            )}>

                        </FormField>

                        <div className={"text-center"}>
                            <Button variant={"primary"} className={"uppercase"}>
                                {tF('button')}
                            </Button>
                        </div>

                    </form>
                </Form>
        </div>

    );
};

export default ForgotPasswordForm;