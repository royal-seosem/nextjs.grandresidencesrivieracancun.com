'use client';
import {useEffect, useState} from 'react';

/**
 * Hook que devuelve un booleano indicando si el viewport actual
 * debe considerarse “escritorio”.  El breakpoint por defecto es 1024 px
 * (ancho mínimo para desktop), pero se puede personalizar.
 *
 * Ejemplo:
 * const isDesktop = useDesk();          // usa 1024 px
 * const isDesktop = useDesk(1280);      // usa 1280 px
 */
export function useDesk(minDesktopWidth: number = 1024): boolean {

    const [isDesktop, setIsDesktop] = useState<boolean>(false);

    useEffect(() => {
        const query = window.matchMedia(`(min-width: ${minDesktopWidth}px)`);

        // Handler que actualiza el estado en cada cambio de tamaño
        const handleChange = (e: MediaQueryListEvent | MediaQueryList) =>
            setIsDesktop(e.matches);

        // Safari < 14 no soporta addEventListener en matchMedia
        if (query.addEventListener) {
            query.addEventListener('change', handleChange);
        }

        // Sincroniza en caso de que el tamaño haya cambiado
        handleChange(query);

        return () => {
            if (query.removeEventListener) {
                query.removeEventListener('change', handleChange);
            }
        };
    }, [minDesktopWidth]);

    return isDesktop;
}