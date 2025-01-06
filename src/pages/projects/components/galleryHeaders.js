
function GalleryHeaders({ background, heading }) {
    return (
        <div
            className="p-2"
            style={{
                backgroundRepeat: 'no-repeat',
                backgroundSize: "cover",
                backgroundPosition: 'center',
            }}
        >
            <h1 className="text-white poppins-light fs-4 l-space-1 text-black ps-2 m-0">
                {heading}
            </h1>
        </div>
    )
}


export default GalleryHeaders;