import {useEffect, useState} from "react";
import axios from "axios";
import {useLocation} from "react-router-dom";
import './../style/main.css';
import './../style/font-awesome.min.css'
import './../style/traduler.css';
import { useNavigate } from "react-router-dom";
import Header from "./Header";



function Main () {
    let navigate = useNavigate();
    let [data, setData] = useState([]);

    useEffect( () => {
        axios.get('http://localhost:8899/main', {
            headers : {"Content-Type" : "application/json"}
        })
            .then( (res) => {
                console.log("res.data ::" + JSON.stringify(res.data));
                setData(res.data);
            })
    }, [])

    return(
      <div>
          <Header />
          {/*
        <div className="travel_main_header" style={{background: 'url(../images/main_header.png)'}}>
            <h2 className="travel_main_title">여행의 설렘은 계획부터 시작되는 거니까.</h2>
            <h4 className="travel_main_title_sub">지금 트래줄러에서 설렘을 계획해 보세요.</h4>
        </div>
          */}
        <div id="wrapper">
            <div id="main">
                <div className="inner">
                    <header>
                        <div className="travel_main_intro">
                            <span>To kick off your trip planning,<br/> simply pick a theme that fits your style.<br/>
                            Let's get started!</span>
                        </div>
                    </header>
                    <section className="tiles">

                    {
                        data.map( (e , i) => {
                            return(
                                <ThemeList navigate={navigate} e={e} i={i+1}/>
                            )
                        })
                    }
                    </section>
                </div>
            </div>
        </div>
    </div>
    )
}

function ThemeList(props){

    return (
        <>
            <article className={'style' + props.i}>
                 <span className="image">
                     <img src={'../images/pic0'+props.i+'.jpg' }alt=""/>
                 </span>
                {/*<a href="${contextPath }/main/themeList?theme=힐링">*/}
                <a href='' onClick={ () => {props.navigate('/themelist', {state : props.e.themeName})} } >
                    <h2>{props.e.themeName}</h2>
                    <div className="content">
                        <p>{props.e.themeIntro}</p>
                    </div>
                </a>
            </article>

        </>
    )
}


export default Main;