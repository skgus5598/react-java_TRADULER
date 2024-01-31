import axios from "axios";
import { useEffect, useState } from "react";
import  cafe  from '../assets/img/cafe_menu.png';
import  parking  from '../assets/img/parking_menu.png';
import  restaurant  from '../assets/img/res_menu.png';

import KakaoMap from "./KakaoMap";

function KakaoPlace(props){
    let [obj, setObj] = useState([]);
    
    let markerArr = [];
    let selectPlace = 'FD6';

    /* 
        **** kakaoAPI *****
        x = longitude
        y = latitude
        category_group_code = PK6(carpark), FD6(restaurant), CE7(cafe)
    */
    
    useEffect(() => {
        getPlace('FD6');
    },[])

    const getPlace = (code) => {
        selectPlace = code;
        markerArr = [];

        const apiKey = process.env.REACT_APP_KAKAO_KEY
   
        axios.get(`https://dapi.kakao.com/v2/local/search/category.json?category_group_code=${code}&x=${props.lng}&y=${props.lat}&radius=1000&size=5`, {
            headers : {"Authorization" : "KakaoAK "+ apiKey}
        }).then( (res) => {
            setObj(res.data.documents)
       })
    }

    const returnPlace = obj.map((e, i) => {
       // console.log("returnplace obj ;" + JSON.stringify(e))
        let markerData = {
            "place" : e.place_name,
            "lng" : e.x,
            "lat" : e.y
        }
        markerArr.push(markerData);        

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
                <img src={restaurant} onClick={() => { getPlace('FD6')}} />
                <img src={cafe} onClick={() => { getPlace('CE7')}} />
                <img src={parking} onClick={() => {  getPlace('PK6')}} />
            </div>
            <div className='mapSection' style={{ display: "flex", paddingTop:"5%" }}>
                <div> {returnPlace}</div>
                <div className='kakaoMapDiv'>
                    {
                        markerArr.length <= 0 
                        ? <>Loading ...</>
                        : <KakaoMap lat={props.lat} lng={props.lng} markers={markerArr} place={obj[0].category_group_code} />
                    }
                    
                    <label >address : {props.addr}</label>
                </div>
 
            </div>
                    
        </div>
    )
}


export default KakaoPlace;
