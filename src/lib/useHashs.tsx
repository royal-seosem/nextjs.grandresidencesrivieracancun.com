'use client'
import {useEffect, useState} from 'react';

const useHashs = () => {
    const [hash, setHash] = useState('');

    useEffect(() => {
        // Obtener el hash inicial
        setHash(window.location.hash.replace('#', ''));

        // Función para manejar cambios
        const handleHashChange = () => {
            setHash(window.location.hash.replace('#', ''));
        };

        // Escuchar cambios
        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return hash;
};

export default useHashs;