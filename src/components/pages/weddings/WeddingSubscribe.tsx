'use client'
import React from 'react';
import {useTranslations} from "next-intl";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";

import {weddingSubscriptionSchema} from "@/use_case/subscription/weddingSubscription.schema";
import {Form, FormControl, FormField, FormInput, FormItem} from "@/components/commons/ui/form";
import {Checkbox} from "@/components/commons/ui/checkbox";

const WeddingSubscribe = () => {
    const t = useTranslations('weddings');
    const formSubscribe = useForm<z.infer<typeof weddingSubscriptionSchema>>({
        resolver: zodResolver(weddingSubscriptionSchema),
        defaultValues: {
            first_name: '',
            email: '',
            optin: 1,
            country: ''
        }
    })

    return (
        <div>
            <h3 className="title">
                {t('news title')}
            </h3>
            <Form {...formSubscribe}>
                <form>
                    <FormField
                        control={formSubscribe.control}
                        name={"first_name"}
                        render={({field}) => (
                            <FormItem>
                                <FormControl>
                                    <FormInput {...field}/>
                                </FormControl>
                            </FormItem>
                        )}/>

                    <FormField
                        control={formSubscribe.control}
                        name={"email"}
                        render={({field}) => (
                            <FormItem>
                                <FormControl>
                                    <FormInput {...field}/>
                                </FormControl>
                            </FormItem>
                        )}/>

                    <FormField
                        control={formSubscribe.control}
                        name={"optin"}
                        render={({field}) => (
                            <FormItem className={"border-none"}>
                                <FormControl>
                                    <Checkbox {...field}/>
                                </FormControl>
                            </FormItem>
                        )}/>


                </form>
            </Form>
        </div>
    );
};

export default WeddingSubscribe;