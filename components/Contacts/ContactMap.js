import React from 'react';
import { GoogleMap, useJsApiLoader, InfoWindow } from '@react-google-maps/api';

import Spinning from '../routing/Spinning';
import Image from 'next/image';

const containerStyle = {
    width: '100%',
    height: '700px',
    position: 'relative',
    zIndex: 0,
};

const ContactMap = () => {
    const data = {
        center: {
            lat: 40.6372386,
            lng: -74.9089999,
        },
        zoom: 14,
    };

    const locationone = {
        center: {
            lat: 40.6372386,
            lng: -74.9089999,
        },
    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyAch_9Qk6XtqtcrV0eVFVwZ9slv6POKuss',
    });

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={data.center}
            zoom={data.zoom}
        >
            <InfoWindow position={locationone.center}>
                <div className='pin'>
                    <Image
                        src='/images/map-marker-plus-regular.svg'
                        alt='pin-one'
                        width={150}
                        height={80}
                    />
                </div>
            </InfoWindow>
        </GoogleMap>
    ) : (
        <Spinning />
    );
};

export default ContactMap;
