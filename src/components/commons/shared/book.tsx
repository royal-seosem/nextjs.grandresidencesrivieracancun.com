import React from 'react';
import {useTranslations} from "next-intl";

const Book = () => {
    const t = useTranslations('new-offers');
    return (
        <button className="bg-book-bg text-book-text text-sm font-bold px-4 py-2 rounded-xs opacity-80
            hover:opacity-100">
            {t('book now')}
        </button>
    );
};

export default Book;