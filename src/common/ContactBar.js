import * as React from 'react';
// import { Envelope, Telephone, GeoAlt, } from 'bootstrap-icons';
import { Container, Row, Col } from 'react-bootstrap';

function ContactBar() {
    return (
        <Container fluid={true} className="p-0">
            <Container>
                <Row className="py-1">
                    <Col xs={12} sm={6} className="d-flex align-items-center text-white">
                        <small className="fw-semibold">Contact for deals</small>
                    </Col>
                    <Col xs={12} sm={6} className="d-flex align-items-center justify-content-end text-white">
                        <i className="bi bi-telephone-fill" style={{fontSize: '14px'}}></i>&nbsp;<small className="fw-semibold me-3">+91-9898989898</small>
                        <i className="bi bi-envelope-fill" style={{fontSize: '14px'}}></i>&nbsp;<small className="fw-semibold me-3">xyz@example.com</small>
                        <i className="bi bi-geo-alt-fill" style={{fontSize: '14px'}}></i>&nbsp;<small className="fw-semibold">Account</small>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default ContactBar;