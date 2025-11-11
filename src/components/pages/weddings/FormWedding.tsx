import React from 'react';
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {useTranslations} from "next-intl";
import {Form, FormControl, FormField, FormInput, FormItem, FormLabel} from "@/components/commons/ui/form";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/commons/ui/select";
import {RadioGroup, RadioGroupItem} from "@/components/commons/ui/radio-group";
import {Calendar} from "@/components/commons/ui/calendar";
import {Button} from "@/components/commons/ui/button";
import {Slider} from "@/components/commons/ui/slider";
import {Textarea} from "@/components/commons/ui/textarea";
import {Checkbox} from "@/components/commons/ui/checkbox";
import RichTextClient from "@/components/commons/shared/RitchTextClient";

import {weddingFormSchema, WeddingFormType} from "@/use_case/subscription/weddingForm.schema";
import airports from "@/use_case/airports.json";
import Image from "next/image";
import sendWeddingForm from "@/use_case/subscription/send_wedding_form";
import {Dialog, DialogContent, DialogTitle} from "@/components/commons/ui/dialog";
import {format} from "date-fns";


const FormWedding = () => {
    const t = useTranslations('weddings');
    const [isSubmitted, setIsSubmitted] = React.useState<string>("viewed");
    const [openCheckIn, setOpenCheckIn] = React.useState<boolean>(false);

    const formWedding = useForm<WeddingFormType>({
        resolver: zodResolver(weddingFormSchema),
        defaultValues: {
            havedate: "true",
            budget: 2000
        }
    })

    const onSubmit = async (values: WeddingFormType) => {
        setIsSubmitted("sending");
        const response = await sendWeddingForm(values);

        if (response.success) {
            setIsSubmitted("success");
        }
        if (!response.success) {
            alert(response.error?.message);
            setIsSubmitted("viewed");

        }
    }


    return (
        <>
            {
                isSubmitted == "viewed" &&
                <Form {...formWedding}>
                    <form onSubmit={formWedding.handleSubmit(onSubmit)}>
                        <div className={'flex items-center justify-between gap-2'}>
                            <FormField
                                name={"name"}
                                control={formWedding.control}
                                render={({field}) => (
                                    <FormItem className={'grow'}>
                                        <FormLabel>{t('formulario.nombre')}</FormLabel>
                                        <FormControl>
                                            <FormInput
                                                {...field}
                                                value={field.value || ""}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}/>

                            <FormField
                                name={"lastname"}
                                control={formWedding.control}
                                render={({field}) => (
                                    <FormItem className={'grow'}>
                                        <FormLabel>{t('formulario.apellido')}</FormLabel>
                                        <FormControl>
                                            <FormInput
                                                {...field}
                                                value={field.value || ""}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}/>
                        </div>
                        <div className={'flex items-center justify-between gap-2'}>
                            <FormField
                                name={"email"}
                                control={formWedding.control}
                                render={({field}) => (
                                    <FormItem className={'grow'}>
                                        <FormLabel>{t('formulario.correo')}</FormLabel>
                                        <FormControl>
                                            <FormInput
                                                {...field}
                                                value={field.value || ""}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                name={"phone"}
                                control={formWedding.control}
                                render={({field}) => (
                                    <FormItem className={'grow'}>
                                        <FormLabel>{t('formulario.telefono')}</FormLabel>
                                        <FormControl>
                                            <FormInput
                                                {...field}
                                                value={field.value || ""}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            name={"type"}
                            control={formWedding.control}
                            render={({field}) => (
                                <FormItem className={'grow'}>
                                    <FormLabel>{t('formulario.evento')}</FormLabel>
                                    <FormControl>
                                        <Select
                                            name={field.name}
                                            value={field.value || ""}
                                            onValueChange={field.onChange}>
                                            <SelectTrigger>
                                                <SelectValue/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="wedding">{t('event.0')}</SelectItem>
                                                <SelectItem value="honeymoon">{t('event.1')}</SelectItem>
                                                <SelectItem value="vow-renewal">{t('event.2')}</SelectItem>
                                                <SelectItem value="dinner">{t('event.3')}</SelectItem>
                                                <SelectItem value="other">{t('event.4')}</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <div className={'flex items-center justify-between gap-2'}>
                            <div className={'w-1/2'}>
                                <FormField
                                    name={"havedate"}
                                    control={formWedding.control}
                                    render={({field}) => (
                                        <FormItem className={"border-none"}>
                                            <RadioGroup
                                                className={"gap-1"}
                                                name={field.name}
                                                value={field.value}
                                                onValueChange={field.onChange}>
                                                <div className={'flex items-center gap-2'}>
                                                    <RadioGroupItem value={"true"} id="havedate-yes"/>
                                                    <label
                                                        className={"text-sm text-gray"}
                                                        htmlFor={"havedate-yes"}>We have a date in mind</label>
                                                </div>
                                                <div className={'flex items-center gap-2'}>
                                                    <RadioGroupItem value={"false"} id="havedate-no"/>
                                                    <label
                                                        className={"text-sm text-gray"}
                                                        htmlFor="havedate-no">We&apos;re not sure</label>
                                                </div>
                                            </RadioGroup>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                name={"celebrate"}
                                control={formWedding.control}
                                render={({field}) => (
                                    <FormItem className={'grow'}>
                                        <FormLabel>{t('formulario.fecha')}</FormLabel>
                                        <FormControl>
                                            <FormInput
                                                onClick={() => setOpenCheckIn(true)}
                                                {...field}
                                                value={field.value || ""}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}/>

                        </div>

                        <div className={'flex items-center justify-between gap-2'}>
                            <div className={"w-1/2"}>
                                <FormField
                                    name={"budget"}
                                    control={formWedding.control}
                                    render={({field}) => (
                                        <FormItem className={"border-none"}>
                                            <FormLabel className={"mb-2"}>Estimated budget</FormLabel>
                                            <Slider
                                                className={"w-full  [&_[role=slider]]:bg-accent mb-2"}
                                                value={[field.value || 2000]}
                                                onValueChange={(value) => field.onChange(value[0])}
                                                min={1000}
                                                max={40000}/>

                                            <span className="font-medium tabular-nums">
                                        ${(field.value || 2000).toLocaleString('en-US')} USD
                                    </span>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                name={"contactusGuest"}
                                control={formWedding.control}
                                render={({field}) => (
                                    <FormItem className={'grow'}>
                                        <FormLabel>{t('formulario.invitados')}</FormLabel>
                                        <Select
                                            name={field.name}
                                            value={field.value || ""}
                                            onValueChange={field.onChange}>
                                            <SelectTrigger>
                                                <SelectValue/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="2">2</SelectItem>
                                                <SelectItem value="3">3-15</SelectItem>
                                                <SelectItem value="16">16-20</SelectItem>
                                                <SelectItem value="21">21-30</SelectItem>
                                                <SelectItem value="31">31-50</SelectItem>
                                                <SelectItem value="51">51-80</SelectItem>
                                                <SelectItem value="81">Greater than 81</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}/>
                        </div>

                        <FormField
                            name={"contactusCountry"}
                            control={formWedding.control}
                            render={({field}) => (
                                <FormItem className={"grow"}>
                                    <FormLabel>{t('formulario.pais')}</FormLabel>
                                    <FormControl>
                                        <Select
                                            name={field.name}
                                            value={field.value || ""}
                                            onValueChange={field.onChange}>
                                            <SelectTrigger>
                                                <SelectValue/>
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

                        <FormField
                            name={"comment"}
                            control={formWedding.control}
                            render={({field}) => (
                                <FormItem className={"grow"}>
                                    <FormLabel>{t('formulario.comentarios')}</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            value={field.value || ""}
                                            onChange={field.onChange}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}/>

                        <FormField
                            name={"policy"}
                            control={formWedding.control}
                            render={({field}) => (
                                <FormItem className={"border-none flex items-start gap-2"}>
                                    <FormControl>
                                        <Checkbox
                                            name={field.name}
                                            checked={field.value || false}
                                            onCheckedChange={field.onChange}/>
                                    </FormControl>
                                    <div className={"text-xs"}>
                                        <RichTextClient id={"formulario.casilla1"} ns={"weddings"} components={{
                                            p: (chunks) => <p className={"text-xs"}>{chunks}</p>
                                        }}/>
                                    </div>
                                </FormItem>
                            )}
                        />
                        <div className={"flex justify-center"}>
                            <Button variant={"primary"} className={"uppercase"}>
                                {t('formulario.boton')}
                            </Button>
                        </div>

                    </form>
                </Form>
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

            <Dialog open={openCheckIn} onOpenChange={setOpenCheckIn}>
                <DialogContent
                    className={"p-0"}
                    showCloseButton={false}>
                    <DialogTitle className="hidden" aria-readonly>Check In</DialogTitle>
                    <Calendar
                        mode="single"
                        className={"w-full"}
                        selected={formWedding.watch('celebrate') ? new Date(formWedding.watch('celebrate')) : undefined}
                        onSelect={(date) => {
                            if (date) {
                                formWedding.setValue('celebrate', format(date, 'MM/dd/yyyy'));
                                setOpenCheckIn(false);
                            }
                        }}
                    />
                </DialogContent>
            </Dialog>

        </>

    );
};

export default FormWedding;