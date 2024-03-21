import {useEffect, useState} from "react";
import axios from "axios";
import './../style/main.css';
import './../style/font-awesome.min.css'
import './../style/traduler.css';
import Header from "./Header";
import { useNavigate, useLocation } from "react-router-dom";



function ThemeList () {
    let navigate = useNavigate();
    let { state } = useLocation();
    console.log("state1 " + state);

    let[ data, setData ] = useState([]);

    useEffect( () => {
        axios.get('http://localhost:8899/themeList', {
                params : {
                    theme : state
                }
            },
            {
                headers : {"Content-Type" : "application/json"}
            })
                .then( (res) => {
                    setData(res.data);
                })
    }, [])

    return(

        <div>
            <Header/>

            <div id="wrapper">
                <div id="main">
                    <div className="inner">
                        <header>
                            <h1 style={{fontSize: "40px", color: "skyblue"}}><i>
                                <strong style={{color: "#5aacf1"}}> ' {state} ' </strong> 테마를 선택하셨군요.</i></h1>
                            <p>테마를 정했으니 이제 테마 속 다양한 여행지들을 확인해볼까요 ?<br/>
                                자신의 취향에 맞는 여행지를 선택하고 일정에 추가하여 여행을 떠나보세요 !
                            </p>
                        </header>
                        <a onClick={ () => {navigate(-1);}}>뒤로가기 </a>


                            <button onClick={() => { navigate('/addPlace', {state : state})} }>Add
                                Place(관리자용)
                            </button>


                        <section className="tiles">
                            {
                                data.map ( ( e , i) => {
                                    return (

                                    <article style={{width:'250px', height:'250px'}}>
										<span className="image">
											 <img style={{ width:"250px",  height:"250px"}}  src={`http://localhost:8899/readImages/${e.files[0]}`}  />
										</span>
                                        {/*<a href="${contextPath }/main/themeView?placeName=${list.placeName}">*/}
                                        <a href="" onClick={ () =>{navigate('/themeView' , {state : data[i] })}} >
                                            <h3>{e.placeName}</h3>
                                            <div className="content">
                                                <p>{e.contentIntro}</p>
                                            </div>
                                        </a>
                                        관심콘텐츠 <img src="" style={{ width:"20px",  height:"20px"}}/> 0
                                    </article>

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
export default ThemeList;