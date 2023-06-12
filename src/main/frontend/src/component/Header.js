import './../style/main.css';
import './../style/font-awesome.min.css'
import './../style/traduler.css';
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";


function Header(){
    let navigate = useNavigate();
    let [user, setUser] = useState([]);

    useEffect( () => {
        const ifUser = localStorage.getItem("userCookie");
        if(ifUser){
            setUser(JSON.parse(ifUser));
        }
    },[]);

    const logoutBtn = () => {
        if(window.confirm("로그아웃 하시겠습니까?")){
            localStorage.removeItem("userCookie")
            return navigate("/")
        }
    }

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
                                        : <li >{user.value} 님 방가^^!<a href='' onClick={ () => { logoutBtn() }}>LOGOUT</a></li>
                                }

                                <li ><a href="" onClick={ () => {navigate('/myPageMenu') }}>MY TRADULE</a></li>
                            </ul>
                        </nav>
                    </header>
                </div>
            </div>

        </div>
    )
}
export default Header;