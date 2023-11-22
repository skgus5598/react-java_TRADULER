import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./../style/traduler.css"

const ImageSlide = (props) => {
    return(
            <div id='imgHdiv'>
                <Carousel autoPlay stopOnHover infiniteLoop swipeable showArrows={false} showStatus={false} >
                    {
                        props.files.map( (file, idx) => (  
                            <div className='imgDiv' key={idx}>
                                <img
                                    style={{width: "700px", height: '550px'}}
                                    src={`http://localhost:8899/readImages/${file}`}  />
                            </div>
                            )
                        )
                    }
                </Carousel>
            </div>  
    )
}

export default ImageSlide;