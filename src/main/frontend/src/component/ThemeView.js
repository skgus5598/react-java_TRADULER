import './../style/main.css';
import './../style/font-awesome.min.css'
import './../style/traduler.css';
import Header from "./Header";
import { useNavigate, useLocation } from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

function ThemeView(){
    const location = useLocation();
    const data = { ...location.state}
    console.log("data " + JSON.stringify(data))
    console.log("files :: " + data.files )
    console.log("placeId : " + data.placeId);

    //이미지 불러오기
    const [imageList, setImageList] = useState([]);

    useEffect( () => {
        axios.get('http://localhost:8899/readImages' , {
            params : {
                themeList : data.placeId
            },
            headers : {"Content-Type" : "application/json; charset=UTF-8"},
            responseType: "blob"
        })
            .then((res) => {
                console.log("res?? " + JSON.stringify(res.data))
                const blob = new Blob([res.data]);
                console.log("blob????" + blob);
                console.log("blob????" + JSON.stringify(blob));

                console.log("resdata ::: " + JSON.stringify(res.data));
                setImageList(res.data);
            })
    }, [])



    return(
        <div>
                <Header/>
                <div id="main">
                    <br/><a href="#">뒤로가기 </a>

                        <form method="post" encType="multipart/form-data">
                            <div className="inner" style={{textAlign : "center"}}>
                                <h1><input type="hidden" name="placeName" value="placeName"/>{data.placeName}</h1>
                                <h5><input type="hidden" name="mainCategory" value="mainCategory"/>{data.contentMain}</h5>

                                <div>
                                    <img  src={`data:image/jpeg;base64,${imageList[0]}`}  />
                                </div>

{/*
                                <div>
                                     이미지 파일 리스트를 반복문을 이용하여 이미지 요소에 대한 JSX를 생성합니다.
                                    {imageList.map((image, index) => (
                                        <img key={index} src={`data:image/jpeg;base64,${image.data}`} alt={image.name} />
                                    ))}
                                </div>
*/}



                            </div>
                        </form>

                        <div className='flex'>
                            <div className="flexA" id="map" style={{width:"50%", height:"520px"}}></div>

                            <div className="flexB">
                                <div className="flexBa">
                                    <strong>주변 맛집을 추천해주세요</strong>
                                </div>
                                <div>
                                    <div id="reply"></div>
                                </div>
                            </div>
                        </div>
                        <div style={{display: "flex"}}>
                            <label style={{width: "50%"}}>주소 : {data.placeAddr}</label>
                            <div style={{width: "50%"}}>

                            </div>
                        </div>
                </div>
        </div>
    )
}
export default ThemeView;