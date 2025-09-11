'use client';

import {useEffect, useRef, useState} from 'react';

/**
 * Devuelve una ref que debe colocarse en el elemento a observar y un boolean
 * que indica si dicho elemento ya entró (al menos una vez) en el viewport.
 *
 * El elemento deja de ser observado en cuanto entra en pantalla para evitar
 * llamadas redundantes.
 */

export function useInViewport<T extends HTMLElement = HTMLElement>(
    options?: IntersectionObserverInit,
): [React.RefObject<T | null>, boolean] {
    const ref = useRef<T>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const target = ref.current;
        if (!target) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true);
                console.log('in view');
                observer.unobserve(entry.target); // deja de observar
            }
        }, options);

        observer.observe(target);
        return () => observer.disconnect();
    }, [options]);

    return [ref, inView];
}