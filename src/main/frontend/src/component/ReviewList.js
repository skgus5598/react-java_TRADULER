import {useEffect, useState} from "react";
import axios from "axios";

const ReviewList = (props) => { // props : placeId

    const[reviews, setReviews] = useState([]);

    const [files, setFiles] = useState([]);
    const [user, setUser] = useState([]);
    const [control, setControl] = useState(true);

    const [toggle, setToggle] = useState(false);

    //form
    const [content, setContent] = useState('');
    const [placeId, setPlaceId] = useState(props.placeId);

    useEffect(() => {
        const ifUser = localStorage.getItem("userCookie");
        if (ifUser) {
            setUser(JSON.parse(ifUser));
        }
        document.getElementsByClassName("writeReview")[0].style.display="none";
        //reviewList
        axios.get("http://localhost:8899/getReviews", {
            params: {
                themeList : placeId
            }
        }, {
            headers : {"Content-Type" : "application/json"}
        }).then( res => {
            setReviews(res.data);
        })
    }, [toggle])

    const handleFileChange = (e) => {
        const newFiles = [...e.target.files];
        setFiles(newFiles);
    }

    const imgPreview = files.map((img, i) => {
        return(
            <>
               <img key={i} src={URL.createObjectURL(img)} onClick={() => {deleteHandler(img)}} />
               &nbsp;
            </>
        )
    })

    const deleteHandler = (img) => {
        let currentIdx = files.indexOf(img);
        let newFiles = [...files];
        newFiles.splice(currentIdx, 1);
        setFiles(newFiles);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if(user.value == '' || user.value == null || user.value == undefined){
            alert(" Please Login first");
            return false;
        }else{
            axios.post('http://localhost:8899/addReview', {
                themeList : placeId,
                userId : user.value,
                content : content,
                files : files
            }, {
                headers : {
                    "Content-Type" : "multipart/form-data"
                }
            }).then( res => {
                alert("Submit Success!")
                setToggle(!toggle);
            }).catch( () => alert("failed"));
            
        }

    }

    const writeModal = () => {
        if(control){ // display block
            document.getElementsByClassName("writeReview")[0].style.display="block";
        }else{
            document.getElementsByClassName("writeReview")[0].style.display="none";
        }
    }

    return(
        <>
        <div style={{marginLeft:"5%", marginRight:"5%"}}>
            <hr/>
            <h1>REVIEW</h1>
            <button className="reviewFilterBtn">Rating▼</button>
            <button className="reviewFilterBtn">Recent▼</button>
            
            <section style={{paddingTop:"50px"}}>
                <h2 style={{fontSize:"xx-large"}}>4.5 ⭐️ ⭐️ ⭐️ ⭐️ ⭐️   / 298 Reviews</h2> <br/>
            </section>
            <section style={{textAlign:"right"}}>
                <button onClick={() => { setControl(!control); writeModal()}}>Write Review</button>
            </section>

            {/* Write Review */}
            <section className="writeReview">
                <form onSubmit={submitHandler}>
                <div style={{display:"flex"}}>
                    <h2>Rating</h2>
                    <span>⭐️ ⭐️ ⭐️ ⭐️ </span>
                </div>
                <h2>How was your experience?</h2>
                <textarea onChange={(e) => setContent(e.target.value)} placeholder="Tell us all about your experience!" />
                <h2>Add Photo</h2>
                <div> {imgPreview} </div>
                <input type="file" 
                           id="file"
                           accept="image/jpg,image/png,image/jpeg,image/gif"  
                           onChange={handleFileChange} 
                           multiple/>
                
                <div style={{textAlign:"center"}}>
                    <br/>
                    <button type="submit">submit</button>
                </div>
                </form>
                <hr/>
            </section>

            
            <section>
                {
                    reviews.map( (e, i) => {
                        return(
                            <div key={i}>
                                <span><b>{e.userId}</b> ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ &nbsp; |&nbsp; {e.regDate}</span><br/>
                                <span>{e.content}</span><br/>
                                <div>{e.files}</div>
                                <hr/>
                            </div>
                        )
                    })
                }
                
            </section>

    

        </div>
        </>
    )
}

export default ReviewList;