import './../style/main.css';
import './../style/font-awesome.min.css'
import './../style/traduler.css';
import Header from "./Header";
import Gmap from "./Gmap";
import ReviewList from './ReviewList';
import { useNavigate, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import ImageSlide from "./ImageSlide";

function ThemeView(){
    const navigate = useNavigate();
    const location = useLocation();
    const data = { ...location.state};

    console.log("data :" + data.contentMain)

    const deleteContent = () => {
        if(window.confirm("Are you sure you want to delete this Theme?")){
            axios.delete('http://localhost:8899/deleteContent/'+data.placeId)
                .then(res => {
                    console.log("res?" + JSON.stringify(res))
                    navigate('/themeList' , {state : data.themeName}) //테마명 가져감
                });
        }
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

        alert("Added to my Tradule List!")
    }


    return(
        <div>
            <Header/>
            <div id="wrapper">

                <br/><a onClick={ () => { navigate(-1); }}>뒤로가기 </a><br/>

                <button onClick={deleteContent}>DELETE  </button>
                <br/><br/>
                <div style={{textAlign : "center"}}>
                    <button className='addBtn' onClick={addMyList}>ADD TO MY LIST❤️ </button><br/><br/>
                    <h1><input type="hidden" name="placeName" value="placeName"/>{data.placeName}</h1>
                    <h5><input type="hidden" name="mainCategory" value="mainCategory"/>{data.contentIntro}</h5>

                    <div className='mainImgView' style={{display:"flex"}}>
                        <ImageSlide files={data.files} />
                        <div className='nextoImg'>asdf</div>
                    </div>

                    <div style={{display:"flex"}}>
                    <div style={{textAlign:'left', width:"50%", marginLeft:'5%', fontFamily:'"Open Sans", sans-serif', fontStyle:'italic',fontSize:'1em' ,fontWeight:'600'}}>
                    {
                        data.contentMain.split("<br>").map((line, i) => {
                            return (
                                <span key={i}>
                                    <input type="hidden" name="mainCategory" value="mainCategory"/>
                                    {line}
                                    <br/>
                                </span>
                            )
                        })
                    }
                    </div>
                    {/*Google Map, marker*/}
                    <div style={{textAlign : "center", width:"50%"}}>
                        <Gmap lat={data.latitude} lng={data.longitude} />
                        <label >address : {data.placeAddr}</label>
                    </div>
                    </div>
                </div>

                

            <ReviewList />

            </div>
        </div>
    )
}
export default ThemeView;
