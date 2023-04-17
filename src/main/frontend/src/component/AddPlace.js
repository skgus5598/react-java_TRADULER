import './../style/main.css';
import './../style/font-awesome.min.css'
import './../style/traduler.css';
import Header from "./Header";

function AddPlace(){

    return (
        <div>
            <div id="main">
                <h1>새로운 장소를 추가해주세요!</h1>
                <form method="post" encType="multipart/form-data">
                    <div className="pp">
                        <div className="selectA"><b>Category</b></div>
                        <div className="selectB">theme <input type="hidden" name="mainCategory" />
                        </div>
                    </div>

                    <input type="hidden" name="originImageFile"/>
                        <p><label><br/>1. 메인이미지 첨부</label>
                            <input id="mainImageFile" type="file" name="mainImageFile" /><br/>
                                <img id="preview0" style={{height:"400px"}}/>
                        </p>

                        <p><label><br/>2. 슬라이드 이미지 첨부(2장 필수)</label>
                            <div style={{display:"flex"}}>
                                <div id="addImage1">
                                    <input type="file" id="imageFile1" name="imageFile1" /><br/>
                                        <img id="preview1"/>
                                </div>
                                <div id="addImage2">
                                    <input type="file" id="imageFile2" name="imageFile2" /><br/>
                                        <img id="preview2"/>
                                </div>
                             </div>

                        </p>
                        <p>3. 장소 이름 <input type="text" name="placeName"/></p>
                        <p>4. 제목 밑에 나올 한줄 요약<textarea rows="5" cols="10" name="contentOne"/></p>
                        <p>5. 소개(내용)<textarea rows="5" cols="10" name="contentTwo"/></p>
                        <p>5. 소개(내용)<textarea rows="5" cols="10" name="contentTwo"/></p>
                        <p>6. 주소 : <input name="address"/></p>
                        <p>7. 위도 : <input name="latitude"/> 경도 : <input name="longitude"/></p>
                        <button>register</button>
                </form>
                <br/><a href="#">뒤로가기 </a>
            </div>

        </div>

    )

}
export default AddPlace;