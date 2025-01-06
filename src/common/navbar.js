import { useState, useEffect } from 'react';
import { Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import '../styles/navbar.css'

function ResponsiveNavBar({ topFixed, topStick }) {
    const [navbarBg, setNavbarBg] = useState('transparent');

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setNavbarBg('black');
        } else {
            setNavbarBg('transparent');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Navbar
            expand="lg"
            fixed={topFixed ? "top" : 'null'}
            sticky={topStick ? 'top' : 'null'}
            style={{ backgroundColor: navbarBg, transition: 'background-color 0.3s ease-in-out' }}
            className="py-1">
            <Container fluid>
                <Navbar.Brand href="/" className='text-white'>
                    <h3
                        className='poppins-regular fs-3 my-0 p-0 px-sm-1 px-md-0 p-lg-0 px-xs-0'
                        style={{ letterSpacing: 3.2 }}
                    >
                        AYUSH BARUA
                    </h3>
                    <p className='poppins-light my-0 p-0 px-xs-0 px-sm-1 px-md-0 p-lg-0 l-space-1' style={{ fontSize: '0.9rem' }}>
                        DIRECTOR | FILMMAKER | DOP
                    </p>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand`}
                        aria-labelledby={`navbarScroll`}
                        placement="end"
                        className="bg-dark"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand`} className='text-white'>
                                Menu
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="/" className='text-white text-small pe-3'>
                                    <i className="bi bi-house-door-fill pe-1"></i>HOME
                                </Nav.Link>
                                <Nav.Link href="/projects/motion" className='text-white text-small pe-3'>
                                    <i className="bi bi-camera-reels pe-1"></i>MOTION
                                </Nav.Link>
                                <Nav.Link href="/projects/still" className='text-white text-small pe-3'>
                                    <i className="bi bi-camera2 pe-1"></i>STILL
                                </Nav.Link>
                                {/* <NavDropdown
                                    title={<><i className="bi bi-camera-reels pe-1"></i>MOTION</>}
                                    id={`offcanvasNavbarDropdown-expand`}
                                    className='text-white pe-3'
                                    menuVariant='dark'
                                >
                                    <NavDropdown.Item href="/projects#youtube">Youtube</NavDropdown.Item>
                                    <NavDropdown.Item href="/projects#narrative">Narrative</NavDropdown.Item>
                                    <NavDropdown.Item href="/projects#commercials">Commercials</NavDropdown.Item>
                                    <NavDropdown.Item href="/projects#music">Music Video</NavDropdown.Item>
                                </NavDropdown> */}
                                {/* <NavDropdown
                                    title={<><i className="bi bi-camera2 pe-1"></i>STILL</>}
                                    id={`offcanvasNavbarDropdown-expand`}
                                    className='text-white pe-3'
                                    menuVariant='dark'
                                >
                                    <NavDropdown.Item href="/projects#gallery">Gallery</NavDropdown.Item>
                                </NavDropdown> */}
                                <Nav.Link href="/about" className='text-white text-small pe-3'><i className="bi bi-person-fill pe-1"></i>ABOUT</Nav.Link>
                                <Nav.Link href="/contact" className='text-white text-small'><i className="bi bi-headphones pe-1"></i>CONTACT</Nav.Link>

                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default ResponsiveNavBar;