import React, {PropsWithChildren} from 'react';
import {cn} from "@/lib/utils";

export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    size?: 'sm' | 'md' | 'lg',
    className?: string
}

const titleSize = {
    'sm': '',
    'md': '',
    'lg': 'font-secondary text-4xl text-primary text-pretty'
}


const Title:React.FC<PropsWithChildren<TitleProps>> = ({level = 'h1', size = 'lg', className, children}: TitleProps) => {
    const composed = cn(titleSize[size], className)
    return React.createElement(level, {className: composed}, children);
};

export default Title;