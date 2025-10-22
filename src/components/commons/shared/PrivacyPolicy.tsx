import React from 'react';
import {useTranslations} from "next-intl";
import {Link} from "@/i18n/navigation";

const PrivacyPolicy = () => {
    const t = useTranslations('general');
    return (
        <Link href="/privacy" target="_blank">
            {t('privacy')}
        </Link>
    );
};

export default PrivacyPolicy;