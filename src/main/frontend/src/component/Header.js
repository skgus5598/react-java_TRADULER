import './../style/main.css';
import './../style/font-awesome.min.css'
import './../style/traduler.css';
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";


function Header(){
    let navigate = useNavigate();
    let [user, setUser] = useState([]);

    useEffect( () => {
        const ifUser = localStorage.getItem("user");
        if(ifUser){
            setUser(JSON.parse(ifUser));
        }
    },[])

    return (
        <div>
            <div className="wrapp">
                <div className='logo'>
                    <a href="" onClick={ () => {navigate('/')}}>
                        <img src="images/traduler-logo-green.png" height="80px"/>
                    </a>
                </div>
                <div>
                    <header id="header">
                        <nav>
                            <ul>
                                {
                                    user == '' || user == null
                                        ? <li ><a href='' onClick={ () => {navigate('/login') }}>LOGIN</a></li>
                                        : <li ><a href='' onClick={ () => {navigate('/login') }}>LOGOUT</a></li>
                                }

                                <li ><a href="" onClick={ () => {navigate('/myPageMenu') }}>MY TRADULE</a></li>
                            </ul>
                        </nav>
                    </header>
                    <nav id="menu">
                        <h3>유저아이디 : abc</h3>
                        <h2>Menu</h2>
                        <ul>
                            <li><a href="#">HOME</a></li>
                            <li><a href="#">리뷰 게시판</a></li>
                            <li><a href="#">QnA 게시판</a></li>
                            <li><a href="#">MY PAGE</a></li>
                        </ul>
                    </nav>
                </div>
            </div>

        </div>
    )
}
export default Header;