'use client'
import React from 'react';
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {SignupSchema, SignupSchemaType} from "@/use_case/gms/signup/signup.schema";
import {Form, FormControl, FormField, FormInput, FormItem, FormLabel, FormMessage} from "@/components/commons/ui/form";
import {useTranslations} from "next-intl";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/commons/ui/select";
import countries from "@/use_case/countries.json";
import {Checkbox} from "@/components/commons/ui/checkbox";
import RichTextClient from "@/components/commons/shared/RitchTextClient";
import {Button} from "@/components/commons/ui/button";
import {grecaptcha} from "@/types/grecaptcha";
import Script from "next/script";
import {signupByEmail} from "@/use_case/gms/signup/signup_by_email";


declare global {
    interface Window {
        grecaptcha: grecaptcha;
    }
}


const FormEmail = () => {
    const t = useTranslations('gms');
    const siteKey = process.env.NEXT_PUBLIC_GOOGLE_CAPTCHA_KEY || "";
    const form = useForm<SignupSchemaType>({
        resolver: zodResolver(SignupSchema)
    });

    const handleSubmit = async (values: SignupSchemaType) => {
        const token = await window.grecaptcha.enterprise.execute(siteKey, {action: 'TRANSPORTATION_FORM'});
        const resp = await signupByEmail(values, token);

        if (!resp.success) {
            alert(resp.error?.message || "");
        }

        if (resp.success) {
            alert(resp?.data?.message || "");
            form.reset();
        }

    }
    return (
        <>
            <Script
                src={`https://www.google.com/recaptcha/enterprise.js?render=${siteKey}`}
                async defer/>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)}>
                    <FormField
                        name={"firstName"}
                        control={form.control}
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>{t('name')}</FormLabel>
                                <FormInput {...field} value={field.value || ""}/>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    <FormField
                        name={"lastName"}
                        control={form.control}
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>{t('Last Name')}</FormLabel>
                                <FormInput {...field} value={field.value || ""}/>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    <FormField
                        name={"email"}
                        control={form.control}
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>{t('Email')}</FormLabel>
                                <FormInput {...field} value={field.value || ""}/>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    <FormField
                        name={"password"}
                        control={form.control}
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>{t('Password')}</FormLabel>
                                <FormInput {...field} type={"password"} value={field.value || ""}/>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    <FormField
                        name={"country"}
                        control={form.control}
                        render={({field}) => (
                            <FormItem className={"grow w-full"}>
                                <FormLabel>{t('country')}</FormLabel>
                                <FormControl>
                                    <Select
                                        name={field.name}
                                        value={field.value || ""}
                                        onValueChange={field.onChange}>
                                        <SelectTrigger>
                                            <SelectValue/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            {countries.map((item: {
                                                value: string,
                                                text: string
                                            }, index: number) => (
                                                <SelectItem key={index} value={item.value}>
                                                    {item.text}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}/>

                    <FormField
                        control={form.control}
                        name={"optin"}
                        render={({field}) => (
                            <FormItem className={"border-none flex items-start gap-2"}>
                                <FormControl>
                                    <Checkbox
                                        name={field.name}
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        className={"mt-1"}/>
                                </FormControl>
                                <span>
                                <RichTextClient id={"modal.terms"} ns={"gms"}/>
                            </span>
                            </FormItem>
                        )}/>

                    <div className={"flex justify-center"}>
                        <Button variant={"primary"} className={"uppercase"}>
                            {t('Sign me up')}
                        </Button>
                    </div>

                </form>
            </Form>
        </>


    );
};

export default FormEmail;