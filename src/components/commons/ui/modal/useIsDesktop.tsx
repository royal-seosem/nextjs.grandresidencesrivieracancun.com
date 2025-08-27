import {useEffect, useState} from 'react';


const UseIsDesktop = (breakpoint = 768) => {
    const [isDesktop, setIsDesktop] = useState(() =>
        typeof window !== 'undefined' ? window.innerWidth > breakpoint : false
    );

    useEffect(() => {
        if (typeof window === 'undefined' || !('ResizeObserver' in window)) return;
        const update = () =>
            setIsDesktop(document.documentElement.clientWidth >= breakpoint);

        const ro = new ResizeObserver(update);
        ro.observe(document.documentElement); // observamos el root

        update();

        return () => ro.disconnect();

    }, [breakpoint])
    return {
        isDesktop
    };
};

export default UseIsDesktop;