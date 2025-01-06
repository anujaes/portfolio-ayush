import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

function PageNotFound() {
    const navigate = useNavigate();

    const handleBtn = () => {
        navigate("/")
    }

    return (
        <Container fluid className="bg-light min-vh-100 d-flex align-items-center justify-content-center">
            <Row className="text-center">
                <Col>
                    <h1 className="display-1 fw-bold text-secondary" style={{letterSpacing: '30px', fontSize: '14rem'}}>
                        404
                    </h1>
                    <h2 className="text-secondary">
                        OOPS! PAGE NOT FOUND
                    </h2>
                    <h4 className="text-secondary">
                        WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND
                    </h4>
                    <Button 
                        variant="danger"	
                        className="mt-3 rounded-pill"
                        style={{width: '250px'}}
                        onClick={handleBtn}
                    >
                        Back to home
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default PageNotFound;