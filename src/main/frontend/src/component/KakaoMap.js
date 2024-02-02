import { useEffect, useState } from "react";
import restaurant  from '../assets/img/res_marker.png';
import parking  from '../assets/img/parking_marker.png';
import cafe  from '../assets/img/cafe_marker.png';

const { kakao } = window;

const KakaoMap = (props) => {
    
        
    useEffect(()=>{
        menuMarkers();
    },[props.markers]);

    const menuMarkers = () => {
       // console.log("select latlng :  " +  JSON.stringify(props.markers) );

        let menuMarkersOptions = {
            imageSrc : '',
            imageSize : new kakao.maps.Size(40, 40),
            imageOption : {offset: new kakao.maps.Point(27, 69)}
        }

        if(props.place === 'FD6'){ //restaurant
            menuMarkersOptions.imageSrc = restaurant;
        }else if(props.place ==='CE7'){ // cafe
            menuMarkersOptions.imageSrc = cafe
        }else{ //'PK6'  parking
            menuMarkersOptions.imageSrc = parking
        }

        //layout modal
        let infowindow = new kakao.maps.InfoWindow({zIndex:1});

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

        //Main Place Marker
        const main_marker = new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng(props.lat, props.lng)
        });
    }
   
    
        return (
            <div>
                <div id="map" style={{width:"100%", height:"700px"}}></div> 
            </div>
        )
}

export default KakaoMap;