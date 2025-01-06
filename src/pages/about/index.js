
import { Col, Container, Row } from "react-bootstrap";
import React from "react";
import potrait from '../../assets/images/self.avif'
import experience from "../../exports/experience";
import "../../styles/about.css"
// import * as motion from "motion/react-client"
import ResponsiveNavBar from "../../common/navbar";

function About() {
    const badges = [
        'RNAB | 2022',
        `JCSI YOUNG CREATIVE AWARD | INTERNATIONAL EMMYS`,
        'LIFT OFF FILM MAKER SESSIONS | PINEWOOD STUDIOS | 2021',
        'FIRST TIME FILM MAKER SESSIONS | PINEWOOD STUDIOS | 2021'
    ]
    return (
        <React.Fragment>
            <ResponsiveNavBar topFixed={true} />
            <Container className="h-100vh d-flex justify-content-center align-items-center">
                <Container fluid='sm'>
                    <Row>
                        <Col lg={6}>
                            {/* <h6 className="text-white fs-5 mb-4 poppins-regular l-space-3">ABOUT</h6> */}
                            <h1 className="fs-3 text-white mb-4 poppins-regular l-space-3">ABOUT</h1>
                            <p className="text-white poppins-light" style={{ fontSize: '16px' }}>
                                Ayush Barua is a director and cinematographer with nearly 7 years of experience. He started as a street photographer back in 2017 and ever since then, he has been creatively indulged in this field.
                                <br></br>
                                <br></br>
                                He works on everything that involves visual storytelling including narrative films, commercials, music videos, documentaries and live events, but is perhaps best known for his subtlely realistic cinematography and a story driven directing style.
                                <br></br>
                                <br></br>
                                He has worked on many passion projects from time to time and believes in collaboration with the fellow artists.
                            </p>
                            <div className="d-flex text-white">
                                {/* <i class="bi bi-instagram fs-6 me-2"></i>
                                <i class="bi bi-twitter-x fs-6 mx-2"></i>
                                <i class="bi bi-youtube fs-6 mx-2"></i>
                                <i class="bi bi-linkedin fs-6 ms-2"></i> */}
                                <a
                                    style={{ textDecoration: 'none' }}
                                    className='text-white'
                                    href='https://www.instagram.com/star_gazer_4568'
                                >
                                    <i class="bi bi-instagram fs-5 me-3"></i>
                                </a>
                                <a
                                    style={{ textDecoration: 'none' }}
                                    className='text-white'
                                    href='https://www.youtube.com/@star_gazer_4568'
                                >
                                    <i class="bi bi-youtube fs-5 mx-3"></i>
                                </a>
                                <a
                                    style={{ textDecoration: 'none' }}
                                    className='text-white'
                                    href='mailto:?subject=Check out this YouTube channel!&body=Hi, I found this YouTube channel you might like: https://www.youtube.com/@star_gazer_4568'
                                >
                                    {/* <i class="bi bi-linkedin fs-5 ms-3"></i> */}
                                    {/* <i class="bi bi-envelope-fill fs-5 ms-3"></i> */}
                                    <i class="bi bi-google fs-5 mx-3"></i>
                                </a>
                                {/* <a
                                    style={{ textDecoration: 'none' }}
                                    className='text-white'
                                    href='#'
                                >
                                    <i class="bi bi-twitter-x fs-5 ms-3"></i>
                                </a> */}
                            </div>
                        </Col>
                        <Col
                            lg={6}
                            className="d-flex justify-content-center align-items-center"
                            style={{
                                backgroundImage: `url(${potrait})`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                backgroundClip: "content-box",
                                backgroundSize: "cover"
                            }}
                        >
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container className="flx-center">
                <h1 className="text-white fs-3 poppins-regular l-space-3 mb-4">EXPERIENCE & ACHIEVEMENTS</h1>
                <Row>
                    <Col lg={8} md={12} sm={12} className="p-4">
                        <ul>
                            {
                                experience.map((item) => (
                                    <li
                                        style={{ textAlign: "justify" }}
                                        className="fs-6 mt-1 text-white poppins-light"
                                    >
                                        {item.description}
                                    </li>
                                ))
                            }
                        </ul>
                    </Col>
                    <Col lg={4} sm={12} md={12} className="flx-center">
                        <Container className="g-2">
                            <Row className="g-2">
                                {
                                    badges.map((item) => (
                                        <Col lg={6} md={6} sm={6} xs={12} className="flx-center" key={item}> { }
                                            <div class="frame-container flx-center">
                                                {
                                                    item.split('|').map((item) => (
                                                        <p
                                                            style={{ fontSize: '14px' }}
                                                            className="text-white poppins-light p-0 m-0 mt-1">
                                                            {item}
                                                        </p>
                                                    ))
                                                }
                                            </div>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default About;
