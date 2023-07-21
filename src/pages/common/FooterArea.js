import { Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as FbIcons from 'react-icons/fa';
import * as TwIcons from 'react-icons/bs';
import * as InsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';

export default function FooterArea(params) {
    return(
        <section className=" footer-area sec-cmn">
            <Container>
                <Row>
                    <Col lg={5} sm={6}>
                        <div className="single-footer col-about">
                            <h1 className="title">About Us</h1>
                            <p className="detail-about">If you own an Iphone, you’ve probably already worked out how much fun it is to use it to watch movies-it has that.</p>
                            <p className="copyright">Copyright ©
                                2023 All rights reserved | This template is made with by 
                                <Link to="https://colorlib.com" target="_blank"> Colorlib </Link>
                                and distributed by 
                                <Link to="https://themewagon.com/" target="_blank"> ThemeWagon </Link>
                            </p>
                        </div>
                      
                    </Col>
                    <Col lg={5} sm={6}>
                        <div className="single-footer">
                            <h1 className="title">Newsletter</h1>
                            <p className="detail-news">Stay update with our latest</p>
                            <div className="contact-email">
                                <form className="form-inline">
                                    <input className="form-control" onFocus={(e)=>{e.target.placeholder=""}} onBlur={(e)=>{e.target.placeholder="Email Address"}} placeholder="Email Address"/>
                                    <button className="click-bnt bnt"><AiIcons.AiOutlineArrowRight/></button>
                                </form>
                            </div>
                        </div>
                    </Col>
                    <Col lg={2} sm={6}>
                        <div className="single-footer">
                            <h1 className="title">Follow Us</h1>
                            <p className="detail-flus">Let us be social</p>
                            <div className="social-media">
                                <ul className = "wrap-social-medial">
                                <li><Link onClick = {() => window.open('http://facebook.com')}><FbIcons.FaFacebookF/></Link></li>
                                <li><Link onClick = { () =>window.open('https://twitter.com/')}><TwIcons.BsTwitter/></Link></li>
                                <li><Link onClick = { () => window.open('https://www.instagram.com/')}><InsIcons.BsInstagram/></Link></li>
                                </ul>		
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};
