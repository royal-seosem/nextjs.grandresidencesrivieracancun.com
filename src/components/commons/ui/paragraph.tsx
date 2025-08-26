import React from 'react';
import {cn} from "@/lib/utils";

export interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
    variant: 'default' | 'secondary',
    className?: string,
}

const paragraphVariants = {
    'default': 'text-base mt-4 mb-4'
}

const Paragraph = ({variant = 'default', className, children}: ParagraphProps) => {
    const composed = cn('text-pretty',paragraphVariants[variant], className)

    return React.createElement('p', {className: composed}, children);
};

export default Paragraph;