import './../style/main.css';
import './../style/font-awesome.min.css'
import './../style/traduler.css';


function Header(){
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
                                <li onClick={()=>{}}><a href="#">Menu</a></li>
                            </ul>
                        </nav>
                    </header>
                    <nav id="menu">
                        <h3>유저아이디 : abc</h3>

                        <h2>Menu</h2>
                        <ul>
                            <li><a href="${contextPath }/index">HOME</a></li>
                            {  /*         <c:if test="${adminId != null }">
                                <li><a href="${contextPath }/member/memberInfo">회원 정보</a></li>
                            </c:if>
                                 <c:choose>
                                <c:when test="${userId == null && adminId == null }">
                                    <li><a
                                        href="javascript:loginpopup('${contextPath }/member/loginForm','loginpopup');">로그인</a>
                                    </li>
                                </c:when>
                                <c:otherwise>
                                    <li><a href="${contextPath }/member/logout">로그아웃</a></li>
                                </c:otherwise>
                            </c:choose>

                           */ }
                            <li><a href="#">리뷰 게시판</a></li>
                            <li><a href="#">QnA 게시판</a></li>
                            <li><a href="#">MY PAGE</a></li>

                      {  /*     <c:choose>
                                <c:when test="${userId == null && adminId == null }">
                                    <li><br>
                                        <h2>로그인을 한 후 나만의 리스트를 만들어보세요!</h2>
                                    </li>
                                </c:when>
                                <c:otherwise>
                                    <li><br>
                                        <h2>[나의 여행 리스트 후보]</h2>
                                        <div id="replyList"></div>
                                    </li>
                                </c:otherwise>
                            </c:choose>
                         */}
                        </ul>
                    </nav>

                </div>
            </div>

        </div>
    )
}
export default Header;