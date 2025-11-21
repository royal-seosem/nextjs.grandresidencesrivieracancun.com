'use client'
import React from 'react';
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselGoto,
    CarouselNext,
    CarouselOptions,
    CarouselPrevious
} from "@/components/commons/ui/carousel";
import {cn} from "@/lib/utils";

interface GalleryProps {
    children: React.ReactNode;
    variant?: 'secondary' | 'primary',
    position?: 'on' | 'bottom' | 'middle',
    showDots?: boolean,
    showArrows?: boolean,
    btnClassName?: string,
    setApi?: (api: CarouselApi) => void
    button?: React.ReactNode,
    options?: CarouselOptions,
}

const galleryStyles = {
    primary: {
        text_color: 'text-primary hover:text-secondary',
        className: 'bg-primary',
        classNameActive: 'bg-secondary',
    },
    secondary: {
        text_color: 'text-white',
        className: 'bg-white',
        classNameActive: 'bg-secondary',
    }
}

const positionStyles = {
    on: {
        className: 'absolute bottom-0 left-0 w-full px-1',
    },
    bottom: {
        className: '',
    },
    middle: {
        className: 'absolute top-1/2 w-full -translate-y-1/2',
    }
}


const Gallery = (
    {
        children,
        variant = 'secondary',
        position = 'on',
        showDots = true,
        showArrows = true,
        setApi,
        button,
        options,
        btnClassName
    }: GalleryProps
) => {
    const totalItems = React.Children.count(children);
    const style = galleryStyles[variant];
    const {className} = positionStyles[position];
    const optionsDefault: CarouselOptions = {
        loop: true,
        containScroll: 'trimSnaps',
        ...options,
    }

    return (
        <Carousel
            className="w-full h-full"
            setApi={setApi}
            opts={optionsDefault}>
            <div className="h-full">
                <CarouselContent
                    className="items-stretch table-[border-collapse:collapse] table-[border-spacing:0] h-full">
                    {children}
                </CarouselContent>
            </div>
            <div className={cn(
                'flex justify-between items-center py-2',
                button ? 'flex-wrap md:flex-nowrap' : '',
                className,
                btnClassName
            )}>
                {button && <div className="w-full text-center md:w-auto">{button}</div>}
                {showDots &&
                    <ul className="flex gap-1">
                        {Array.from({length: totalItems}).map((_, index) => (
                            <li key={index}>
                                <CarouselGoto index={index} {...style}/>
                            </li>
                        ))}
                    </ul>
                }

                {showArrows &&
                    <div className={cn(
                        'flex gap-2',
                        style.text_color,
                        position == "middle" ? 'w-full justify-between ' : ""
                    )}>
                        <CarouselPrevious className={cn(style.text_color)}/>
                        <CarouselNext className={cn(style.text_color)}/>
                    </div>
                }

            </div>
        </Carousel>
    );
};

export default Gallery;