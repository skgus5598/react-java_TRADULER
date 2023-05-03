import './../style/main.css';
import './../style/font-awesome.min.css'
import './../style/traduler.css';
import Header from "./Header";
import {useState} from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

function AddPlace(){
    const { state } = useLocation(); //테마명 가져오기

    const [files, setFiles] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [placeName, setPlaceName] = useState('');
    const [contentIntro, setContentIntro] = useState('');
    const [contentMain, setContentMain] = useState('');
    const [placeAddr, setPlaceAddr] = useState('');
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    let navigate = useNavigate();
    let [resData , setResData] = useState({});


    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8899/addPlace', {
            theme : state,
            placeName : placeName,
            contentIntro : contentIntro,
            contentMain : contentMain,
            placeAddr : placeAddr,
            latitude : latitude,
            longitude : longitude,
            files : files
        }, {
            headers : {
                "Content-Type" : "multipart/form-data"
            }
        }).then( res => {
            let copy = {...res.data};
            console.log("copy :: " + JSON.stringify(copy))
            setResData([copy]); // 안에 배열로
            console.log("resdata " +  JSON.stringify(resData)) // 이게 자꾸 안담기네?
  //          navigate('/themeView', {state : resData })
             navigate('/themeList' , {state : state}) //테마명 가져감

        })
            .catch( () =>{
                alert("failed")
            })
    };

    const handleNextSlide = () => {
        setCurrentSlide((currentSlide + 1) % files.length);
    };

    const handlePrevSlide = () => {
        setCurrentSlide((currentSlide - 1 + files.length) % files.length);
    };

    const handleFileChange = (e) => {
        const newFiles = [...e.target.files];
        setFiles(newFiles);
        setCurrentSlide(0);
    };

    const filePreviewElements = files.map((file, index) => (
        <div
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            key={file.name}
        >
            {index === currentSlide && (
                <>
                    <img src={URL.createObjectURL(file)} alt={file.name} />
                    <p className="slide-caption">{file.name}</p>
                </>
            )}
        </div>
    ));

    return (
        <div>
            <Header/>
            <div id ="wrapper">
                <div id="main">
                    <div className="inner">
                    <h1>새로운 장소 추가(관리자)</h1>
                        <div className="pp">
                            <div className="selectA"><b>Category</b></div>
                            <div className="selectB">  {state}
                            </div>
                        </div>

                            <p><label><br/>1. 이미지 첨부</label>
                                <input type="file" id="file"  onChange={handleFileChange} multiple/>
                                <div className="slideshow-container">
                                    {filePreviewElements}
                                    <button className="prev-button" onClick={handlePrevSlide}>
                                        &#10094;
                                    </button>
                                    <button className="next-button" onClick={handleNextSlide}>
                                        &#10095;
                                    </button>
                                </div>
                            </p>

                            <p>3. 장소 이름 <input type="text"  onChange={(e)=>{setPlaceName(e.target.value)}}/></p>
                            <p>4. 제목 밑에 나올 한줄 요약<textarea rows="5" cols="10" onChange={(e)=>{setContentIntro(e.target.value)}} /></p>
                            <p>5. 소개(내용)<textarea rows="5" cols="10" onChange={(e)=>{setContentMain(e.target.value)}}/></p>
                            <p>6. 주소 : <input type="text" onChange={(e)=>{setPlaceAddr(e.target.value)}}/></p>
                            <p>7. 위도 : <input type="text" onChange={(e)=>{setLatitude(e.target.value)}} /> 경도 : <input type="text" onChange={(e)=>{setLongitude(e.target.value)}}/></p>
                            <button onSubmit={handleSubmit}>register</button>
                    <br/><a href="#">뒤로가기 </a>
                </div>
                </div>
            </div>
        </div>

    )

}
export default AddPlace;