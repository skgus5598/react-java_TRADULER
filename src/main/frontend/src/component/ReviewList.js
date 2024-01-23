

const ReviewList = () => {

    return(
        <>
        <div style={{marginLeft:"5%", marginRight:"5%"}}>
            <hr/>
            <h1>Review</h1>
            <button className="reviewFilterBtn">Rating▼</button>
            <button className="reviewFilterBtn">Recent▼</button>
            
            <section style={{paddingTop:"50px"}}>
                <h2>4.5 ⭐️ ⭐️ ⭐️ ⭐️ ⭐️   / 298 Reviews</h2> <br/>
            </section>
            <section style={{textAlign:"right"}}>
                <button>Write Review</button>
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