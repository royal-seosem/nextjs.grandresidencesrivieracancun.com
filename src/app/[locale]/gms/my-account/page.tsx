import React from 'react';
import {getSession} from "@/lib/session";

const Page = async () => {
    const user = await getSession();

    return (
        <div>
            My acount {user?.name}
        </div>
    );
};

export default Page;