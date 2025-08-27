'use client'
import CardImg from "@/components/pages/home/Cardimg";
import {useMessages, useTranslations} from "next-intl";
import {useState} from "react";
import Modal from "@/components/commons/ui/modal/modal";
import Gallery from "@/components/commons/ui/gallery/gallery";
import CdnImage from "@/components/commons/ui/CdnImage";

const SectionSuites = () => {
    const tmenu = useTranslations('menu');
    const {weddings: {group_event_alt}} = useMessages('weddings');

    const [suites, setSuites] = useState(false);

    return (
        <div className="grid grid-cols-2 gap-5">
            <CardImg className="col-span-2" src="/img/rooms/360x309/junior-suite-0.jpg" text={tmenu('suites')}
                     onClick={() => setSuites(true)}/>
            <CardImg src="/img/home/360x309/all-inclusive.jpg" text={tmenu('all inclusive')}/>
            <CardImg src="/img/home/360x309/events-wedding.jpg" text={tmenu('wedding')}/>

            <Modal open={suites} setOpen={setSuites}>
                <Gallery>
                    <CdnImage src="/img/weddings/wedding-f.jpg" alt={group_event_alt[0]} width={700} height={400}/>
                    <CdnImage src="/img/weddings/wedding-g.jpg" alt={group_event_alt[1]} width={700} height={400}/>
                    <CdnImage src="/img/weddings/wedding-h.jpg" alt={group_event_alt[2]} width={700} height={400}/>
                    <CdnImage src="/img/weddings/wedding-i.jpg" alt={group_event_alt[3]} width={700} height={400}/>
                </Gallery>
            </Modal>


        </div>
    );
};

export default SectionSuites;