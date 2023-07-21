import { Link } from "react-router-dom";
import {Container} from "react-bootstrap";

export default function CalltoArea(params) {
    return(
        <section className="callto-area sec-cmn">
            <Container>
                <div className="justify-content-center">
                    <div className="callto-action-wrap section-gap">
                        <div className="content">
                            <h1 className="h1-cmn color-white">Looking for a <br/> quality and affordable interior design? </h1>
                            <p>inappropriate behavior is often laughed off as “boys will be boys,” women face <br/>higher conduct standards especially in the workplace.</p>
                            <Link className="primary-bnt bnt-more-detail">Request quote now</Link>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    )
};
