'use client'
import React, {useEffect} from 'react';
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselGoto,
    CarouselNext,
    CarouselPrevious
} from "@/components/commons/ui/carousel";
import {cn} from "@/lib/utils";

interface GalleryProps {
    children: React.ReactNode;
    variant?: 'secondary' | 'primary',
    position?: 'on' | 'bottom' | 'middle',
    showDots?: boolean,
    setApi?: (api: CarouselApi) => void
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


const Gallery = ({children, variant = 'secondary', position = 'on', showDots = true, setApi}: GalleryProps) => {
    const totalItems = React.Children.count(children);
    const style = galleryStyles[variant];
    const {className} = positionStyles[position];

    return (
        <Carousel
            className="w-full h-full"
            setApi={setApi}
            opts={{
                loop: true,
                containScroll: 'trimSnaps'
            }}>
            <div className="h-full">
                <CarouselContent
                    className="items-stretch table-[border-collapse:collapse] table-[border-spacing:0] h-full">
                    {children}
                </CarouselContent>
            </div>
            <div className={cn(
                'flex justify-between items-center py-2',
                className
            )}>
                {showDots &&
                    <ul className="flex gap-1">
                        {Array.from({length: totalItems}).map((_, index) => (
                            <li key={index}>
                                <CarouselGoto index={index} {...style}/>
                            </li>
                        ))}
                    </ul>
                }

                <div className={cn(
                    'flex gap-2',
                    style.text_color,
                    position == "middle" ? 'w-full justify-between ' : ""
                )}>
                    <CarouselPrevious className={cn(style.text_color)}/>
                    <CarouselNext className={cn(style.text_color)}/>
                </div>
            </div>
        </Carousel>
    );
};

export default Gallery;