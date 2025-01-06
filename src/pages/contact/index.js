
import { Card } from "react-bootstrap";
import ResponsiveAppBar from "../../common/navbar";
import React from "react";

function Contact() {
    return (
        <React.Fragment>
            <ResponsiveAppBar />
            <Card
                style={{ textAlign: "center" }}
                className="bg-black d-flex justify-content-center align-items-center mh-100vh text-white"
            >
                <div class="position-relative d-block text-white" style={{ borderBottom: "3px solid yellow" }} >
                    <i class="bi bi-camera2" style={{ fontSize: "2.8rem", color: "yellow" }}></i>
                    <i className="bi bi-camera-reels" style={{ color: "whitesmoke", fontSize: "6rem", position: "absolute", top: -58, left: -12 }}></i>
                </div>
                <p className="my-2 text-white"> - - - - - - - - - - - - - - - - - - -</p>
                <h5 className="p-0 m-0 poppins-regular l-space-2">AYUSH BARUAH</h5>
                <p className="l-space-1 poppins-light">CINEMATOGRAPHER</p>
                <p className="mb-0 l-space-1 poppins-regular">UNITED TALENT AGENCY</p>
                <p className="l-space-1 poppins-light">+91 9876 543 210</p>
                <p>
                    SAMPLE NAME (COMMERCIALS)
                    <br></br>
                    SAMPLE.NAME@SAMPLE.COM
                </p>
                <p>
                    SAMPLE SAMPLE (FEATURES)
                    <br></br>
                    SAMPLE.NAME@SAMPLE.COM
                </p>
                <p className="my-2 text-white"> - - - - - - - - - - - - - - - - - - -</p>
                <div className="d-flex">
                <a
                    style={{ textDecoration: 'none' }}
                    className='text-white'
                    href='https://www.instagram.com/star_gazer_4568'
                >
                    <i class="bi bi-instagram fs-4 me-3"></i>
                </a>
                <a
                    style={{ textDecoration: 'none' }}
                    className='text-white'
                    href='https://www.youtube.com/@star_gazer_4568'
                >
                    <i class="bi bi-youtube fs-4 mx-3"></i>
                </a>
                <a
                    style={{ textDecoration: 'none' }}
                    className='text-white'
                    href='mailto:?subject=Check out this YouTube channel!&body=Hi, I found this YouTube channel you might like: https://www.youtube.com/@star_gazer_4568'
                >
                    {/* <i class="bi bi-linkedin fs-4 ms-3"></i> */}
                    {/* <i class="bi bi-envelope-fill fs-4 ms-3"></i> */}
                    <i class="bi bi-google fs-4 ms-3"></i>
                </a>
                {/* <a
                    style={{ textDecoration: 'none' }}
                    className='text-white'
                    href='#'
                >
                    <i class="bi bi-twitter-x fs-4 ms-3"></i>
                </a> */}
                </div>
            </Card>
        </React.Fragment >
    );
}

export default Contact;
