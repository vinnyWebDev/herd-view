import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useContext } from "react";
import { Context } from "../Context/AuthContext";
import Logo from "../Images/logo.png"
import { signOut, getAuth } from "firebase/auth"

function Navigation() {
    const { user } = useContext(Context);

    const auth = getAuth();

    async function handleSignOut() {
        try {
            //auth must be passed in ehre
            console.log("test")
            await signOut(auth);
        } catch (error) {
            console.log(error)
        }
    }

    if (!user) {
        return (
            <Navbar expand="lg" className="navbar-dark Header">
                <Container>
                    <Navbar.Brand href="/"><img src={Logo} className='Logo'></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
    else {
        return (
            <Navbar expand="lg" className="navbar-dark Header py-3">
                <Container>
                    <Navbar.Brand href="/"><img src={Logo} className='Logo'></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link onClick={() => { handleSignOut() }}>Sign Out</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default Navigation;