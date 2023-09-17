import React, { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

import { AppWrap, MotionWrap } from '../../wrapper';

import './Location.scss'

const Location = () => {
    const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.PUBLIC_GOOGLE_MAPS_API_KEY });

    if (!isLoaded) {
        return <div>Loading.....</div>
    }
    return (
        <>
            <h2 className='head-text'>Or Find Us At</h2>
            <Map></Map>
        </>
    );
}

function Map() {

    return (
        <>
            <GoogleMap zoom={10} center={{ lat: 42.655603693338385, lng: 23.31454268465771 }} mapContainerClassName='app__location-map'></GoogleMap>
        </>
    )
}




export default AppWrap(
    MotionWrap(Location, 'app__location'),
    'location',
    'app__primarybg'
);