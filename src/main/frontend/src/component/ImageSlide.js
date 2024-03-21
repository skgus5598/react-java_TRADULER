import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./../style/traduler.css"

const ImageSlide = (props) => {
    return(
            <div id='imgHdiv'>
                <Carousel  stopOnHover infiniteLoop showArrows={false} showStatus={false} >
                    {
                        props.files.map( (file, idx) => (  
                            <div className='imgDiv' key={idx}>
                                {
                                    props.path == "themeView" //vs Review
                                    ? <img
                                        style={{width: "750px", height: '550px', borderRadius:"10px"}}
                                        src={`http://localhost:8899/readImages/themeView/${file}`}  />
                                    : <img
                                        style={{width: "350px", height: '350px', borderRadius:"10px"}}
                                        src={`http://localhost:8899/readImages/review/${file}`}  />
                                }
                                
                            </div>
                            )
                        )
                    }
                </Carousel>
            </div>  
    )
}

export default ImageSlide;
