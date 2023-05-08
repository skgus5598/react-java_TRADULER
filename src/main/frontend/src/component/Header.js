import './../style/main.css';
import './../style/font-awesome.min.css'
import './../style/traduler.css';
import {useEffect} from "react";


function Header(){

    const menuClicked = () => {
        let menu = document.getElementById("menu")

        menu.style.display = 'block';




    }

    return (
        <div>
            <div className="wrapp">
                <div>
                    <a href="#">
                        <img src="images/traduler-logo-green.png" height="80px"/></a></div>
                <div>
                    <header id="header">
                        <nav>
                            <ul>
                                <li onClick={menuClicked}><a>LOGIN</a></li>
                                <li><a href="#">MY TRADULE</a></li>
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