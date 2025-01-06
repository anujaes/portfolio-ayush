import { Col, Container, Row, Image, Accordion } from "react-bootstrap";

function Motion({ data }) {
    const defaultOpenAccordion = Array.from({ length: data.length }, (_, i) => i);
    return (
        <Container fluid className="g-2 mt-2 mb-5">
            <Accordion defaultActiveKey={defaultOpenAccordion} alwaysOpen>
                {data.map((motion, motionIndex) => (
                    <Accordion.Item eventKey={motionIndex} className="accordion-item mt-3" key={motionIndex}>
                        <Accordion.Header>{motion.name}</Accordion.Header>
                        <Accordion.Body className="p-0">
                            {
                                motion.contents.map((content) => (
                                    <Container fluid className="mb-4">
                                        <Row>
                                            <Col sm={12} md={8} lg={9} className="p-0">
                                                <iframe
                                                    src={content.source}
                                                    title="YouTube video player"
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                    style={{
                                                        border: 0,
                                                        padding: "0",
                                                        width: "100%",
                                                        height: "100%",
                                                    }}
                                                ></iframe>
                                            </Col>
                                            <Col lg={3} sm={12} md={4}>
                                                <Row className="g-2">
                                                    {
                                                        content?.thumbs?.map((thumb, index) => (
                                                            <Col lg={12} >
                                                                <Image
                                                                    src={thumb}
                                                                    width={'100%'}
                                                                    className="w-100 h-100 object-fit-cover"
                                                                />
                                                            </Col>
                                                        ))
                                                    }
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Container>
                                ))
                            }
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </Container>
    )
}


export default Motion;