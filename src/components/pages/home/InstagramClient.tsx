import React from 'react';
import {useInViewport} from "@/components/commons/hooks/useInViewport";
import InstagramFeed from "@/components/commons/shared/InstagramFeed";

const InstagramClient = () => {
    const [ref, inView] = useInViewport<HTMLDivElement>({rootMargin: '100px'});
    return (
        <div ref={ref}>
            {inView && <InstagramFeed/>}
        </div>
    );
};

export default InstagramClient;