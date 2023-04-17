import {useEffect, useState} from "react";
import axios from "axios";
import {useLocation} from "react-router-dom";
import './../style/main.css';
import './../style/font-awesome.min.css'
import './../style/traduler.css';
import Header from "./Header";
import { useNavigate } from "react-router-dom";



function ThemeList () {
    let navigate = useNavigate();

    return(

        <div>
            <Header/>

            <div id="wrapper">
                <div id="main">
                    <div className="inner">
                        <header>
                            <h1 style={{fontSize: "40px", color: "skyblue"}}><i>
                                <strong style={{color: "#5aacf1"}}> aaa </strong> 테마를 선택하셨군요.</i></h1>
                            <p>테마를 정했으니 이제 테마 속 다양한 여행지들을 확인해볼까요 ?<br/>
                                자신의 취향에 맞는 여행지를 선택하고 일정에 추가하여 여행을 떠나보세요 !
                            </p>
                        </header>
                        <a href="../index">뒤로가기 </a>


                            <button onClick={() => { navigate('/addPlace')} }>Add
                                Place(관리자용)
                            </button>


                        <section className="tiles">
                            {/*<c:forEach var="list" items="${list }">*/}
                                <article style={{width:'250px', height:'250px'}}>
										<span className="image">
											{/*<img src="${contextPath}/main/download?imageFile=${list.mainImageFile}"*/}
                                            <img src="" style={{width:'250px', height:'250px'}}/>
										</span>
                                    {/*<a href="${contextPath }/main/themeView?placeName=${list.placeName}">*/}
                                    <a href="#" onClick={ () =>{navigate('/themeView')}} >
                                        <h3>list.placename</h3>
                                        <div className="content">
                                            <p>list.contentOne</p>
                                        </div>
                                    </a>
                                      관심콘텐츠 <img src="" style={{ width:"20px",  height:"20px"}}/> 0
                                </article>
                            {/*</c:forEach>*/}
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ThemeList;