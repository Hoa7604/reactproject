import { Col, Container, Row } from "react-bootstrap";
import * as AiHome from 'react-icons/ai';
import * as AiPhone from 'react-icons/ai';
import * as AiMail from 'react-icons/ai';
import '../../../css/ContactArea.css';

export default function ContactArea(params) {

    return(
        <section className="contact-area pd-tb-120">
            <Container>
                <Row className="row-contact-area">
                    <div className="map-wrap">

                    </div>
                    <div className="wrap-detail-info">
                        <Col lg={4} className="address-contact">
                            <div className="single-contact-address">
                                <div className="icon-style"><AiHome.AiOutlineHome/></div>
                                <div className="detail-contact">
                                    <h5>Binghamton, New York</h5>
                                    <p>4343 Hinkle Deegan Lake Road</p>
                                </div>
                            </div>
                            <div className="single-contact-address">
                                <div className="icon-style"><AiPhone.AiOutlinePhone/></div>
                                <div className="detail-contact">
                                    <h5>00 (958) 9865 562</h5>
                                    <p>Mon to Fri 9am to 6 pm</p>
                                </div>
                            </div>
                            <div className="single-contact-address">
                                <div className="icon-style"><AiMail.AiOutlineMail/></div>
                                <div className="detail-contact">
                                    <h5>support@colorlib.com</h5>
                                    <p>Send us your query anytime!</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={8} className="form-fill-contact">
                            <form className="form-area">
                                <div className="row-detail-form">
                                    <Col lg={6} sm={6} className="form-input cmo-form">
                                        <input className="common-input form-control" onFocus={(e)=>{e.target.placeholder=''}} onBlur={(e)=>{e.target.placeholder="Enter your name"}} type="text" name="name" placeholder="Enter your name" />
                                        <input className="common-input form-control" onFocus={(e)=>{e.target.placeholder=''}} onBlur={(e)=>{e.target.placeholder="Enter your mail address"}} type="text" name="mail" placeholder="Enter your mail address"/>
                                        <input className="common-input form-control" onFocus={(e)=>{e.target.placeholder=''}} onBlur={(e)=>{e.target.placeholder="Enter your subject"}} type="text" name="subject" placeholder="Enter your subject"/>
                                    </Col>
                                    <Col lg={6} sm={6} className="form-textarea cmo-form">
                                            <textarea className="common-textarea form-control" onFocus={(e)=>{e.target.placeholder=''}} onBlur={(e)=>{e.target.placeholder="message"}} type="textarea" name="message" placeholder="message"></textarea>
                                    </Col>
                                    <Col lg={12} sm={12}className="form-btn">
                                        <button className="btn-submit-form-ct primary-bnt" >Send Message</button>
                                    </Col>
                                </div>
                            </form>
                        </Col>
                    </div>
                </Row>
            </Container>
        </section>
    )
};
