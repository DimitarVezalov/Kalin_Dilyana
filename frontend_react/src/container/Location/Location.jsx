import React, { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

import { AppWrap, MotionWrap } from '../../wrapper';


import './Location.scss'

const Location = () => {
    const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.REACT_APP_PUBLIC_GOOGLE_MAPS_API_KEY });

    if (!isLoaded) {
        return <div>Loading.....</div>
    }
    return (
        <>
            <h2 className='head-text'>Or Find Us At</h2>
            <Map className='app__location-container'></Map>
        </>
    );
}

function Map() {
    const center = useMemo(() => ({ lat: 42.655603693338385, lng: 23.31454268465771 }), []);

    return (
        <>
            <GoogleMap
                zoom={15}
                center={center}
                mapContainerClassName='app__location-map'
            >
                <Marker position={center} />
            </GoogleMap>
        </>
    )
}




export default AppWrap(
    MotionWrap(Location, 'app__location'),
    'location',
    'app__primarybg'
);