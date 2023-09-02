import React, {useMemo} from 'react'
import {GoogleMap, MarkerF, useJsApiLoader} from '@react-google-maps/api';

const containerStyle = {
    // width: '500px',
    height: '400px',
    marginLeft: '10%',
    marginRight: '10%'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

function Gmap(props) {
    console.log("props : " + props.lng +"/" + props.lat)

    const apiKey = process.env.REACT_APP_GOOGLE_KEY;

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: apiKey
    })

    const [map, setMap] = React.useState(null)
    /*
        const onLoad = React.useCallback(function callback(map) {
            // This is just an example of getting and using the map instance!!! don't just blindly copy!
            const bounds = new window.google.maps.LatLngBounds(center);
            map.fitBounds(bounds);

            setMap(map)
        }, [])
    */
    const markLocation = useMemo( () => ({lat : Number(props.lat) , lng: Number(props.lng)}),[])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={markLocation}
            zoom={15}
            //     onLoad={onLoad}
            onUnmount={onUnmount}
            // remove basic UI design
            options={{disableDefaultUI : true}}
        >
            <MarkerF
                // REACT 18버전 이후는 MarkerF 로 사용해야 함
                position={markLocation}
                /* 안먹히는 이유~?
                 icon={{
                     url: "marker.jpeg",
                     scaledSize : new window.google.maps.Size(32, 32)
                 }}
                 */
            />
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
        </GoogleMap>
    ) : <></>
}

export default React.memo(Gmap)
