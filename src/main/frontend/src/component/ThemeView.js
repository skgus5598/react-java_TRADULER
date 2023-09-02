import './../style/main.css';
import './../style/font-awesome.min.css'
import './../style/traduler.css';
import Header from "./Header";
import { useNavigate, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

function ThemeView(){
    const navigate = useNavigate();
    const location = useLocation();
    const data = { ...location.state}

    //이미지 불러오기
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNextSlide = () => {
        console.log("currentslide :: " + currentSlide)
        setCurrentSlide((currentSlide + 1) % data.files.length);
    };

    const handlePrevSlide = () => {
        console.log("currentslide :: " + currentSlide)
        setCurrentSlide((currentSlide - 1 + data.files.length) % data.files.length);
    };

    const filePreviewElements = data.files.map((file, index) => (
        <div
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            key={index}
        >
            {index === currentSlide && (
                <>
                    <img  src={`http://localhost:8899/readImages/${file}`}  />
                </>
            )}
        </div>
    ));

    const deleteContent = () => {
        axios.delete('http://localhost:8899/deleteContent/'+data.placeId)
            .then(res => {
                console.log("res?" + JSON.stringify(res))
                navigate('/themeList' , {state : data.themeName}) //테마명 가져감
            });
    }

    const addMyList = () => {
        const placeName = data.placeName;
        const placeId = data.placeId;
        const image = data.files[0];
        
        const newItem = {
            placeName,
            placeId,
            image
        };


        let myList =  localStorage.getItem('watched');
        myList = JSON.parse(myList);

        myList.push(newItem)
        console.log("newItem  :: " + newItem)
        myList = new Set(myList);
        myList = Array.from(myList);
        localStorage.setItem('watched', JSON.stringify(myList))

        alert("리스트에 추가!")
    }


    return(
        <div>
                <Header/>
                <div id="main">
                    <br/><a onClick={ () => { navigate(-1); }}>뒤로가기 </a>

                    <button onClick={deleteContent}>게시물삭제  </button>&nbsp;&nbsp;&nbsp;
                    <button onClick={addMyList}>ADD TO MY LIST </button>

                            <div className="inner" style={{textAlign : "center"}}>
                                <h1><input type="hidden" name="placeName" value="placeName"/>{data.placeName}</h1>
                                <h5><input type="hidden" name="mainCategory" value="mainCategory"/>{data.contentIntro}</h5>

                                <div>
                                    {filePreviewElements}
                                    <button className="prev-button" onClick={handlePrevSlide}>
                                        &#10094;
                                    </button>
                                    <button className="next-button" onClick={handleNextSlide}>
                                        &#10095;
                                    </button>
                                </div>
                                <br/><br/>
                                {
                                    data.contentMain.split("<br>").map((line) => {
                                        return (
                                            <h3>
                                                <input type="hidden" name="mainCategory" value="mainCategory"/>
                                                {line}
                                                <br/>
                                            </h3>
                                        )
                                    })
                                }
                                {
//                                    <h3><input type="hidden" name="mainCategory" value="mainCategory"/>{data.contentMain}</h3>
                                }

                                {/*
                                <div>
                                     이미지 파일 리스트를 반복문을 이용하여 이미지 요소에 대한 JSX를 생성합니다.
                                    {imageList.map((image, index) => (
                                        <img key={index} src={`data:image/jpeg;base64,${image.data}`} alt={image.name} />
                                    ))}
                                </div>
*/}



                            </div>

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