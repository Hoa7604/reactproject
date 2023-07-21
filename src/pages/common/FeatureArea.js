import {FeatureData} from "./dataOfArea/FeatureData.js"
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons/lib";

export default function FeatureArea() {
    return(
        <IconContext.Provider value={{fontWeight: 700}}>
        <section className="featureArea pd-tb-120">
            <Container>
                <Row className="title-fea title-cmn">
                    <h1 className="h1-cmn color-white">Some Features that Made us Unique</h1>
                    <p>Who are in extremely love with eco friendly system.</p>
                </Row>  
                <Row className="row-fea">
                    {FeatureData.map((featuredata, index) => {
                        return(
                            <Col lg={featuredata.colbt} key={index} className={featuredata.Cname}>
                                <div className={featuredata.Dname}>
                                    <Link to="/" className="title-detail">
                                        <span className="st-icon">{featuredata.icon}</span>
                                        <h4>{featuredata.title}</h4>
                                    </Link>
                                    <p className="dt-fea">
                                        {featuredata.content}
                                    </p>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </section>
        </IconContext.Provider>
    )
};
