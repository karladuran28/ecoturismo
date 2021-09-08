import React, {useState, useEffect} from 'react';
import { GoogleMap, useJsApiLoader, Marker, OverlayView } from '@react-google-maps/api';
import './mapa.css';

const Mapa = ({lugares}) => {

    const [map, setMap] = useState(null);
    const [center, setCenter] = useState({  lat: -1.256304064585681, 
                                            lng: -78.7239311936696}); /* lat - lng */

    useEffect(() => {
        const coord = lugares?.[2]?.["coordenadas"]?.split(",");
        const lat = parseFloat(coord?.[0]);
        const lng = parseFloat(coord?.[1]);
        setCenter({lat: lat, lng: lng}); 
    }, [lugares])

    const containerStyle = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
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
                    let lat = parseFloat(c?.[0]);
                    let lng = parseFloat(c?.[1]);
                    return <div key={`${index}`}>
                                <OverlayView
                                    key={`${index}_ov`}
                                    position={{ lat: lat, lng: lng}}
                                    mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                                    >
                                    <div style={{background: "#ffffffbe",
                                                padding: "0.3rem",
                                                display: "flex",
                                                alignItems: "center",
                                                borderRadius: "5px"
                                                }}>
                                        <p style={{margin: 0}}>
                                            {item["nombre"]}
                                        </p>
                                    </div>
                                </OverlayView>
                                <Marker 
                                    key={index} 
                                    position={{ lat: lat, lng: lng}}
                                />
                            </div>
                })}
            </GoogleMap>
        </div>
    ) : <></>
}

export default Mapa;
