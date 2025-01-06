import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CollabItem = ({ item }) => {
    const { ref, inView } = useInView({
        threshold: 0.3, // Trigger animation when 30% of the element is visible
        triggerOnce: true,
    });

    return (
        <Col lg={2} md={3} xlg={3} sm={4} xs={6} className="p-3 d-flex flx-center" ref={ref}>
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                    duration: 1.6,
                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                }}
            >
                <div className="brand-logo d-flex justify-content-center">
                    <img src={item.img} width={"auto"} height={100} alt="Brand Logo" />
                </div>
            </motion.div>
        </Col>
    );
};

const Collabs = ({ brandsLogo }) => {
    return (
        <Container fluid className="pb-5 pt-5">
            <Container className="py-5 flx-center">
                <h1 className="poppins-thin text-center text-white mt-5" style={{ letterSpacing: 3 }}>
                    Our Brand Collaborations
                </h1>
                <p className="poppins-light text-danger mb-5 fs-4 text-center">
                    Our valued partnerships and collaboration across excellence.
                </p>
                <Row className="p-0 m-0">
                    {brandsLogo.map((item, index) => (
                        <CollabItem key={index} item={item} />
                    ))}
                </Row>
            </Container>
        </Container>
    );
};

export default Collabs;
