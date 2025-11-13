import React from 'react';
import {Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle} from "@/components/commons/ui/drawer";
import CloseIcon from "@/components/commons/icons/close.svg";
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/commons/ui/dialog";
import useIsDesktop from "@/components/commons/ui/modal/useIsDesktop";
import {ScrollArea} from "@/components/commons/ui/scroll-area";
import {cn} from "@/lib/utils";

interface ModalProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    header: string;
    children?: React.ReactNode;
    classNameModalDesk?: string;
}

const mobileModal = ({open, setOpen, children, header}: ModalProps) => {
    return (
        <Drawer direction="top" open={open} onOpenChange={setOpen}>
            <DrawerContent className="h-screen
                data-[vaul-drawer-direction=top]:mb-0 data-[vaul-drawer-direction=top]:max-h-full
            ">
                <DrawerHeader className='read-only hidden'>
                    <DrawerTitle>
                        {header}
                    </DrawerTitle>
                </DrawerHeader>

                <ScrollArea className="h-[calc(100dvh-50px)]">
                    {children}
                </ScrollArea>

                <DrawerFooter className=" bg-[#ecba5880]">
                    <button
                        className="flex text-sm font-bold items-center justify-center gap-2"
                        onClick={() => setOpen(false)}>
                        <CloseIcon width={20} height={20}/>
                        <span>CLOSE</span>
                    </button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}

const deskModal = ({open, setOpen, children, header, classNameModalDesk = ""}: ModalProps) => {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent
                showCloseButton={false}
                className={cn(
                    "w-[1024px] max-w-[80%] lg:max-w-[80%]",
                    classNameModalDesk
                )}>
                <DialogHeader>
                    <DialogTitle className="hidden" aria-readonly>
                        {header}
                    </DialogTitle>
                </DialogHeader>
                {/*<ScrollArea className="h-[90dvh]">*/}
                {children}
                {/*</ScrollArea>*/}
            </DialogContent>
        </Dialog>
    );
}

const Modal = (props: ModalProps) => {
    const {isDesktop} = useIsDesktop();

    if (isDesktop) return deskModal({...props});

    return mobileModal({...props});
};

export default Modal;