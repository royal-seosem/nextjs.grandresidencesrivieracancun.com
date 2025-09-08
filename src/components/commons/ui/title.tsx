import React, {PropsWithChildren} from 'react';
import {cva, type VariantProps} from "class-variance-authority";
import {cn} from "@/lib/utils";


const titleVariants = cva(
    'text-pretty font-secondary ',
    {
        variants: {
            variant: {
                primary: 'text-primary',
            },
            size: {
                sm: 'text-2xl font-medium',
                md: 'text-3xl',
                lg: 'text-4xl'
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "lg"
        }
    }
)

interface TitleProps extends VariantProps<typeof titleVariants>, React.HTMLAttributes<HTMLHeadingElement> {
    level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}


const Title: React.FC<PropsWithChildren<TitleProps>> = (
    {
        className, children, level = 'h1',
        variant, size,
    }: TitleProps) => {
    const composed = cn(titleVariants({variant, size}), className)
    return React.createElement(level, {className: composed}, children);
};

export default Title;