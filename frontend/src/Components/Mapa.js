import React, {useState, useEffect} from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import './mapa.css';

const Mapa = ({lugares}) => {

    console.log(lugares);

    const [map, setMap] = useState(null);
    const [center, setCenter] = useState({lat: -3.7, lng: -50.52}); /* lat - lng */

    useEffect(() => {
        const coord = lugares?.[2]?.["coordenadas"]?.split(",");
        const lat = parseFloat(coord?.[0]);
        const lng = parseFloat(coord?.[1]);
        setCenter({lat: lat, lng: lng}); 
    }, [lugares])

    const containerStyle = {
        width: '100%',
        height: '25rem',
        
    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyC_oiZtLx0cUd8EdVmcs_g8ZvJgCnb_Bx8"
    });

    const onLoad = (map) => {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map);
    }

    const onUnmount = (map) => {
        setMap(null);
    }

    return isLoaded ? (
        <div className="mapa_container">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={12}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                {lugares.map((item, index) => {
                    let c = item["coordenadas"]?.split(",");
                    console.log(c);
                    let lat = parseFloat(c?.[0]);
                    let lng = parseFloat(c?.[1]);
                    return <Marker key={index} position={{ lat: lat, lng: lng}}/>
                })}
                
                <></>
            </GoogleMap>
        </div>
    ) : <></>
}

export default Mapa;
