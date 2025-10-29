'use client'
import React from 'react';
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {ResetPasswordSchema, ResetPasswordSchemaType} from "@/use_case/gms/reset_password.schema";
import {Form, FormField, FormInput, FormItem, FormLabel, FormMessage} from "@/components/commons/ui/form";
import {useSearchParams} from "next/navigation";
import {useTranslations} from "next-intl";
import {Button} from "@/components/commons/ui/button";
import {sendResetPassword} from "@/use_case/gms/send_reset_password";

const ResetPasswordForm = () => {
    const [isSent, setIsSent] = React.useState(false);
    const params = useSearchParams();
    const t = useTranslations('gms');

    const formReset = useForm<ResetPasswordSchemaType>({
        resolver: zodResolver(ResetPasswordSchema),
        defaultValues: {
            token: params.get("token") || ""
        }
    })

    const handleSubmit = async (values: ResetPasswordSchemaType) => {
        const resp = await  sendResetPassword(values);
        if (!resp.success){
            alert(resp.error?.message || "");
            setIsSent(false);
        }

        if (resp.success) {
            setIsSent(true);
            formReset.reset();
        }

    }

    return (
        <div className={"p-5"}>
            {/*Token: {params.get('token') || ""}*/}

            {
                isSent &&
                <div className={"p-2.5 text-center text-lg bg-secondary rounded-md mb-6"}>
                    {t('errors.reset_success_password.message')}
                </div>
            }
            <Form {...formReset}>
                <form onSubmit={formReset.handleSubmit(handleSubmit)}>
                    <FormField
                        name={"password"}
                        control={formReset.control}
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>{t('new password')}</FormLabel>
                                <FormInput {...field} value={field.value || ""} type={"password"}/>
                                <FormMessage/>
                            </FormItem>
                        )}/>

                    <FormField
                        name={"confirmPassword"}
                        control={formReset.control}
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>{t('new password (again)')}</FormLabel>
                                <FormInput {...field} value={field.value || ""} type={"password"}/>
                                <FormMessage/>
                            </FormItem>
                        )}/>

                    <div className={"text-center"}>
                        <Button variant={"primary"} className={"uppercase"}>
                            {t('resert password')}
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
};

export default ResetPasswordForm;