import React from 'react';
import WithTranslateCliente, {WithTranslationProps} from "@/components/commons/shared/withTranslateCliente";

const Book = (
    {messages}: WithTranslationProps
) => {
    return (
        <button className="bg-book-bg text-book-text text-sm font-bold px-4 py-2 rounded-xs opacity-80
            hover:opacity-100">
            {messages["new-offers.book now"] as string}
        </button>
    );
};

export default WithTranslateCliente(Book, [
    "new-offers.book now"
]) as React.FC<object>;