'use client'
import React from 'react';
import WebcamIcon from "@/components/commons/icons/web-cam.svg";
import {Dialog, DialogContent, DialogHeader} from "@/components/commons/ui/dialog";
import {DialogTitle} from "@radix-ui/react-dialog";
import {cn} from "@/lib/utils";

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
            <Dialog open={open} onOpenChange={() => setOpen(false)}>
                <DialogContent
                    className="w-[1024px] max-w-[80%] lg:max-w-[80%]"
                    showCloseButton={false}>
                    <DialogHeader>
                        <DialogTitle className="hidden" aria-readonly>
                            WEB CAM
                        </DialogTitle>
                    </DialogHeader>
                    <div>
                        <iframe
                            width="100%"
                            height="450"
                            src="https://www.youtube.com/embed/fQJRrJkDKo8?si=2mYIEvRKuEYy5kOU&controls=0&autoplay=1&mute=1"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen/>
                    </div>
                </DialogContent>
            </Dialog>
        </>

    );
};

export default WebCam;