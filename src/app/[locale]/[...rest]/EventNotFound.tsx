'use client'
import {useEffect} from 'react';
import {pushToDataLayer} from "@/lib/gtm";

const EventNotFound = () => {
    useEffect(() => {

        const event = {
            'event': 'error_404',
            'requestedURL': window.location.href,
            'referrer': document.referrer
        };

        pushToDataLayer(event);
    }, []);

    return null;
};

export default EventNotFound;