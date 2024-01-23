import {useEffect, useState} from "react";


const ReviewList = () => {
    const [files, setFiles] = useState([]);
    const [user, setUser] = useState([]);
    const [control, setControl] = useState(true)

    useEffect(() => {
        const ifUser = localStorage.getItem("userCookie");
        if (ifUser) {
            setUser(JSON.parse(ifUser));
        }

        document.getElementsByClassName("writeReview")[0].style.display="none";

    }, [])

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

    const submitHandler = () => {
       
        console.log("validation check-----");
        console.log("files: \n" + files.length);
        console.log("userId : " + user.value)

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
                <div style={{display:"flex"}}>
                    <h2>Rating</h2>
                    <span>⭐️ ⭐️ ⭐️ ⭐️ </span>
                </div>
                <h2>How was your experience?</h2>
                <textarea placeholder="Tell us all about your experience!" />
                <h2>Add Photo</h2>
                <div> {imgPreview} </div>
                <input type="file" 
                           id="file"
                           accept="image/jpg,image/png,image/jpeg,image/gif"  
                           onChange={handleFileChange} 
                           multiple/>
                
                <div style={{textAlign:"center"}}>
                    <br/>
                    <button onClick={() => {submitHandler()}}>submit</button>
                </div>
                <hr/>
            </section>

            
            <section>
                <span><b>Abc1233</b> ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ &nbsp; |&nbsp; 2021/02/17</span><br/>
                <span><b>PostTitle</b></span><br/>
                <span>reviewreviewreviewreviewreviewreviewreviewreviewreview</span><br/>
                <div>img imgimg</div>
                <hr/>

                <span><b>Abc1233</b> ⭐️ ⭐️ ⭐️ ⭐️ ⭐️ &nbsp; |&nbsp; 2021/02/17</span><br/>
                <span><b>PostTitle</b></span><br/>
                <span>reviewreviewreviewreviewreviewreviewreviewreviewreview</span><br/>
                <div>img imgimg</div>
                <hr/>
            </section>

    

        </div>
        </>
    )
}

export default ReviewList;