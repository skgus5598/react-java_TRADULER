import './../style/main.css';
import './../style/font-awesome.min.css'
import './../style/traduler.css';
import Header from "./Header";
import {useState} from "react";

function AddPlace(){

    const [files, setFiles] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("eeeclicked")
        /*axios.post('http://localhost:8888/board/addContent', {
            user : state.userNo,
            boardContents : content,
            files : files
        }, {
            headers : {
                "Content-Type" : "multipart/form-data"
            }
        }).then( res => {
            console.log(res.data);
        })*/
    };

    const handleNextSlide = () => {
        setCurrentSlide((currentSlide + 1) % files.length);
    };

    const handlePrevSlide = () => {
        setCurrentSlide((currentSlide - 1 + files.length) % files.length);
    };

    const handleFileChange = (e) => {
        const newFiles = [...e.target.files];
        setFiles(newFiles);
        setCurrentSlide(0);
    };

    const filePreviewElements = files.map((file, index) => (
        <div
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            key={file.name}
        >
            {index === currentSlide && (
                <>
                    <img src={URL.createObjectURL(file)} alt={file.name} />
                    <p className="slide-caption">{file.name}</p>
                </>
            )}
        </div>
    ));

    return (
        <div>
            <Header/>
            <div id ="wrapper">
                <div id="main">
                    <div className="inner">
                    <h1>새로운 장소 추가(관리자)</h1>
                    <form method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
                        <div className="pp">
                            <div className="selectA"><b>Category</b></div>
                            <div className="selectB">theme <input type="hidden" name="mainCategory" />
                            </div>
                        </div>

                            <p><label><br/>1. 이미지 첨부</label>
                                <input type="file" id="file" onChange={handleFileChange} multiple/>
                                <div className="slideshow-container">
                                    {filePreviewElements}
                                    <button className="prev-button" onClick={handlePrevSlide}>
                                        &#10094;
                                    </button>
                                    <button className="next-button" onClick={handleNextSlide}>
                                        &#10095;
                                    </button>
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
            </div>
        </div>

    )

}
export default AddPlace;