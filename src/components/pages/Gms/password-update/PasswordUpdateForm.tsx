'use client'
import React from 'react';
import {useForm} from "react-hook-form";
import {PasswordUpdateSchema, PasswordUpdateSchemaType} from "@/use_case/gms/password_update/password_update.schema";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormField, FormInput, FormItem, FormLabel, FormMessage} from "@/components/commons/ui/form";
import {useTranslations} from "next-intl";
import {Button} from "@/components/commons/ui/button";
import {PostPasswordUpdate} from "@/use_case/gms/password_update/post_password_update";

const PasswordUpdateForm = () => {
    const t = useTranslations('gms');
    const form = useForm<PasswordUpdateSchemaType>({
        resolver: zodResolver(PasswordUpdateSchema)
    });

    const handleSubmit = async (values: PasswordUpdateSchemaType) => {
        const resp = await PostPasswordUpdate(values)

        if (!resp.success) {
            alert(resp.error?.message || "");
        }

        if (resp.success && resp.data?.message) {
            alert(resp.data?.message || "");
            form.reset()
        }
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <div className={"flex justify-center"}>
                    <FormField
                        name={"password"}
                        control={form.control}
                        render={({field}) => (
                            <FormItem className={"w-[430px]"}>
                                <FormLabel>{t('new password')}</FormLabel>
                                <FormInput
                                    {...field}
                                    type={"password"}
                                    value={field.value || ""}/>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                </div>

                <div className={"text-center"}>
                    <Button variant={"primary"} className={"uppercase w-[150px]"}>
                        {t('save')}
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export default PasswordUpdateForm;