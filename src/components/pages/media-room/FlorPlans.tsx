import React, {useCallback, useEffect, useState} from 'react';
import RichTextClient from "@/components/commons/shared/RitchTextClient";
import {FormItem} from "@/components/commons/ui/form";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/commons/ui/select";
import {useMessages, useTranslations} from "next-intl";
import {Carousel, CarouselApi, CarouselContent, CarouselItem} from "@/components/commons/ui/carousel";
import CdnImage from "@/components/commons/ui/CdnImage";


const FlorPlans = () => {
    const t = useTranslations('media-room');
    const m = useMessages();

    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [api, setApi] = useState<CarouselApi>();

    const onSelect = useCallback(() => {
        if (!api) return;
        setCurrentSlide(api.selectedScrollSnap());
    }, [api]);

    useEffect(() => {
        if (!api) return;

        onSelect();
        api.on('select', onSelect);

        return () => {
            api.off('select', onSelect);
        };
    }, [api, onSelect]);


    const suites = m['suites']['suites'];
    console.log(suites);

    return (
        <div className={"pb-5 md:flex gap-4 items-center"}>
            <div className={"md:w-1/2"}>
                <h2 className="text-2xl font-bold leading-[30px]">{t('flor-plans.title2')}</h2>
                <RichTextClient id={"flor-plans.description"} ns={"media-room"}/>
                <FormItem>
                    <Select
                        value={currentSlide.toString()}
                        onValueChange={(value) => api?.scrollTo(parseInt(value))}>
                        <SelectTrigger>
                            <SelectValue/>
                        </SelectTrigger>
                        <SelectContent>
                            {suites.map((item: {
                                name: string;
                                slug: string;
                            }, key: number) => (
                                <SelectItem value={key.toString()} key={key}>
                                    {item.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </FormItem>
            </div>


            <div className={"md:w-1/2"}>
                <Carousel
                    setApi={setApi}>
                    <CarouselContent>
                        {suites.map((item: {
                            name: string;
                            slug: string;
                        }, key: number) => (
                            <CarouselItem key={key}>
                                <figure>
                                    <CdnImage
                                        className={"h-full object-cover w-full block"}
                                        width={730}
                                        height={648}
                                        alt={item.name}
                                        src={`img/rooms/floor-plan/${item.slug}.jpg`}/>
                                    <figcaption className={"text-center text-sm"}>
                                        {item.name}
                                    </figcaption>
                                </figure>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>

        </div>
    );
};

export default FlorPlans;