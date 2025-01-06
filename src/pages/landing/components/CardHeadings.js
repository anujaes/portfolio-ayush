
function CardHeading(props) {
    return (
        <div
            className="position-absolute top-50 start-50 translate-middle text-white w-100 h-100 p-5"
            style={{
                zIndex: 10,
                alignContent: "center",
                background: "rgba(0, 0, 0, 0.23)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                // backdropFilter: "blur(0.06rem)",
                // webkitBackdropFilter: "blur(13.4px)"
            }}
        >
            <h1 className="poppins-regular fs-2">{props.heading}</h1>
            <h5 className="poppins-light">{props.summary}</h5>
            <a href="#" className="explore-btn poppins-light">
                Explore <i class="bi bi-arrow-right"></i>
            </a>
        </div>
    )
}

export default CardHeading;