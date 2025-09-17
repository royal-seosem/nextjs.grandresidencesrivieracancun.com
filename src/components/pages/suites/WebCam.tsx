import React from 'react';
import WebcamIcon from "@/components/commons/icons/web-cam.svg";

const WebCam = () => {
    return (
        <button className="flex items-center gap-1 text-base font-bold px-2">
            <WebcamIcon width={24} height={24}/>
            <span className="leading-4 text-center">WEB CAM</span>
        </button>
    );
};

export default WebCam;