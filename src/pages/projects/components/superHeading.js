// import wave from '../../../assets/svgs/wave.svg'

function SuperHeaders({ heading, summary, backgroundImage }) {

    return (
        <div className="py-3 ps-3 h-30vh flx-center"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: "cover",
                backgroundPosition: 'center',
            }}
        >
            <h1 className="text-white fs-3 poppins-light p-0 m-0 l-space-1 text-center">{heading}</h1>
            <p className="text-white fs-6 poppins-thin p-0 m-0 w-75 text-center">{summary}</p>
        </div>
    )
}

export default SuperHeaders;