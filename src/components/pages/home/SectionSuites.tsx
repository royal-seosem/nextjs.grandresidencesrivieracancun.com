'use client'
import {useState} from "react";
import {useMessages, useTranslations} from "next-intl";
import {CarouselItem} from "@/components/commons/ui/carousel";
import CardImg from "@/components/pages/home/Cardimg";
import Modal from "@/components/commons/ui/modal/modal";
import Gallery from "@/components/commons/ui/gallery/gallery";
import CdnImage from "@/components/commons/ui/CdnImage";
import Title from "@/components/commons/ui/title";
import Paragraph from "@/components/commons/ui/paragraph";
import ArrowRightIcon from "@/components/commons/icons/arrow-right.svg";
import LinkButton from "@/components/commons/ui/link";

const SectionSuites = () => {
    const t = useTranslations('general');
    const tmenu = useTranslations('menu');
    const thome = useTranslations('home');
    const {
        weddings: {group_event_alt},
        home: {habitaciones, amenities_alt, plan_ep_descripcion}
    } = useMessages('weddings');

    const [suites, setSuites] = useState(false);
    const [allInclusive, setAllInclusive] = useState(false);
    const [wedding, setWedding] = useState(false);

    return (
        <>
            <div className="grid grid-cols-2 gap-5">
                <CardImg
                    className="col-span-2 " src="/img/rooms/360x309/junior-suite-0.jpg" text={tmenu('suites')}
                    onClick={() => setSuites(true)}/>

                <CardImg
                    src="/img/home/360x309/all-inclusive.jpg"
                    text={tmenu('all inclusive')}
                    onClick={() => setAllInclusive(true)}/>

                <CardImg
                    src="/img/home/360x309/events-wedding.jpg"
                    text={tmenu('wedding')}
                    onClick={() => setWedding(true)}
                />

                <Modal open={suites} setOpen={setSuites} header={thome('habitaciones titulo')}>
                    <Gallery>
                        <CarouselItem>
                            <figure className="relative">
                                <CdnImage alt={habitaciones[0]} src="/img/rooms/junior-suite-king.jpg" width={748}
                                          height={448}/>
                                <figcaption
                                    className="absolute bg-white opacity-90 p-2.5 text-sm text-primary top-0 right-0 rounded-l-xs">
                                    {habitaciones[0]}
                                </figcaption>
                            </figure>
                        </CarouselItem>

                        <CarouselItem>
                            <figure className="relative">
                                <CdnImage alt={habitaciones[1]} src="/img/rooms/junior-suite-jacuzzi.jpg" width={748}
                                          height={448}/>
                                <figcaption
                                    className="absolute bg-white opacity-90 p-2.5 text-sm text-primary top-0 right-0 rounded-l-xs">
                                    {habitaciones[1]}
                                </figcaption>
                            </figure>
                        </CarouselItem>

                        <CarouselItem>
                            <figure className="relative">

                                <CdnImage alt={habitaciones[2]} src="/img/rooms/master-suite.jpg?v=1" width={748}
                                          height={448}/>
                                <figcaption
                                    className="absolute bg-white opacity-90 p-2.5 text-sm text-primary top-0 right-0 rounded-l-xs">
                                    {habitaciones[2]}
                                </figcaption>
                            </figure>
                        </CarouselItem>

                        <CarouselItem>
                            <figure className="relative">
                                <CdnImage alt={habitaciones[3]} src="/img/rooms/master-suite-private-pool.jpg?v=1"
                                          width={748}
                                          height={448}/>
                                <figcaption
                                    className="absolute bg-white opacity-90 p-2.5 text-sm text-primary top-0 right-0 rounded-l-xs">
                                    {habitaciones[3]}
                                </figcaption>
                            </figure>
                        </CarouselItem>

                        <CarouselItem>
                            <figure className="relative">
                                <CdnImage alt={habitaciones[4]} src="/img/rooms/master-suite-penthouse.jpg" width={748}
                                          height={448}/>
                                <figcaption
                                    className="absolute bg-white opacity-90 p-2.5 text-sm text-primary top-0 right-0 rounded-l-xs">
                                    {habitaciones[4]}
                                </figcaption>
                            </figure>
                        </CarouselItem>

                        <CarouselItem>
                            <figure className="relative">
                                <CdnImage alt={habitaciones[5]} src="/img/rooms/presidencial.jpg?v=2" width={748}
                                          height={448}/>
                                <figcaption
                                    className="absolute bg-white opacity-90 p-2.5 text-sm text-primary top-0 right-0 rounded-l-xs">
                                    {habitaciones[5]}
                                </figcaption>
                            </figure>
                        </CarouselItem>
                    </Gallery>
                    <div className="p-5">
                        <Title level="h3" size="lg">{thome('habitaciones titulo')}</Title>
                        <Paragraph>{thome('habitaciones descripcion')}</Paragraph>
                    </div>
                    <div className="flex justify-center">
                        <LinkButton href="/suites"
                                    className="flex items-center justify-center gap-2 border border-primary py-2 px-1.5 text-sm font-bold text-primary rounded-xs uppercase">
                            {t('go to suites')}
                            <ArrowRightIcon className="shrink-0" width={16} height={16}/>
                        </LinkButton>
                    </div>
                </Modal>

                <Modal open={allInclusive} setOpen={setAllInclusive} header={thome('all inclusive')}>
                    <Gallery variant="primary" position="bottom">
                        <CarouselItem>
                            <CdnImage
                                width={850} height={500}
                                alt={amenities_alt[0]}
                                src="/img/rateplans/all-inclusive.jpg"/>
                            <div className="py-7 px-5">
                                <Title level="h3" size="md">{thome('plan ai')}</Title>
                                <Paragraph>{thome('plan ai descripcion')}</Paragraph>
                                <div>
                                    <LinkButton href="all-inclusive">
                                        {thome('plan ai btn')}
                                    </LinkButton>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <CdnImage
                                width="850" height="500"
                                alt={amenities_alt[1]}
                                src="/img/rateplans/transportations.jpg"/>

                            <div className="py-7 px-5">
                                <Title level="h3" size="md">{thome('plan bb')}</Title>
                                <Paragraph>{thome('plan bb descripcion')}</Paragraph>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <CdnImage
                                width="850" height="500"
                                alt={amenities_alt[2]}
                                src="/img/rateplans/onlyroom.jpg"/>

                            <div className="py-7 px-5">
                                <Title level="h3" size="md">{thome('plan ep')}</Title>
                                <ul>
                                    {
                                        plan_ep_descripcion.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </CarouselItem>

                    </Gallery>
                </Modal>
                <Modal open={wedding} setOpen={setWedding} header={tmenu('wedding')}>
                    <Gallery>
                        <CarouselItem>
                            <CdnImage src="/img/weddings/wedding-f.jpg" alt={group_event_alt[0]} width={700} height={400}/>
                        </CarouselItem>
                        <CarouselItem>
                            <CdnImage src="/img/weddings/wedding-g.jpg" alt={group_event_alt[1]} width={700} height={400}/>
                        </CarouselItem>
                        <CarouselItem>
                            <CdnImage src="/img/weddings/wedding-h.jpg" alt={group_event_alt[2]} width={700} height={400}/>
                        </CarouselItem>
                        <CarouselItem>
                            <CdnImage src="/img/weddings/wedding-i.jpg" alt={group_event_alt[3]} width={700} height={400}/>
                        </CarouselItem>
                    </Gallery>
                    <div className="p-5">
                        <Title level="h3" size="lg">{thome('eventos titulo')}</Title>
                        <Paragraph>{thome('eventos descripcion')}</Paragraph>
                        <div className="flex justify-center">
                            <LinkButton href="/weddings" >
                                {thome('eventos boton')}
                                <ArrowRightIcon className="shrink-0" width={16} height={16}/>
                            </LinkButton>
                        </div>
                    </div>
                </Modal>

            </div>

        </>
    );
};

export default SectionSuites;