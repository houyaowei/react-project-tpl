import React from "react";
import {Grid,Row,Col,Image} from "react-bootstrap";

class Images extends React.Component {
    render(){
        return (
            <Grid>
                <Row>
                    <Col xs={4} md={3}>
                        <Image src="/images/thumbnail.png" rounded />
                    </Col>
                    <Col xs={4} md={3}>
                        <Image src="/images/thumbnail.png" circle />
                    </Col>
                    <Col xs={4} md={3}>
                        <Image src="/images/thumbnail.png" thumbnail />
                    </Col>
                </Row>
            </Grid>
        );
    }
};
export default Images;