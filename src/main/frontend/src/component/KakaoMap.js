import { useEffect, useState } from "react";
import restaurant  from '../assets/img/restaurant.png';

const { kakao } = window;

const KakaoMap = (props) => {
    console.log("props: " +props.lat + " / " +  props.lng  + " / " + JSON.stringify(props.markers))
    
    let [menu, setMenu] = useState(props.markers)
    
    useEffect(()=>{
        mainMarker();
        menuMarkers();
    },[menu]);

    const mainMarker = () => {
        const container = document.getElementById('map');
        const options = { 
            center: new kakao.maps.LatLng(props.lat, props.lng),
            level : 5
        };
        const map = new kakao.maps.Map(container, options);
        const markerPosition = options.center;
        let marker = new kakao.maps.Marker({
            map : map,
            position: markerPosition
        });
        
        //marker.setMap(map);
    }

    const menuMarkers = () => {
        console.log("menumarkers : " + JSON.stringify(props.markers));
        let infowindow = new kakao.maps.InfoWindow({zIndex:1});

        let menuMarkersOptions = {
            imageSrc : restaurant,
            imageSize : new kakao.maps.Size(40, 40),
            imageOption : {offset: new kakao.maps.Point(27, 69)}
        }
        let markerImage = new kakao.maps.MarkerImage(
            menuMarkersOptions.imageSrc,
            menuMarkersOptions.imageSize,
            menuMarkersOptions.imageOption
        )
        
        const container = document.getElementById('map');
        const options = { 
            center: new kakao.maps.LatLng(props.lat, props.lng),
            level : 5
        };
        const map = new kakao.maps.Map(container, options);

        props.markers.forEach((e) => {
            const marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(e.lat, e.lng),
                title : e.place,
                image : markerImage
            });

            kakao.maps.event.addListener(marker, 'click', function() {
                infowindow.setContent('<div style="padding:5px;font-size:12px;">' + e.place + '</div>');
                infowindow.open(map, marker);
            });
        });
    }
   
    
        return (
            <div>
                <div id="map" style={{width:"100%", height:"700px"}}></div> 
            </div>
        )
}

export default KakaoMap;