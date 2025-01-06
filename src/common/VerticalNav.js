import { Nav, ListGroup } from "react-bootstrap"

const still = [
    { name: 'Gallery', link: "#gallery" },
    // { name: 'Food Blogs', link: "#food" },
]

const motion = [
    { name: 'NARRATIVE', link: "#narrative" },
    { name: 'COMMERCIALS', link: "#food" },
    { name: 'MUSIC', link: "#" },
    { name: 'YOUTUBE', link: "#" },
]

function Subgroup({ groupName, groupLink, groupItems }) {
    return (
        <>
            <Nav.Link
                eventKey="link-1"
                className="text-decoration-none text-decoration-underline text-white poppins-semibold l-space-1 py-0 pb-2 border-0"
                href={groupLink}
            >
                {groupName}
            </Nav.Link>
            <ListGroup variant="flush" as="ul">
                {
                    groupItems.map((item) => (
                        <ListGroup.Item
                            as="li"
                            className="bg-transparent poppins-light p-0 m-0 border-0 pt-1"
                        >
                            <Nav.Link eventKey="link-1" href={item.link} className="py-0 m-0 text-white">{item.name}</Nav.Link>
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>
        </>
    )
}

function VerticalNav() {
    return (<>
        <Nav defaultActiveKey="/home" className="flex-column w-100 pt-5 ">
            {/* stils */}
            <Subgroup groupName="STILL PHOTOS" groupLink="#still" groupItems={still} />
            <div className="mt-4"></div>
            {/* MOTION */}
            <Subgroup groupName="MOTION" groupLink="#motion" groupItems={motion} />
        </Nav>
    </>
    )
}

export default VerticalNav;