import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselGoto,
    CarouselNext,
    CarouselPrevious
} from "@/components/commons/ui/carousel";
import {cn} from "@/lib/utils";

interface GalleryProps {
    children: React.ReactNode;
    variant?: 'secondary' | 'primary',
    position?: 'on' | 'bottom',
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
    }
}

const Gallery = ({children, variant = 'secondary', position = 'on'}: GalleryProps) => {
    const totalItems = React.Children.count(children);
    const style = galleryStyles[variant];
    const {className} = positionStyles[position];
    return (
        <Carousel
            className="w-full h-full"
            opts={{
                loop: true
            }}>
            <div className="h-full">
                <CarouselContent className="items-stretch table-[border-collapse:collapse] table-[border-spacing:0] h-full">
                    {children}
                </CarouselContent>
            </div>
            <div className={cn(
                'flex justify-between items-center py-2',
                className
            )}>
                <ul className="flex gap-1">
                    {Array.from({length: totalItems}).map((_, index) => (
                        <li key={index}>
                            <CarouselGoto index={index} {...style}/>
                        </li>
                    ))}
                </ul>
                <div className={cn(
                    'flex gap-2',
                    style.text_color,
                )}>
                    <CarouselPrevious className={cn(style.text_color)}/>
                    <CarouselNext className={cn(style.text_color)}/>
                </div>
            </div>
        </Carousel>
    );
};

export default Gallery;