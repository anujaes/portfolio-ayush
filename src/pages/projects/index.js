import { Container, Row } from "react-bootstrap";
// import VerticalNav from "../../common/VerticalNav";
import Gallery from "./components/gallery";
import Motion from "./components/motion";
import ResponsiveNavBar from "../../common/navbar";
import SuperHeaders from "./components/superHeading";
import gallery_images from "../../exports/gallery";
import motion_videos from "../../exports/motion";
import { useParams } from "react-router-dom";

function Projects() {
    const { param } = useParams();
    const contents = {
        "motion": {
            heading: "Motion Video",
            summary: "There’s a unique magic in motion—a story told frame by frame, breathing life into every detail. As you explore this section of my site, let yourself be immersed in the rhythm and energy of these videos. These are some of my favorite moving moments, capturing the essence of my projects in motion.",
            // backgroundImage: 'https://wallpapercave.com/wp/wp5280530.jpg',
            backgroundImage: 'https://pro.sony/s3/2018/03/20155628/IMG_0605.jpeg',
            // backgroundImage: 'https://wallpapersok.com/images/hd/high-definition-webcam-5ob04juk3p726odz.jpg',
            component: <Motion aria_label="narrative" data={motion_videos} heading="Narrative" />
        },
        "still": {
            heading: "Still Visuals",
            summary: "There may be no better way to communicate what we do than through images. As you browse through my site, take a few moments to let your eyes linger here. These are few of  my favorite frames from my projects.",
            // backgroundImage: 'https://wallpapercave.com/wp/wp5969963.jpg',  
            backgroundImage: 'https://wallpapercave.com/wp/wp5280530.jpg',
            component: <Gallery aria_label={"gallery"} data={gallery_images} heading="GALLERY" />
        }
    }

    return (
        <>
            <ResponsiveNavBar topStick={true} topFixed={true} />
            <Container fluid className="mh-100vh">
                <Row className="p-0">
                    {/* <Col
                        lg={2}
                        md={2}
                        className="mh-100vh px-2 d-none d-lg-block m-0"
                        style={{ paddingTop: "70px" }}
                    >
                        <VerticalNav />
                    </Col> */}
                    {/* Content */}
                    {/* <Col className="vnav-no-scroll p-0 h-100vh" style={{ scrollBehavior: "smooth" }} > */}
                    {/* <Row className="p-0 m-0"
                            style={{ scrollBehavior: "smooth" }}
                        > */}
                    {/* Still images */}
                    <SuperHeaders
                        heading={contents[param].heading}
                        summary={contents[param].summary}
                        backgroundImage={contents[param].backgroundImage}
                    />
                    {contents[param].component}

                    {/* motion videos */}
                    {/* <SuperHeaders
                                heading={"Motion Video"}
                                summary={"There’s a unique magic in motion—a story told frame by frame, breathing life into every detail. As you explore this section of my site, let yourself be immersed in the rhythm and energy of these videos. These are some of my favorite moving moments, capturing the essence of my projects in motion."}
                                ariaLabel={"motion"}
                                backgroundImage='https://t3.ftcdn.net/jpg/05/33/98/76/360_F_533987676_jsYzd4tJpPx0YMKvTMLcCVNmL7pCuPYS.jpg'
                            />
                            <Motion aria_label="narrative" data={data} heading="Narrative" /> */}
                    {/* </Row> */}
                    {/* </Col> */}
                </Row>
            </Container>
        </>
    )
}


export default Projects;