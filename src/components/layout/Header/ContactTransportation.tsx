'use client'
import {useTranslations} from "next-intl";
import {useForm} from "react-hook-form";
import {z} from 'zod';
import {zodResolver} from "@hookform/resolvers/zod";
import {Dialog, DialogContent, DialogHeader, DialogTrigger} from "@/components/commons/ui/dialog";
import {
    Form,
    FormButton,
    FormControl,
    FormField,
    FormInput,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/commons/ui/form";
import {ScrollArea} from "@/components/commons/ui/scroll-area";
import {Textarea} from "@/components/commons/ui/textarea";
import Script from "next/script";
import {grecaptcha} from "@/types/grecaptcha";
import {sendTransportation} from "@/use_case/supscription/send_transportation";
import {formTransportationSchema} from "@/use_case/supscription/transportations.schema";
import {useGTMEvent} from "@/components/commons/hooks/useGTMEvent";
import {useState} from "react";
import {cn} from "@/lib/utils";
import Image from "next/image";


declare global {
    interface Window {
        grecaptcha: grecaptcha;
    }
}


const ContactTransportation = () => {
    const [showForm, setShowForm] = useState(true);
    const [isSend, setIsSend] = useState(false);

    const t = useTranslations('general');
    const form = useForm<z.infer<typeof formTransportationSchema>>({
        resolver: zodResolver(formTransportationSchema),
        defaultValues: {
            rsvNumber: "",
            name: '',
            email: '',
            phone: "",
            dateCheckIn: "",
            airline: '',
            numberFlight: '',
            comment: "",
            book: ""
        }
    });
    const siteKey = process.env.NEXT_PUBLIC_GOOGLE_CAPTCHA_KEY || "";

    // const dataLayer = useGTMEvent();
    const dataLayer = useGTMEvent();

    const onSubmit = async (values: z.infer<typeof formTransportationSchema>) => {
        setShowForm(false);
        const token = await window.grecaptcha.enterprise.execute(siteKey, {action: 'TRANSPORTATION_FORM'});
        const resp = await sendTransportation(values, token);
        setIsSend(true);
        if (resp.success) {
            dataLayer({
                event: 'contact_form',
                bookThrogh: "Booking",
                status: "OK",
                date: values.dateCheckIn,
            })
        } else {
            dataLayer({
                event: 'contact_form',
                bookThrogh: "Booking",
                status: "KO",
                errorType: resp.error?.message,
                errorCode: resp.error?.code,
            })
        }
    }
    return (
        <>
            <Script
                src={`https://www.google.com/recaptcha/enterprise.js?render=${siteKey}`}
                async defer/>
            <Dialog>
                <DialogTrigger className="bg-menu2 text-white text-base py-1 px-10 rounded-xs uppercase font-medium">
                    {t('btn-contact')}
                </DialogTrigger>

                <DialogContent showCloseButton={false}>
                    <DialogHeader>
                        <h3 className="text-center"> {t('title-transportation')} </h3>
                    </DialogHeader>
                    <ScrollArea className="max-h-[80vh]">
                        {!isSend && (
                            <>
                                <p className="text-xs mb-4">
                                    {t('description-transportation')}
                                </p>
                                <small
                                    className="text-xs italic text-right block mb-2">{t('restriction-transportation')}</small>
                            </>
                        )}

                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)}
                                  className={cn("grid grid-cols-2 gap-3", showForm ? '' : 'hidden')}>
                                <FormField
                                    control={form.control}
                                    name="rsvNumber"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel> Reservation Number</FormLabel>
                                            <FormControl>
                                                <FormInput {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}/>
                                <FormField
                                    control={form.control}
                                    name={'name'}
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Full Name</FormLabel>
                                            <FormControl>
                                                <FormInput {...field}/>
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}/>
                                <FormField
                                    control={form.control}
                                    name={'dateCheckIn'}
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Arrival Date</FormLabel>
                                            <FormControl>
                                                <FormInput {...field}/>
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}/>
                                <FormField
                                    control={form.control}
                                    name={'email'}
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <FormInput {...field}/>
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}/>
                                <FormField
                                    control={form.control}
                                    name={'book'}
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Book Through</FormLabel>
                                            <FormControl>
                                                <FormInput {...field}/>
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}/>
                                <FormField
                                    control={form.control}
                                    name={'airline'}
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Airline</FormLabel>
                                            <FormControl>
                                                <FormInput {...field}/>
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}/>
                                <FormField
                                    control={form.control}
                                    name={'numberFlight'}
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Flight</FormLabel>
                                            <FormControl>
                                                <FormInput {...field}/>
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}/>
                                <FormField
                                    control={form.control}
                                    name={'phone'}
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Phone</FormLabel>
                                            <FormControl>
                                                <FormInput {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}/>

                                <FormField
                                    control={form.control}
                                    name={'comment'}
                                    render={({field}) => (
                                        <FormItem className="col-span-2">
                                            <FormLabel>Comments</FormLabel>
                                            <FormControl>
                                                <Textarea {...field}/>
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}/>

                                <p className="col-span-2 text-xs">
                                    {t('condition-transportation')}
                                </p>
                                <div className="col-span-2 text-center">
                                    <FormButton type="submit">SEND</FormButton>
                                </div>
                            </form>
                        </Form>

                        {!showForm && !isSend && (
                            <Image className="m-auto" src={"/icons/loading-form.gif"} alt={"Loading"} width={50}
                                   height={50}/>
                        )}

                        {isSend && (
                            <p className="text-center">{t("messages-email.transportation")}</p>
                        )}
                    </ScrollArea>

                </DialogContent>
            </Dialog>
        </>
    );
};

export default ContactTransportation;