import React from 'react';
import {useTranslations} from "next-intl";

const Book = () => {
    const t = useTranslations('new-offers');
    return (
        <button>
            {t('book now')}
        </button>
    );
};

export default Book;