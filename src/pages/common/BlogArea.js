import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import {BlogData} from "./dataOfArea/BlogData";
import {Link} from "react-router-dom";

export default function BlogArea(params) {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000
      };
    return(
        <section className="blog-area sec-cmn">
            <Container>
                <Row className="title-blog title-cmn">
                    <h1 className="h1-cmn">Ongoing Exhibitions from the scratch</h1>
                    <p className="p-cmn">Who are in extremely love with eco friendly system.</p>
                </Row>
                <Row className="wraps-blog">
                    <Slider {...settings}>
                        {BlogData.map((blog, index) => {
                            return(
                                <div key={index} className="wrap-cols">
                                    <Col className="cols-modify">
                                        <div className="last-col">
                                            <div className="blog-img">
                                                <img src={blog.imgs} alt={blog.title}/>
                                            </div>
                                            <div className="detail">
                                                <div className="tags">
                                                    <ul>
                                                        {blog.tags.map((tag, index) => 
                                                            <li key={index}><Link to="/">{tag}</Link></li>
                                                            )} 
                                                    </ul>
                                                </div>
                                                <Link className="detail-title" to="#"><h4>{blog.title}</h4></Link>    
                                                <p className="title-p-blog">{blog.script}</p>
                                                <h6 className="date-h6-blog">{blog.date}</h6>
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
