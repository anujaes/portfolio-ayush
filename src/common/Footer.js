import Container from 'react-bootstrap/Container';

function Footer() {
    return (
        <Container
            fluid
            className='pt-5 pb-1 m-0 d-flex flex-column justify-content-center align-items-center text-white'
            style={{
                backgroundImage: `url(/assets/svgs/wave_footer_2.svg)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                // height: '100vh'
            }}
        >
            <h1 className='poppins-light fs-2 pt-5'>Follow For More</h1>
            <p className='poppins-regular pt-4'>ayushbarua114@gmail.com &nbsp; | &nbsp;+91 9876 543 210</p>
            <div className="d-flex text-white pt-1">
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
                <a
                    style={{ textDecoration: 'none' }}
                    className='text-white'
                    href='#'
                >
                    <i class="bi bi-twitter-x fs-5 ms-3"></i>
                </a>
            </div>
            <p className='pt-3 poppins-thin-italic'>©portfolio 2023 by AYUSH BARUA. All rights reserved.</p>
        </Container>
    );
}

export default Footer;