import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function Menu({ param1 }) {
    // const {param1} = props
    // console.log(props)

    return (
        <>
            <Navbar className="navBg" variant="dark" expand="lg" bg='dark'>
                <Container>
                    <Navbar.Brand as={Link} to="/" >React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/" >Cafe</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Link to='/cart'>                            <button className='btn btn-outline-dark'>
                        <FontAwesomeIcon icon={faCoffee} color='gray' font-size='50px' />
                    </button>
                    </Link>
                </Container>
            </Navbar>
            <Outlet> </Outlet>
            <section>
            </section>
        </>
    )
}

export default Menu