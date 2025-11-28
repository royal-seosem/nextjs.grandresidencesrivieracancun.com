import type {Metadata} from "next";
import {GoogleTagManager} from '@next/third-parties/google'
import "../globals.css";
import {NextIntlClientProvider} from "next-intl";
import Header from "@/components/layout/Header/Header";
import localFont from "next/font/local";
import WebSiteProvider from "@/context/WebSiteProvider";
import {getSession} from "@/lib/session";
import {getCountry} from "@/lib/geo";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import ReactQueryProvider from "@/components/commons/shared/ReactQueryProviders";
import BookingProvider from "@/components/commons/shared/booking/Context/BookingContext";
import {ChatWeb, ModalMyRoyal} from "@/components/layout/Header/HeaderClientComponent";
import Footer from "@/components/layout/Footer";
import {getMessages} from "next-intl/server";

//TODO: Completar los datos de metainformación
export const metadata: Metadata = {
    title: "Grand Residences Riviera Cancun | Riviera Maya Resort",
    description: "Grand Residences Riviera Cancun is a luxury beachfront resort located in Riviera Maya. Offers you private transportation, gourmet all inclusive restaurants, spa and more!",

    openGraph: {
        title: "Grand Residences Riviera Cancun | Riviera Maya Resort",
        type: "website",
        description: "Grand Residences Riviera Cancun is a luxury beachfront resort located in Riviera Maya. Offers you private transportation, gourmet all inclusive restaurants, spa and more!",
        siteName: "Grand Residences Riviera Cancun",
    },
    twitter: {
        card: "summary_large_image",
        site: "@G_Residences",
        creator: "@G_Residences",
        title: "Grand Residences Riviera Cancun | Riviera Maya Resort",
        description: "Grand Residences Riviera Cancun is a luxury beachfront resort located in Riviera Maya. Offers you private transportation, gourmet all inclusive restaurants, spa and more!",
    },
    icons: {
        icon: '/favicon.ico',
        apple: '/img/icons/grand-residences.png'
    }
};
const helveticaNue = localFont({
    src: [
        {
            path: '../../../public/fonts/HelveticaNeue.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../../public/fonts/HelveticaNeue-Medium.otf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../../public/fonts/HelveticaNeue-Bold.otf',
            weight: '700',
            style: 'normal',
        }
    ],
    variable: '--font-helvetica-nue',
    display: 'swap',
    fallback: ['arial', 'sans-serif']
})
const jost = localFont({
    src: [
        {
            path: '../../../public/fonts/jost-variablefont_wght.ttf',
            style: 'normal',
        }
    ],
    display: 'swap',
    variable: '--font-jost',
    fallback: ['arial', 'sans-serif']
})
const lato = localFont({
    src: [
        {
            path: '../../../public/fonts/Lato-Regular.ttf',
            style: 'normal',
        }
    ],
    display: 'swap',
    variable: '--font-lato',
    fallback: ['sans-serif']
})

export function generateStaticParams() {
    return [{locale: 'en'}, {locale: 'es'}];
}

export default async function RootLayout({children, params}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const {locale} = await params;
    const user = await getSession();
    const country = await getCountry();
    // const messages = await getMessages();


    return (
        <html lang={locale}>
        {process.env.APP_TAG && <GoogleTagManager gtmId="GTM-TTBP86K"/>}


        <body
            className={`${helveticaNue.className} ${helveticaNue.variable}  ${jost.variable}  ${lato.variable} antialiased bg-[#fefdfb]"`}
        >
        <NextIntlClientProvider formats={null}>
            <WebSiteProvider initialUser={user} country={country?.country?.isoCode || ""}>
                <ReactQueryProvider>
                    <BookingProvider>
                        <Header/>
                        {children}
                        <ModalMyRoyal/>
                        <Footer/>
                        <ChatWeb/>
                        <ReactQueryDevtools initialIsOpen={false}/>
                    </BookingProvider>
                </ReactQueryProvider>
            </WebSiteProvider>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
