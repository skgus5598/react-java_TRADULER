import { useEffect, useState } from "react";
const { kakao } = window;

const KakaoMap = (props) => {
    console.log("props: " +props.lat + " / " +  props.lng  + " / " + JSON.stringify(props.markers))
    
    useEffect(()=>{
        const container = document.getElementById('map');
        const options = { 
            center: new kakao.maps.LatLng(props.lat, props.lng),
            level : 5
        };
        const map = new kakao.maps.Map(container, options);
        const markerPosition = options.center;
        let marker = new kakao.maps.Marker({
            position: markerPosition
        });
        marker.setMap(map);
    },[])
    
    
        return (
            <div>
                <div id="map" style={{width:"100%", height:"700px"}}></div> 
            </div>
        )
}

export default KakaoMap;