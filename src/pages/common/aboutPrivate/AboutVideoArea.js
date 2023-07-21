import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import playBnt from '../../../img/play-btn.png';
import '../../../css/About.css';

export default function AboutVideoArea(params) {
    return(
        <section className="about-video-area pd-tb-120">
            <Container>
                <Row className="row-content-about-video">
                    <Col lg={6} md={6} className="about-video-left">
                        <h6 className="text-uppercase">Brand new app to blow your mind</h6>
                        <h1>We’ve made a life <br/> that will change you</h1>
                        <p><span>We are here to listen from you deliver exellence</span></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
                        <Link to="/" className="btn-about-video primary-bnt">Get Started Now</Link>
                    </Col>
                    <Col lg={6} md={6} className="about-video-right">
                        <div className="overplay">
                            <Link className="play-btn" to="https://www.youtube.com/watch?v=ARA0AxrnHdM">
                                <img className="img-fluid mx-auto" src={playBnt} alt="play-img"/>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};
