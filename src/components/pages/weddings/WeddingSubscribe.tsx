'use client'
import React from 'react';
import {useTranslations} from "next-intl";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";

import {weddingSubscriptionSchema} from "@/use_case/subscription/weddingSubscription.schema";
import {Form, FormControl, FormField, FormInput, FormItem} from "@/components/commons/ui/form";
import {Checkbox} from "@/components/commons/ui/checkbox";
import {cdn} from "@/lib/cdn";
import airports from "@/use_case/airports.json";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/commons/ui/select";
import RichTextClient from "@/components/commons/shared/RitchTextClient";
import {Button} from "@/components/commons/ui/button";
import ArrowRightIcon from "@/components/commons/icons/arrow-right.svg";
import Image from "next/image";
import {sendWeddingSubscription} from "@/use_case/subscription/send_wedding_subscription";

const WeddingSubscribe = () => {
    const t = useTranslations('weddings');
    const bgImage = cdn('/img/background/background.jpg');
    const formSubscribe = useForm<z.infer<typeof weddingSubscriptionSchema>>({
        resolver: zodResolver(weddingSubscriptionSchema),
        defaultValues: {
            optin: false,
        }
    })
    const [isSubmitted, setIsSubmitted] = React.useState<string>("viewed");

    const onSubmit = async (values: z.infer<typeof weddingSubscriptionSchema>) => {
        console.log(values);
        setIsSubmitted("sending");
        const response = await sendWeddingSubscription(values);
        if (response.success) {
            setIsSubmitted("success");
        }
        if (!response.success) {
            alert(response.error?.message);
        }
    }

    return (
        <div className={`pt-10 pb-10`}
             style={{backgroundImage: `url(${bgImage})`}}>

            {
                isSubmitted == "viewed" &&
                <>
                    <h3 className="text-accent text-base font-bold mb-4">
                        {t('news title')}
                    </h3>
                    <Form {...formSubscribe}>
                        <form onSubmit={formSubscribe.handleSubmit(onSubmit)}>
                            <FormField
                                control={formSubscribe.control}
                                name={"first_name"}
                                render={({field}) => (
                                    <FormItem className={"bg-white"}>
                                        <FormControl>
                                            <FormInput
                                                {...field}
                                                value={field.value || ""}
                                                placeholder={t('formulario.nombre')}
                                                className={"p-2 text-base text-menu2"}/>
                                        </FormControl>
                                    </FormItem>
                                )}/>

                            <FormField
                                control={formSubscribe.control}
                                name={"email"}
                                render={({field}) => (
                                    <FormItem className={"bg-white"}>
                                        <FormControl>
                                            <FormInput
                                                {...field}
                                                value={field.value || ""}
                                                placeholder={t('formulario.correo')}
                                                className={"p-2 text-base text-menu2"}/>
                                        </FormControl>
                                    </FormItem>
                                )}/>

                            <FormField
                                control={formSubscribe.control}
                                name={"country"}
                                render={({field}) => (
                                    <FormItem className={"bg-white"}>
                                        <FormControl>
                                            <Select
                                                name={field.name}
                                                value={field.value || ""}
                                                onValueChange={field.onChange}>
                                                <SelectTrigger
                                                    className={"p-2 text-base text-left placeholder:text-gray-400 placeholder:opacity-70"}>
                                                    <SelectValue placeholder={t('formulario.pais')}/>
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {airports.map((airport: {
                                                        id: string,
                                                        label: string
                                                    }, index: number) => (
                                                        <SelectItem key={index} value={airport.id}>
                                                            {airport.label}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>

                                            </Select>
                                        </FormControl>
                                    </FormItem>
                                )}/>

                            <Button variant={"primary"} className={"uppercase w-full"}>
                                {t('news boton')}
                                <ArrowRightIcon width={16} height={16}/>
                            </Button>

                            <FormField
                                control={formSubscribe.control}
                                name={"optin"}
                                render={({field}) => (
                                    <FormItem className={"border-none flex items-start gap-2"}>
                                        <FormControl>
                                            <Checkbox
                                                name={field.name}
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                className={"mt-4"}/>
                                        </FormControl>
                                        <RichTextClient id={"news casilla1"} ns={"weddings"}/>
                                    </FormItem>
                                )}/>
                        </form>
                    </Form>
                </>
            }
            {
                isSubmitted == "sending" &&
                <Image
                    className="m-auto"
                    src={"/icons/loading-form.gif"}
                    alt={"Loading"} width={50}
                    height={50}/>
            }
            {
                isSubmitted == "success" &&
                <h3 className="text-accent text-base font-bold mb-4">
                    {t('news thanks')}
                </h3>
            }

        </div>
    );
};

export default WeddingSubscribe;