import React from 'react';
import {cva, type VariantProps} from "class-variance-authority";
import {Link} from "@/i18n/navigation";
import {cn} from "@/lib/utils";

const linkVariants = cva(
    'flex items-center justify-center gap-2 py-2 px-1.5 text-sm font-bold rounded-xs uppercase  transition-all duration-200 ease-in-out w-fit',
    {
        variants: {
            variant: {
                outline: 'border border-primary text-primary hover:border-secondary hover:bg-secondary hover:shadow-xl',
                link: "text-primary bg-transparent hover:bg-secondary justify-start"
            }
        },
        defaultVariants: {
            variant: 'outline'
        }
    }
)

interface LinkProps extends React.ComponentProps<typeof  Link>, VariantProps<typeof linkVariants> {
}

const LinkButton = ({className, variant, ...props}: LinkProps) => {

    return (
        <Link
            className={cn(linkVariants({variant, className}))}
            {...props} />
    );
};

export default LinkButton;