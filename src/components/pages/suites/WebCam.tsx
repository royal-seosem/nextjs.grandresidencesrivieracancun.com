'use client'
import React from 'react';
import dynamic from "next/dynamic";
import {cn} from "@/lib/utils";
import WebcamIcon from "@/components/commons/icons/web-cam.svg";

const ModalWebCam = dynamic(() => import("@/components/pages/suites/ModalWebCam"), {ssr: false});

interface WebCamProps {
    className?: string;
}

const WebCam = ({className}: WebCamProps) => {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <button className={cn('flex items-center gap-1 text-base font-bold px-2', className)}
                    onClick={() => setOpen(true)}>
                <WebcamIcon width={24} height={24}/>
                <span className="leading-4 text-center">WEB CAM</span>
            </button>
            <ModalWebCam open={open} setOpen={setOpen}/>
        </>
    );
};

export default WebCam;