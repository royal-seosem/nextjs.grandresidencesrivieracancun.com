'use client'
import React from 'react';
import {cdn} from "@/lib/cdn";

const Main = () => {

    const bgImage = cdn('/img/my-royal/background.png')
    return (
        <div className={`h-[100px]`} style={{
            backgroundImage: `url('${bgImage}')`,
        }}>

        </div>
    );
};

export default Main;