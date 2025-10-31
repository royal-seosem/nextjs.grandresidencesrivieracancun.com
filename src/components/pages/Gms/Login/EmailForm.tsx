'use client'
import React from 'react';
import {useTranslations} from "next-intl";
import {useForm} from "react-hook-form";
import {LoginSchema, LoginSchemaType} from "@/use_case/gms/login/login.schema";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormField, FormInput, FormItem, FormLabel, FormMessage} from "@/components/commons/ui/form";
import {loginByEmail} from "@/use_case/gms/login/login_by_email";
import {useWebsite} from "@/context/WebSiteProvider";
import {useRouter} from "next/navigation";

const EmailForm = () => {
    const t = useTranslations('page_login');
    const router = useRouter();
    const {setUser} = useWebsite();

    const formLogin = useForm<LoginSchemaType>({
        resolver: zodResolver(LoginSchema)
    })

    const handleSubmit = async (values: LoginSchemaType) => {
        const resp = await loginByEmail(values);

        if (!resp.success) {
            alert(resp.error?.message || "");
        }
        if (resp.success && resp.data?.id && resp.data?.name) {
            setUser({
                userId: resp.data?.id,
                name: resp.data?.name,
                token: resp.data?.token
            })

            router.push('/gms/my-account');
        }
    }

    return (
        <Form {...formLogin}>
            <form className="mb-4" onSubmit={formLogin.handleSubmit(handleSubmit)}>
                <div className="flex flex-col gap-2 mb-6">
                    <FormField
                        name={"email"}
                        control={formLogin.control}
                        render={({field}) => (
                            <FormItem>
                                <FormLabel htmlFor="email">{t('e-mail')}</FormLabel>
                                <FormInput
                                    {...field}
                                    type={"email"}
                                    value={field.value || ""}/>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                </div>
                <div className="flex flex-col gap-2 mb-6">
                    <FormField
                        name={"password"}
                        control={formLogin.control}
                        render={({field}) => (
                            <FormItem>
                                <FormLabel htmlFor="password">{t('password')}</FormLabel>
                                <FormInput
                                    {...field}
                                    type={"password"}
                                    value={field.value || ""}/>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                </div>
                <button type="submit"
                        className="uppercase bg-primary border-2 text-secondary px-1.5 py-2 text-sm font-bold grow flex justify-center items-center rounded-xs w-[200px] m-auto">
                    {t('log-in')}
                </button>
            </form>
        </Form>

    );
};

export default EmailForm;