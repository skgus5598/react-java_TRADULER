import {useEffect, useState} from "react";
import axios from "axios";
import {useLocation} from "react-router-dom";
import './../style/main.css';
import './../style/font-awesome.min.css'
import './../style/traduler.css';
import { useNavigate } from "react-router-dom";



function Main () {
    let navigate = useNavigate();


    return(
      <div>
        <div className="travel_main_header" style={{background: 'url(../images/main_header.png)'}}>
            <h2 className="travel_main_title">여행의 설렘은 계획부터 시작되는 거니까.</h2>
            <h4 className="travel_main_title_sub">지금 트래줄러에서 설렘을 계획해 보세요.</h4>
        </div>
        <div id="wrapper">
            <div id="main">
                <div className="inner">
                    <header>
                        <div className="travel_main_intro">
                            <h2>여행 계획의 시작은 ‘테마 정하기’예요.<br/>
                                자신의 취향에 맞는 테마부터 한번 골라볼까요 ?</h2>
                        </div>
                    </header>
                    <section className="tiles">
                        <article className="style1">
                                        <span className="image">
                                            <img src='../images/pic01.jpg' alt=""/>
                                        </span>
                           {/*<a href="${contextPath }/main/themeList?theme=힐링">*/}
                            <a href='#' onClick={ () => {navigate('/themelist')} } >
                                <h2>힐링</h2>
                                <div className="content">
                                    <p>몸도 마음도 지친 당신을 위해 준비했어요.</p>
                                </div>

                            </a>

                        </article>
                        <article className="style2">
                                        <span className="image">
                                            <img src='../images/pic02.jpg' alt=""/>
                                        </span>

                            <a href="${contextPath }/main/themeList?theme=식도락">

                                <h2>식도락</h2>
                                <div className="content">
                                    <p>맛있는 음식으로 가볍게 기분전환하고 싶은 당신을 위해 준비했어요.</p>
                                </div>

                            </a>

                        </article>
                        <article className="style3">
                                        <span className="image">
                                            <img src='../images/pic03.jpg' alt=""/>
                                        </span>

                            <a href="${contextPath }/main/themeList?theme=관광지">

                                <h2>관광지</h2>
                                <div className="content">
                                    <p>제주도의 유명한 관광지를 여행하고싶은 당신을 위해 준비했어요.</p>
                                </div>

                            </a>

                        </article>

                        <article className="style4">
                                        <span className="image">
                                            <img src='../images/pic04.jpg' alt=""/>
                                        </span>
                            <a href='#'>
                                <h2>액티비티</h2>
                                <div className="content">
                                    <p>온몸으로 짜릿함을 느끼고 싶은 당신을 위해 준비했어요.</p>
                                </div>
                           </a>


                        </article>
                        <article className="style5">
                                        <span className="image">
                                            <img src='../images/pic05.jpg' alt=""/>
                                        </span>

                            <a href="${contextPath }/main/themeList?theme=글램핑">

                                <h2>글램핑</h2>
                                <div className="content">
                                    <p>자작한 불소리와 함께 조용함을 즐기고 싶은 당신을 위해 준비했어요.</p>
                                </div>
                            </a>
                        </article>
                        <article className="style6">
                                        <span className="image">
                                            <img src='../images/pic06.jpg' alt=""/>
                                        </span>

                            <a href="${contextPath }/main/themeList?theme=드라이브">

                                <h2>드라이브</h2>
                                <div className="content">
                                    <p>멋진 풍경과 함께 시원하게 달리고 싶은 당신을 위해 준비했어요.</p>
                                </div>
                            </a>
                        </article>
                    </section>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Main;