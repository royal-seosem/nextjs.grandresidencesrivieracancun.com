'use client'
import React from 'react';
import Image from "next/image";
import {Link} from "@/i18n/navigation";
import ArrowDownIcon from "@/components/commons/icons/ArrowDown.svg";
import MyRoyalUserIcon from "@/components/commons/icons/my-royal-user.svg";
import {useWebsite} from "@/context/WebSiteProvider";
import dynamic from "next/dynamic";

const DrawerMyRoyal = dynamic(() => import("@/components/layout/Header/DrawerMyRoyal"), {ssr: false});

const MyRoyal = () => {
    const {user} = useWebsite();
    const [open, setOpen] = React.useState(false);

    return (
        <>
            {user && <>
                <button className="flex items-center gap-2 whitespace-nowrap"
                        aria-label={"My Royal"} onClick={() => setOpen(true)}>
                    {user.name}
                    <MyRoyalUserIcon width={20} height={20}/>
                    <ArrowDownIcon width={20} height={20}/>
                </button>
                {open && <DrawerMyRoyal open={open} setOpen={setOpen}/>}
            </>}

            {!user && <Link href="/gms/login"
                            className="md:flex md:gap-2 md:items-center md:justify-center"
                            aria-label={"Login to My Royal"}>
                <Image src={'/icons/my-royal.svg'} alt={"Icon my royal"} width={24} height={24}/>
                <span className="hidden md:flex text-white text-base">My Royal</span>
            </Link>}
        </>
    );
};

export default MyRoyal;