
import { serviceDatas } from './ServiceData.js'
import { Col, Container, Row } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function ServiceArea(params) {
    return(
        <section className="service-area">
            <Container>
                <Row className="row-service-title">
                    <h1 className="h1-cmn">What we offer to our clients</h1>
                    <p>Who are in extremely love with eco friendly system..</p>
                </Row>
                <Row className="row-service-dt">
                    {serviceDatas.map((serviceData, index) => {
                        return(
                            <Col lg = {4} key={index} className={serviceData.CName}>
                                <div className={serviceData.DName}>
                                    <Link to="/"><h4>{serviceData.title}</h4></Link> 
                                    <p>{serviceData.detail}</p>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </section>
    )
};
