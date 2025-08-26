import type {Metadata} from "next";
import "../globals.css";
import {NextIntlClientProvider} from "next-intl";
import Header from "@/components/layout/Header/Header";
import localFont from "next/font/local";
import Footer from "@/components/layout/Footer";
import WebSiteProvider from "@/context/WebSiteProvider";
import {getSession} from "@/lib/session";
import {getCountry} from "@/lib/geo";
import ReactQueryProvider from "@/components/commons/shared/ReactQueryProviders";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

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


    return (
        <html lang={locale}>
        <body
            className={`${helveticaNue.className} ${helveticaNue.variable}  ${jost.variable} antialiased`}
        >
        <NextIntlClientProvider>
            <WebSiteProvider initialUser={user} country={country?.country?.isoCode || ""}>
                <ReactQueryProvider>
                    <Header/>
                    {children}
                    <Footer/>
                    <ReactQueryDevtools initialIsOpen={false}/>
                </ReactQueryProvider>
            </WebSiteProvider>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
