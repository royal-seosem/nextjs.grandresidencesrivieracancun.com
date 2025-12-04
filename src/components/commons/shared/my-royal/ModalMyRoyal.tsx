'use client'
import React, {useEffect, useState} from 'react';
import MyRoyalVertical from "@/components/commons/icons/my-royal-vertical.svg";
import PorcentajeIcon from "@/components/commons/icons/porcentaje.svg";
import ClockIcon from "@/components/commons/icons/clock.svg";
import CdnImage from "@/components/commons/ui/CdnImage";
import Modal from "@/components/commons/ui/modal/modal";
import {Link} from "@/i18n/navigation";
import WithTranslateCliente, {WithTranslationProps} from "@/components/commons/shared/withTranslateCliente";

const COOKIE_NAME = 'myRoyalModalShown';
const ONE_DAY_MS = 24 * 60 * 60 * 1000;

const ModalMyRoyal = (
    {messages}: WithTranslationProps
) => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasShownToday, setHasShownToday] = useState(true);

    useEffect(() => {
        const lastShown = localStorage.getItem(COOKIE_NAME);
        const now = Date.now();

        if (!lastShown || now - parseInt(lastShown) > ONE_DAY_MS) {
            setHasShownToday(false);
        }
    },[])

    useEffect(() => {
        if (hasShownToday) return;

        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = window.scrollY;
            const scrollPercentage = (scrolled / scrollHeight) * 100;

            if (scrollPercentage >= 60 && !isOpen) {
                setIsOpen(true);
                localStorage.setItem(COOKIE_NAME, Date.now().toString());
                setHasShownToday(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [hasShownToday, isOpen]);

    return (
        <div>
            <Modal open={isOpen} setOpen={setIsOpen}
                   header={"My Royal Modal"}
                   classNameModalDesk={"lg:max-w-[95%] [--container-lg:90%]"}
            >
                <div className={"p-5 md:flex gap-8"}>
                    <div className={"md:order-1 md:w-[310px] shrink-0"}>
                        <CdnImage
                            className={"w-full object-cover md:hidden"}
                            width={370} height={231}
                            alt={"My royal"}
                            src={"/img/my-royal/my-royal-pop.jpg"}/>
                        <CdnImage
                            className={"w-full h-full object-cover hidden md:block"}
                            src={"/img/my-royal/my-royal-pop-w310.jpg"}
                            width={310} height={759}
                            alt={"My royal"}
                        />
                    </div>
                    <div className={"flex flex-col gap-2 items-center"}>
                        <MyRoyalVertical width={191} height={102} className={"mb-9"}/>
                        <p className={"text-4xl font-medium mb-9"}>{messages['gms.Sign me up'] as string}</p>
                        <p className={"text-lg text-center mb-4"}>{messages['gms.login.description'] as string}</p>

                        <ul className="">
                            <li className={"flex gap-4 items-center py-4"}>
                                <PorcentajeIcon width={40} height={40} className={"shrink-0"}/>
                                <p>
                                    <strong>{messages['gms.login.benefits.0.title'] as string}</strong>
                                    {messages['gms.login.benefits.0.description'] as string}
                                </p>
                            </li>
                            <li className={"flex gap-4 items-center py-4"}>
                                <ClockIcon width={40} height={40} className={"shrink-0"}/>
                                <p>
                                    <strong>{messages['gms.login.benefits.1.title'] as string}</strong>
                                    {messages['gms.login.benefits.1.description'] as string}
                                </p>
                            </li>
                        </ul>

                        <div className={"mb-10"}>
                            <Link className="
                        inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive
                        uppercase font-bold text-base
                        px-5 py-2
                        bg-primary text-secondary hover:bg-secondary hover:text-primary" href={"/gms/sign-up"}>
                                {messages['gms.Sign me up'] as string}
                            </Link>
                        </div>

                        <div className={"w-full"}>
                            <p className="">
                                {messages['gms.modal.I already have an account'] as string} &nbsp;
                                <Link className="text-accent" href="/gms/login">
                                    {messages['gms.Log in'] as string}
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>

    );
};

export default  WithTranslateCliente(ModalMyRoyal,[
    'gms.Sign me up',
    'gms.login.description',
    'gms.login.benefits.0.title',
    'gms.login.benefits.0.description',
    'gms.login.benefits.1.title',
    'gms.login.benefits.1.description',
    'gms.modal.I already have an account',
    'gms.Log in'
]) as React.FC<object>;