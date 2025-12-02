'use client'
import React from 'react';
import Image from "next/image";
import dynamic from "next/dynamic";

const DrawerMenu = dynamic(() => import("@/components/layout/Header/DrawerMenu"), {ssr: false});

const MenuMobile = () => {
    const [open, setOpen] = React.useState(false);


    return (
        <>
            <button onClick={() => setOpen(true)}>
                <Image src={"/icons/hamburger.svg"} alt={"icon menu"} width={24} height={24}/>
            </button>
            {open && <DrawerMenu open={open} setOpen={setOpen}/>}
        </>
    );
};

export default MenuMobile;