'use client'
import React, { useEffect } from 'react';

const EventNotFound = () => {
    useEffect(() => {
        const event = {
            'event': 'error_404',
            'requestedURL': window.location.href,
            'referrer': document.referrer
        };

        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push(event);
    }, []);

    return null;
};

export default EventNotFound;