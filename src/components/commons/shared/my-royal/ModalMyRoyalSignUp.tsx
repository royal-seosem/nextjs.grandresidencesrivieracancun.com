'use client'
import React from 'react';
import Modal from "@/components/commons/ui/modal/modal";
import CdnImage from "@/components/commons/ui/CdnImage";
import BtnGoogle from "@/components/pages/Gms/signup/BtnGoogle";
import BtnFacebook from "@/components/pages/Gms/signup/BtnFacebook";
import FormEmail from "@/components/pages/Gms/signup/FormEmail";
import {Link} from "@/i18n/navigation";
import PorcenageIcon from "@/components/commons/icons/porcentaje.svg";
import PeopleCheckIcon from "@/components/commons/icons/people-check.svg";
import {useTranslations} from "next-intl";

interface ModalMyRoyalSignUpProps {
    show: boolean;
    setShow: (show: boolean) => void;
}

const ModalMyRoyalSignUp = (
    {show, setShow}: ModalMyRoyalSignUpProps,
) => {
    const tLogin = useTranslations('page_login');
    const tGms = useTranslations('gms');

    return (
        <Modal open={show} setOpen={setShow} header={"My Royal Sign Up"}
               classNameModalDesk={"[--container-lg:90%]"}>
            <div className="md:flex gap-5">
                <div className={"order-1 w-1/2 grow-1"}>
                    <div className={"mb-4"}>
                        <CdnImage
                            className={"w-full object-cover md:hidden"}
                            alt={"my royal"}
                            src={"/img/my-royal/modal-my-royal.jpg"}
                            width={360} height={200}/>

                        <CdnImage
                            className={"hidden md:block lg:hidden w-full object-cover"}
                            src={'/img/my-royal/modal-my-royal-tb.jpg'}
                            width={311} height={447}
                            alt={"my royal"}/>

                        <CdnImage
                            className={"hidden lg:block w-full object-cover"}
                            src={"/img/my-royal/modal-my-royal-desk.jpg"}
                            width={527} height={480}
                            alt={"my royal"}
                        />
                    </div>
                    <div className={"hidden md:block"}>
                        <p className={"mb-2"}>{tGms('modal.benefits-desc')}</p>

                        <ul>
                            <li className={"flex items-center gap-2 mb-4"}>
                                <PorcenageIcon width={40} height={40} className={"shrink-0 w-[40px]"}/>
                                {tGms('modal.benefits1')}
                            </li>
                            <li className={"flex items-center gap-2 "}>
                                <PeopleCheckIcon width={40} height={40} className={"shrink-0 w-[40px]"}/>
                                {tGms('modal.benefits2')}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={"md:w-[420px]"}>
                    <div className={"text-center mb-4"}>
                        <p className="text-4xl font-medium mb-2">{tGms('modal.Join My Royal')}</p>
                        <p className="text-base mb-2">{tGms('modal.description')}</p>
                        <p className="text-sm mb-2">{tGms('modal.text2')}</p>
                    </div>

                    <div className="flex items-center justify-center gap-5 mb-6">
                        <BtnGoogle/>
                        <BtnFacebook/>
                    </div>


                    <p className="text-sm text-center flex justify-center items-center gap-3 mb-5
                     before:block before:w-5 before:h-[1px] before:content-[''] before:bg-[#5a5550]
                     after:block after:w-5 after:h-[1px] after:content-[''] after:bg-[#5a5550]">
                        {tGms('register.or_email')}
                    </p>

                    <div className={"p-5"}>
                        <FormEmail/>
                    </div>

                    <p className="text-base flex gap-1 justify-center mb-6">
                        {tLogin('Forgot your password?')}
                        <Link className="text-accent underline" href={"/gms/forgot-password"}>
                            {tLogin('click here')}
                        </Link>
                    </p>
                </div>
            </div>
        </Modal>
    );
};

export default ModalMyRoyalSignUp;