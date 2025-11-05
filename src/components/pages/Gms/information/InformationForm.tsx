'use client'
import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {InformationSchema, InformationSchemaType} from "@/use_case/gms/information/information.schema";
import {Form, FormControl, FormField, FormInput, FormItem, FormLabel, FormMessage} from "@/components/commons/ui/form";
import {useTranslations} from "next-intl";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/commons/ui/select";
import countries from '@/use_case/countries.json';
import {Dialog, DialogContent, DialogTitle} from "@/components/commons/ui/dialog";
import {Calendar} from "@/components/commons/ui/calendar";
import {format} from "date-fns";
import {Button} from "@/components/commons/ui/button";
import {postInformation} from "@/use_case/gms/information/post_information";

interface InformationFormProps {
    data: InformationSchemaType;
}

const InformationForm = (
    {data}: InformationFormProps,
) => {
    const t = useTranslations('gms');
    const [openCalendar, setOpenCalendar] = React.useState(false);

    const formInfo = useForm<InformationSchemaType>({
        resolver: zodResolver(InformationSchema),
        defaultValues: data
    })

    const selectedCountry = formInfo.watch('country');
    useEffect(() => {
        formInfo.setValue('stateProvince', '');
    }, [formInfo])

    const statesForSelectedCountry = React.useMemo(() => {
        if (!selectedCountry) return [];
        return countries.find(item => item.value === selectedCountry)?.states || [];
    }, [selectedCountry]);

    const onSubmit = async (values: InformationSchemaType) => {
        const resp = await postInformation(values);
        if (!resp.success) {
            alert(resp.error?.message || "");
        }
        if (resp.success) {
            alert(resp.message || "");
        }
    }


    return (
        <>
            <Form {...formInfo}>
                <form onSubmit={formInfo.handleSubmit(onSubmit)}
                    className="lg:flex lg:flex-col lg:gap-4">
                    <div className={"md:flex gap-4 "}>
                        <FormField
                            name={"name"}
                            control={formInfo.control}
                            render={({field}) => (
                                <FormItem className={"w-full"}>
                                    <FormLabel>{t('name')}</FormLabel>
                                    <FormControl>
                                        <FormInput {...field} value={field.value || ""}/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}/>

                        <FormField
                            name={"lastName"}
                            control={formInfo.control}
                            render={({field}) => (
                                <FormItem className={"w-full"}>
                                    <FormLabel>{t('Last Name')}</FormLabel>
                                    <FormControl>
                                        <FormInput {...field} value={field.value || ""}/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}/>
                    </div>

                    <div className={"md:flex gap-4"}>
                        <FormField
                            name={"country"}
                            control={formInfo.control}
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
                                </FormItem>
                            )}/>

                        <FormField
                            name={"birthDate"}
                            control={formInfo.control}
                            render={({field}) => (
                                <FormItem className={'grow w-full'}>
                                    <FormLabel>{t('Date of birth')}</FormLabel>
                                    <FormControl>
                                        <FormInput
                                            onClick={() => setOpenCalendar(true)}
                                            {...field}
                                            value={field.value || ""}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}/>
                    </div>

                    <div className={"md:flex gap-4"}>
                        <FormField
                            name={"stateProvince"}
                            control={formInfo.control}
                            render={({field}) => (
                                <FormItem className={"grow w-full"}>
                                    <FormLabel>{t('state or province')}</FormLabel>
                                    <FormControl>
                                        <Select
                                            name={field.name}
                                            value={field.value || ""}
                                            onValueChange={field.onChange}>
                                            <SelectTrigger>
                                                <SelectValue/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                {statesForSelectedCountry.map((item: {
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
                                </FormItem>
                            )}/>

                        <FormField
                            name={"phoneNumber"}
                            control={formInfo.control}
                            render={({field}) => (
                                <FormItem className={'grow w-full'}>
                                    <FormLabel>{t('phone number')}</FormLabel>
                                    <FormControl>
                                        <FormInput
                                            {...field}
                                            value={field.value || ""}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}/>
                    </div>

                    <div className={"md:flex gap-4"}>
                        <FormField
                            name={"postalCode"}
                            control={formInfo.control}
                            render={({field}) => (
                                <FormItem className={'grow w-full'}>
                                    <FormLabel>{t('postal code')}</FormLabel>
                                    <FormControl>
                                        <FormInput
                                            {...field}
                                            value={field.value || ""}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}/>
                        <div className="w-full">

                        </div>
                    </div>

                    <div className={"flex justify-center"}>
                        <Button variant={"primary"} className={"uppercase min-w-[136px]"}>
                            {t('save')}
                        </Button>
                    </div>
                </form>
            </Form>
            <Dialog open={openCalendar} onOpenChange={setOpenCalendar}>
                <DialogContent
                    className={"p-0"}
                    showCloseButton={false}>
                    <DialogTitle className="hidden" aria-readonly>Check In</DialogTitle>
                    <Calendar
                        mode="single"
                        className={"w-full"}
                        selected={formInfo.watch('birthDate') ? new Date(formInfo.watch('birthDate')) : undefined}
                        onSelect={(date) => {
                            if (date) {
                                formInfo.setValue('birthDate', format(date, 'yyyy-MM-dd'));
                                setOpenCalendar(false);
                            }
                        }}
                    />
                </DialogContent>
            </Dialog>
        </>

    );
};

export default InformationForm;