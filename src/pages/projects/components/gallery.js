import { Col, Row, Container, Accordion, Modal, Carousel } from "react-bootstrap";
import '../../../styles/images.css'
import { useState } from "react";

function Gallery({ aria_label, data, }) {
    const [showModal, setShowModal] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedGallery, setSelectedGallery] = useState(null);
    const defaultOpenAccordion = Array.from({ length: data.length }, (_, i) => i);

    const openModal = (galleryIndex, imageIndex) => {
        setSelectedGallery(data[galleryIndex]);
        setCurrentIndex(imageIndex);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div id={aria_label} className="pt-2">
            <Container fluid id={aria_label + 'body'} className="g-2 mt-2 mb-5">
                <Accordion defaultActiveKey={defaultOpenAccordion} alwaysOpen>
                    {data.map((gallery, galleryIndex) => (
                        <Accordion.Item eventKey={galleryIndex} className="accordion-item" key={galleryIndex}>
                            <Accordion.Header>{gallery.galleryName}</Accordion.Header>
                            <Accordion.Body className="p-0">
                                <Row className="g-2">
                                    {gallery.contents.map((item, index) => (
                                        <Col key={item.name} lg={4} md={6} sm={6} xs={12}>
                                            <img
                                                className="image-container"
                                                src={item.source}
                                                alt={item.name}
                                                loading="lazy"
                                                onClick={() => openModal(galleryIndex, index)} // Open modal on image click
                                            />
                                        </Col>
                                    ))}
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </Container>

            {/* Modal for viewing images */}
            <Modal show={showModal} onHide={closeModal} centered size="lg" className="bg-transparent">
                <Modal.Body className="p-0 bg-transparent">
                    <Carousel
                        activeIndex={currentIndex}
                        onSelect={(selectedIndex) => setCurrentIndex(selectedIndex)}
                        interval={null}
                        indicators={false}
                        controls={true}
                    >
                        {selectedGallery && selectedGallery.contents.map((item, index) => (
                            <Carousel.Item key={index}>
                                <img
                                    src={item.source}
                                    alt={item.name}
                                    className="d-block w-100"
                                    style={{ maxHeight: "80vh", objectFit: "contain" }}
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Gallery;
