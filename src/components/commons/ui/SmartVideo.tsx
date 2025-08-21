'use client'
import {useEffect, useRef, useState} from "react";

type Props = {
    srcDesktop: string;   // Vídeo para ≥ 768 px
    srcMobile: string;    // Vídeo para < 768 px
    posterDesktop?: string;
    posterMobile?: string;
    className?: string;
    loop?: boolean;
};

export default function SmartVideo({
                                       srcDesktop,
                                       srcMobile,
                                       className = "",
                                       loop = true,
                                   }: Props) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [src, setSrc] = useState<string | undefined>(undefined);

    useEffect(() => {
        const mql = window.matchMedia("(max-width: 767px)");
        const chooseSrc = () => {
            setSrc(mql.matches ? srcMobile : srcDesktop)
        };

        chooseSrc();
        mql.addEventListener("change", chooseSrc);
        return () => mql.removeEventListener("change", chooseSrc);
    }, [srcDesktop, srcMobile]);

    useEffect(() => {
        const vid = videoRef.current;
        if (!vid) return;

        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    if (!vid.src) vid.src = src ?? "";
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
    }, [src]);

    return (
        <video
            ref={videoRef}
            className={className}
            poster={""}
            src={src}
            muted
            playsInline
            loop={loop}
        />
    );
}