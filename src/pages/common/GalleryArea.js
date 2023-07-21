import { Col, Container, Row } from "react-bootstrap";
import {Link} from "react-router-dom";
import {GalleryData} from "./dataOfArea/GalleryData.js"

export default function GalleryArea(params) {
    return(
        <section className="galleryArea sec-cmn">
            <Container>
                <Row className="title-gallery title-cmn">
                    <h1 className="h1-cmn">Our Recent Works may impress you</h1>
                    <p className="p-cmn">Who are in extremely love with eco friendly system.</p>
                </Row>
                <Row className="row-glr">
                    {GalleryData.map((gallerydata, index) => {
                        return(
                            <Col lg = {gallerydata.grid} key={index}>
                            <div className="content-gallary">
                                <div className="single-gallary">
                                    <Link to="/" className="content-bg">
                                        <img className="img-content" src={gallerydata.imgGlr} alt={gallerydata.altimg}/>
                                        <div className="overplay-gallary"></div>
                                    </Link>
    
    
                                    <div className="title-detail-gallary text-uppercase">
                                        <Link className="detail-title"><h3 className="mx-auto">{gallerydata.titlehove}</h3></Link>
                                        <Link className="bnt-more-detail">more details</Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        )
                    })}
                </Row>
            </Container>
           
        </section>
    )    
};
