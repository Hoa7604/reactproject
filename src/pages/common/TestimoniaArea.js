import { Col, Container, Row } from "react-bootstrap";
import {TestimoniaData} from "./dataOfArea/TestimonialData" ;
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function TestimoniaArea(params) {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 3,
        autoplay: false,
        autoplaySpeed: 3000
      };

    return(
        <section className="testimonia-area sec-cmn">
            <Container>
                <Row className="title-gallery title-cmn">
                    <h1 className="h1-cmn">Testimonial from our Clients</h1>
                    <p className="p-cmn">Who are in extremely love with eco friendly system.</p>
                </Row>
                <Row className="row-testimonia">
                    
                    <Slider {...settings}>
                        {TestimoniaData.map((testimoniadt, index) => {
                            return(
                                <div key={index} className="wrap-cols">
                                <Col  lg={12} className="test-row">
                                
                                    <div className="test3">
                                        <div className="thumb">
                                            <img className="img-fluid" alt={testimoniadt.Iname} src={testimoniadt.imgTmn}></img>
                                        </div>
                                        <div className="desc">
                                            <p>{testimoniadt.dtl}</p>
                                            <h4 className="title-desc">{testimoniadt.Iname}</h4>
                                            <div className="start">
                                                {
                                                    
                                                }
                                                <span className="icon-rate">{testimoniadt.iconStar}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                </div>
                            )
                        })}
                    </Slider>
                    
                </Row>
            </Container>
        </section>
    )
};
