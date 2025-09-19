import React from 'react';
import {Button} from "@/components/commons/ui/button";
import {cn} from "@/lib/utils";

interface BookingBookProps {
    className?: string;
}

const BookingBook = ({className}: BookingBookProps) => {
    return (
        <Button className={cn(
            'h-auto rounded-sm bg-book-bg text-book-text  text-sm font-bold',
            className
        )}>
            BOOK NOW
        </Button>
    );
};

export default BookingBook;