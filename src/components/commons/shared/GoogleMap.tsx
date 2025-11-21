'use client'
import React from 'react';
import {APIProvider, Map, Marker} from "@vis.gl/react-google-maps";

const apikey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || "";

const GoogleMap = () => {

    return (
        <APIProvider apiKey={apikey}>
            <Map
                style={{width: '100%', height: 'auto'}}
                defaultCenter={{
                    lat: 20.827114863410653,
                    lng: -86.89710833173757
                }}
                defaultZoom={15}
            >
                <Marker position={{
                    lat: 20.827114863410653,
                    lng: -86.89710833173757
                }}/>
            </Map>
        </APIProvider>
    );
};

export default GoogleMap;