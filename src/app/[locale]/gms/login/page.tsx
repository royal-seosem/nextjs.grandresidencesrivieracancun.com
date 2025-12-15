import {LoginPage} from "@/components/pages/Gms/Login/LoginPage";
import {NextIntlClientProvider} from "next-intl";
import {getMessages} from "next-intl/server";

const page = async () => {
    const m = await getMessages();
    return (
        <NextIntlClientProvider messages={{
            gms: {
                "title-gms-program": m['gms']['title-gms-program'],
                "gms-program": m['gms']['gms-program'],
            },
            page_login: m['page_login']
        }}>
            <LoginPage/>
        </NextIntlClientProvider>
    )
}

export default page;