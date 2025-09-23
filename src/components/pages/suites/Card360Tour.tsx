import React from 'react';
import Ico360 from "@/components/commons/icons/ico-360.svg";
import {useTranslations} from "next-intl";
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/commons/ui/dialog";


interface Card360TourProps {
    title: string;
    src: string;
}

const Card360Tour = ({title, src}: Card360TourProps) => {
    const [open, setOpen] = React.useState(false);
    const t = useTranslations('suites');

    return (
        <div>
            <button className="flex items-center gap-2 text-sm"
                onClick={() => setOpen(true)}>
                <Ico360 className="shrink-0" width={24} height={24}/>
                {t('360 Tour')}
            </button>

            <Dialog open={open} onOpenChange={() => setOpen(false)}>
                <DialogContent
                    showCloseButton={false}
                    className="w-[1024px] max-w-[80%] lg:max-w-[80%]">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold">
                            {title}
                        </DialogTitle>
                    </DialogHeader>
                    <div>
                        <iframe
                            src={src}
                            width="100%"
                            height="450"
                            allowFullScreen
                            allow="autoplay; fullscreen; xr-spatial-tracking"
                        />
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Card360Tour;