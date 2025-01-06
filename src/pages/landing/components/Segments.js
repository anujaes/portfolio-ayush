import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ParallaxBanner } from "react-scroll-parallax";
import CardHeading from "./CardHeadings";

const SegmentItem = ({ item }) => {
    return (
        <Col lg={6} className="m-0 p-0">
            {item.type === "image" ? (
                <ParallaxBanner
                    className="plx-bannerBg"
                    layers={[{ image: item.source, speed: -10 }]}
                >
                    <CardHeading heading={item.heading} summary={item.summary} />
                </ParallaxBanner>
            ) : (
                <ParallaxBanner
                    className="yt-bannerBg"
                    layers={[
                        {
                            children: (
                                <iframe
                                    id={Date.now()}
                                    className="yt-iframe"
                                    src={`${item.source}&autoplay=1&mute=1&controls=0&loop=1&playlist=01cpW1SEqAc`}
                                    frameBorder="0"
                                    allow="autoplay; encrypted-media"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                    style={{ aspectRatio: "16 / 9" }}
                                ></iframe>
                            ),
                            speed: 0,
                        },
                    ]}
                >
                    <CardHeading heading={item.heading} summary={item.summary} />
                </ParallaxBanner>
            )}
        </Col>
    );
};

const Segments = ({ segments }) => {
    return (
        <Container fluid className="m-0 p-0">
            <Row className="m-0">
                {segments.map((item, index) => (
                    <SegmentItem key={index} item={item} />
                ))}
            </Row>
        </Container>
    );
};

export default Segments;
