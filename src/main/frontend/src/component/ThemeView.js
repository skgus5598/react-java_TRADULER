import './../style/main.css';
import './../style/font-awesome.min.css'
import './../style/traduler.css';
import Header from "./Header";

function ThemeView(){
    return(
        <div>
                <Header/>
                <div id="main">
                    <form id="listForm">
                        <input type="hidden" name="place"/>
                        <input type="hidden" name="image" />
                        <input type="hidden" name="id" />
                    </form>


                    <form method="post">
                        <input type="hidden" name="placeName"/>
                        <input type="hidden" name="mainCategory"  />
                        <input type="hidden" name="mainImageFile" />
                        <input type="hidden" name="imageFile1"/>
                        <input type="hidden" name="imageFile2"/>
                    </form>
                    <br/><a href="#">뒤로가기 </a>

                        <form method="post" encType="multipart/form-data">
                            <div className="inner" style={{textAlign : "center"}}>
                                <h1><input type="hidden" name="placeName" value="placeName"/>placename</h1>
                                <h5><input type="hidden" name="mainCategory" value="mainCategory"/>contentOne</h5>
                                <span className="image main">
                                   <input type="hidden" name="originImageFile" value="mainImageFile"/>
                                   <div><img id="preview" style={{height:"500px"}}/></div>
                               </span>

                            </div>
                        </form>

                        <div className='flex'>
                            <div className="flexA" id="map" style={{width:"50%", height:"520px"}}></div>

                            <div className="flexB">
                                <div className="flexBa">
                                    <strong>주변 맛집을 추천해주세요</strong>
                                </div>
                                <div>
                                    <div id="reply"></div>
                                </div>
                            </div>
                        </div>
                        <div style={{display: "flex"}}>
                            <label style={{width: "50%"}}>주소 : address</label>
                            <div style={{width: "50%"}}>

                            </div>
                        </div>
                </div>
        </div>
    )
}
export default ThemeView;