import React from "react";
import brandsLogo from '../../exports/brands';
import segments from "../../exports/segments";
import Segments from "./components/Segments";
import Collabs from "./components/BrandsCollab";
import ResponsiveNavBar from "../../common/navbar";

// styles
import "../../styles/parallax.css"
import Banners from "./components/banners";

function Landing() {

    return (
        <React.Fragment>
            {/* <motion.div
                className="box"
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 2.01]
                }}
            > */}
                {/* NAVBAR */}
                <ResponsiveNavBar topFixed={true} />
                <Banners />
                {/* CONTENT */}
                {/* <Container
                    fluid
                    className="bg-warning p-0"
                    style={{
                        backgroundImage: "url(https://static.wixstatic.com/media/81309f_007a98f39f5745f993bf642cd3afd77e~mv2.jpg/v1/fill/w_1899,h_814,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/81309f_007a98f39f5745f993bf642cd3afd77e~mv2.jpg)",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover"
                    }}
                >
                    <div
                        className="mh-100vh pb-5"
                        style={{
                            backGround: "rgb(0,0,0)",
                            background: "linear-gradient(45deg, rgba(0,0,0,1) 10%,rgba(0,0,0,0) 80%, rgba(0,0,0,0) 100%)",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-end",
                        }}>
                        <p className="fs-5 poppins-thin text-white ps-5 mb-0">
                            A story should have <br></br>
                            <strong>a <strong>beginning</strong>, a <strong>middle</strong> & an <strong>end</strong><br></br></strong>
                            but not necessarily in that order.<br></br>
                        </p>
                        <p className="fs-5 ps-5 poppins-thin text-white">
                            <strong>-Jean-Luc Godard</strong>
                        </p>
                    </div>
                </Container> */}
            {/* </motion.div> */}

            {/* Segments */}
            <Segments segments={segments} />

            {/* Colabs */}
            <Collabs brandsLogo={brandsLogo} />
        </React.Fragment >
    );
}

export default Landing;
