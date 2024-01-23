import './../style/main.css';
import './../style/font-awesome.min.css'
import './../style/traduler.css';
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


function Header() {
    
    let navigate = useNavigate();
    let [user, setUser] = useState([]);

    let [toggle, setToggle] = useState(false);
    let [items, setItems] = useState([]);

    useEffect(() => {
        const ifUser = localStorage.getItem("userCookie");
        if (ifUser) {
            setUser(JSON.parse(ifUser));
        }
        //mylist
        const myLists = localStorage.getItem("watched");
        if(myLists){
            setItems(JSON.parse(myLists));
        }

    }, [toggle]);

    const logoutBtn = () => {
        if (window.confirm("로그아웃 하시겠습니까?")) {
            localStorage.removeItem("userCookie")
            return navigate("/")
        }
    }

    const toggleMenu = () => {

        document.body.classList.add('is-menu-visible');
        setToggle(true);
    }

    const closeToggle = () => {
        document.body.classList.remove('is-menu-visible');
        setToggle(false)
    }

    const removeMyList = (id) => {
        const newArr = items.filter((item) => item.placeId !== id );
        localStorage.setItem("watched", JSON.stringify(newArr));
        setItems(newArr);
    }

    return (
        <div>
            <div className="wrapp">
                <div className='logo'>
                    <a onClick={() => { navigate('/') }}>
                        <img src="images/traduler-logo-green.png" height="80px" />
                    </a>
                </div>
                <div>
                    <header id="header">
                        <nav>
                            <ul>
                                {/* {
                                    user == '' || user == null
                                        ? <li ><a onClick={() => { navigate('/login') }}>LOGIN</a></li>
                                        : <li >{user.value} 님 방가^^!<a href='' onClick={() => { logoutBtn() }}>LOGOUT</a></li>
                                }
                                <li ><a href="" onClick={ () => {navigate('/myPageMenu') }}>MY TRADULE</a></li> 
                                 */}
                                <li ><a onClick={() => {  toggleMenu() }}>Menu</a></li>

                            </ul>
                        </nav>
                    </header>
                    <nav id="menu">
                        <div className='inner'>
                        <h2>Menu</h2>
                        <br/>
                        <ul>
                            <li><a >Home</a></li>
                            {
                                user == '' || user == null
                                ? <li><a onClick={() => { navigate('/login') }}>Login / Register</a></li>
                                : <li><a onClick={() => { logoutBtn() }} >Logout</a></li>
                            }
                            <li><a >My Page</a></li>
                            <li><a>Review</a></li>
                            <li><a >QnA</a></li>
                            {/* <li><h2>로그인을 한 후 나만의 리스트를 만들어보세요!</h2> </li> */}
                            <li>
                                <br/><h2>My Tradule List🏖</h2>
                                {
                                    items.length > 0 
                                    ? items.map((item, i) => {
                                        return(
                                        <div id="replyList" key={i} onClick={()=>{ removeMyList(item.placeId)}}>
                                            <span >{item.placeName} &nbsp;💔</span><br/>
                                            <img src={`http://localhost:8899/readImages/${item.image}`} /><br/>
                                        </div>
                                        )
                                    })
                                    : <div>None</div>
                                }    
                            </li>
                        </ul>
                        </div>
                        <a className='close' onClick={() => { closeToggle() }}> Close  </a>
                    </nav>



                </div>
            </div>

        </div>
    )
}
export default Header;