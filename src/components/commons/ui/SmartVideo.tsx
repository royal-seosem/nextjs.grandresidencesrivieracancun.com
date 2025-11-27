// ... existing code ...
'use client'
import {useEffect, useRef} from "react";

declare module 'react' {
    interface VideoHTMLAttributes<T> extends HTMLAttributes<T> {
        fetchPriority?: 'high' | 'low' | 'auto';
    }
}

type Props = {
    srcDesktop: string;   // Vídeo para ≥ 768 px
    srcMobile: string;    // Vídeo para < 768 px
    posterDesktop?: string;
    posterMobile?: string;
    className?: string;
    loop?: boolean;
    priority?: boolean;
    fetchPriority?: "high" | "low" | "auto";
};

export default function SmartVideo({
                                       srcDesktop,
                                       srcMobile,
                                       className = "",
                                       loop = true,
                                       posterDesktop,
                                       posterMobile,
                                       priority = false,
                                       fetchPriority = "auto"
                                   }: Props) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const isVisibleRef = useRef(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 768px)');

        const handleMediaChange = () => {
            if (videoRef.current) {
                videoRef.current.load();
                if (isVisibleRef.current) {
                    videoRef.current.play().catch(() => {
                    });
                }
            }
        };

        mediaQuery.addEventListener('change', handleMediaChange);

        return () => mediaQuery.removeEventListener('change', handleMediaChange);
    }, []);

    useEffect(() => {
        const vid = videoRef.current;
        if (!vid) return;

        const io = new IntersectionObserver(
            ([entry]) => {
                isVisibleRef.current = entry.isIntersecting;
                if (entry.isIntersecting) {
                    vid.play().catch(() => {
                    });
                } else {
                    vid.pause();
                }
            },
            {threshold: 0.35} // % visible para considerar "en viewport"
        );

        io.observe(vid);
        return () => io.disconnect();
    }, []);


    return (
        <>
            <link
                rel="preload"
                as="image"
                href={posterMobile}
                fetchPriority="high"
            />
            <video
                ref={videoRef}
                className={className}
                poster={posterMobile}
                muted
                playsInline
                autoPlay={priority}
                loop={loop}
                fetchPriority={fetchPriority}
            >
                <source src={srcMobile} media="(max-width: 767px)"/>
                <source src={srcDesktop} media="(min-width: 768px)"/>
            </video>
        </>
    );
}