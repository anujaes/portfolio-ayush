import React, {useState } from 'react';
// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import { Col, Image, Row } from 'react-bootstrap';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './styles.css';

// import required modules
// import { EffectCards, Autoplay } from 'swiper/modules';
import { Container } from 'react-bootstrap';

import I_1 from "../../../assets/banners/10.webp";
import I_2 from "../../../assets/banners/02.webp";
import I_3 from "../../../assets/banners/48.webp";
import I_4 from "../../../assets/banners/52.webp";
import I_5 from "../../../assets/banners/13.webp";
import I_6 from "../../../assets/banners/22.webp";
import I_7 from "../../../assets/banners/01.webp";
import I_8 from "../../../assets/banners/28.webp";
import I_9 from "../../../assets/banners/11.webp";

const images = [
    I_1, I_8, I_2, I_3, I_4, I_5, I_6, I_7, I_9
]

// function Banners() {
//     return (
//         <Container
//             fluid={true}
//             className='h-100vh flx-center'
//             style={{ height: "100vh", overflow: "hidden" }}
//         >
//             <Swiper
//                 effect={'cards'}
//                 grabCursor={true}
//                 modules={[EffectCards, Autoplay]}
//                 autoplay={{
//                     delay: 5000,
//                     disableOnInteraction: false,
//                 }}
//             // speed={700}
//             // className="mySwiper"
//             >
//                 {
//                     images.map((image) => (
//                         <SwiperSlide
//                             className='swiper-slide'
//                         >
//                             <img src={image}
//                                 style={{
//                                     width: "100%",
//                                     height: "100%",
//                                     objectFit: "cover",
//                                 }}
//                             />
//                         </SwiperSlide>
//                     ))
//                 }
//             </Swiper>
//         </Container>
//     );
// }

function Banners() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {
                images.map((image, index) => (
                    <Carousel.Item key={index + 'banner'} className='' style={{ height: '100vh' }}>
                        <Container fluid className='p-0'>
                            <Row className='p-0'>
                                <Col lg={12} className='flx-center h-100vh'>
                                    <Image
                                        src={image}
                                        style={{
                                            objectFit: "cover",
                                            width: '100%',
                                            aspectRatio: '16/9'
                                        }}
                                    />
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Col>
                            </Row>
                        </Container >
                    </Carousel.Item>
                ))
            }
        </Carousel >
    );
}

export default Banners;