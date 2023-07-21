
import {TestimoniaData} from './dataOfArea/TestimonialData';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function CarouselBT() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000
      };
  return (
    <div>
        <h2> Single Item</h2>
      <Slider {...settings}>
      {
            TestimoniaData.map((testimoniadata, index) => {
                return(
                    <div  className="box">
                        <img key={index} className="slick-img" src={testimoniadata.imgTmn1} alt={testimoniadata.dlt}></img>
                  </div>
                )
            })
        }
      </Slider>
  </div>
  );
}

export default CarouselBT;