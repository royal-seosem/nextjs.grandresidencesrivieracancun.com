import React from 'react';
import {Dialog, DialogContent, DialogHeader} from "@/components/commons/ui/dialog";
import {DialogTitle} from "@radix-ui/react-dialog";

interface ModalWebCamProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const ModalWebCam = (
    {open, setOpen}: ModalWebCamProps
) => {
    return (
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
    );
};

export default ModalWebCam;