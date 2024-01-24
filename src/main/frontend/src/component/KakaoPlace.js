import axios from "axios";
import { useState } from "react";
import  chicken  from '../assets/img/chicken.png';
import KakaoMap from "./KakaoMap";

function KakaoPlace(props){
    let [obj, setObj] = useState([]);
    
    let [markers, setMarkers] = useState([]);

    let markerArr = [];

    /* 
        **** kakaoAPI *****
        x = longitude
        y = latitude
        category_group_code = PK6(carpark), FD6(restaurant), CE7(cafe)
    */
    const getPlace = (code) => {
        const apiKey = process.env.REACT_APP_KAKAO_KEY
   
        axios.get(`https://dapi.kakao.com/v2/local/search/category.json?category_group_code=${code}&x=${props.lng}&y=${props.lat}&radius=1000&size=5`, {
            headers : {"Authorization" : "KakaoAK "+ apiKey}
        }).then( (res) => {
             console.log("res.data ::" + JSON.stringify(res.data.documents));
             if(code === 'PK6'){
                setObj(res.data.documents)
             }else if(code === 'FD6'){
                setObj(res.data.documents)
             }else{
                setObj(res.data.documents);
             }
        })
    }

    const returnPlace = obj.map((e, i) => {
        console.log("returnplace obj ;" + JSON.stringify(e))
        let markerData = {
            "place" : e.place_name,
            "lat" : e.x,
            "lng" : e.y
        }
        console.log("markerData : " + JSON.stringify(markerData));
        markerArr.push(markerData);
        console.log("markerArr : " + JSON.stringify(markerArr));

        return(
           <div key={i} style={{textAlign:"left"}}>
              <span>place name : <a href={e.place_url} target="_blank">{e.place_name}</a></span><br/>
              <span>category : {e.category_name}</span><br/>
              <span>address name : {e.address_name} || <b>{e.distance}m </b></span><br/>
              <span>phone : {e.phone}</span><br/>
              <hr style={{margin:"0.5em"}}/>
            </div>
        )
 })

    return(
        <div>
            
            <div className="codeImg">
                <img src={chicken} onClick={() => {getPlace('FD6')}} />
                <img src={chicken} onClick={() => {getPlace('CE7')}} />
                <img src={chicken} onClick={() => {getPlace('PK6')}} />
            </div>
            <div className='mapSection' style={{ display: "flex", paddingTop:"5%" }}>
                <div> {returnPlace}</div>
                <div className='kakaoMapDiv'>
                    <KakaoMap lat={props.lat} lng={props.lng} markers={markerArr} />
                    <label >address : {props.addr}</label>
                </div>
 
            </div>
                    
        </div>
    )
}


export default KakaoPlace;
