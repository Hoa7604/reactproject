import { Row, Container } from "react-bootstrap"
import { Link } from "react-router-dom";
import Slider from "react-slick";
import {BrandsData} from './dataOfArea/BrandsData';

export default function BrandsArea(params) {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 2000
      };
    return(
        <section className="brands-area pd-60">
            <Container>
                <Row className="wraps-area">
                    <Slider {...settings}>
                        {BrandsData.map((brand, index) => {
                            return(
                                <div className="single-brand" key={index}>
                                    <Link className="wrap-a"><img className="mx-auto" src={brand.imgsBrand} alt={brand.alt}/></Link>
                                </div>
                            )
                        }) }
                    </Slider>
                </Row>
            </Container>
        </section>
    )
};
