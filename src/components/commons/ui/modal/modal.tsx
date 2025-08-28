import React from 'react';
import {Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle} from "@/components/commons/ui/drawer";
import CloseIcon from "@/components/commons/icons/close.svg";
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/commons/ui/dialog";
import useIsDesktop from "@/components/commons/ui/modal/useIsDesktop";

interface ModalProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    header: string;
    children?: React.ReactNode;
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
                {children}
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

const deskModal = ({open, setOpen, children, header}: ModalProps) => {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent showCloseButton={false}>
                <DialogHeader className='read-only hidden'>
                    <DialogTitle>
                        {header}
                    </DialogTitle>
                </DialogHeader>
                {children}
            </DialogContent>
        </Dialog>
    );
}

const Modal = (props) => {
    const {isDesktop} = useIsDesktop();

    if (isDesktop) return deskModal({...props});

    return mobileModal({...props});
};

export default Modal;