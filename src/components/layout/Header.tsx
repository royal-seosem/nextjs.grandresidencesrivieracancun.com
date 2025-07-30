import {useTranslations} from 'next-intl';
import Image from "next/image";

export default function Header() {
    const t = useTranslations('header');

    return <header className="">
        {t('title')}
        <div className="flex">
            <a href="https://wa.me/529981000692" target="_blank">
                <Image src="/icons/whatsapp.svg" alt="Whatsapp Grand Residences" width="24" height="25"/>
                52 99 81 00 06 92
            </a>

            {/*<button className="hd--alert--manage-reservation hide-sm hide-900" toggle='modal'*/}
            {/*        data-target='#modal-manage-reservation'>*/}
            {/*    <img loading='lazy' src="{{asset('/img/icons/pencil.svg')}}" alt="travel information"*/}
            {/*         width="16" height="16"*/}
            {/*         className="hd--alert--ico"/>*/}
            {/*    {{__('general.menu.manage reservations')}}*/}
            {/*</button>*/}

            {/*<a href="#" target="_blanck" className="hd--alert--owners-area login-pop">*/}
            {/*    <img loading='lazy' src="{{asset('/img/icons/key.svg')}}" alt="Login" className="hd--alert--ico"*/}
            {/*         width="12" height="12"/>*/}
            {/*    {{__('general.owners area')}}*/}
            {/*</a>*/}
        </div>
    </header>
}