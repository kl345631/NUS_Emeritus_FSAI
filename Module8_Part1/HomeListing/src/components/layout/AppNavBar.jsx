import { Navbar, Nav, Container, Button, Form, FormControl } from 'react-bootstrap';
// FIX: Use curly braces for named import
import { NavLink } from 'react-router'; 

const activeStyle = {
    color: '#c408f3ff', 
    fontWeight: 'bold',
};

export default function AppNavBar() {
    return (
        <Navbar bg="light" expand="lg" className="border-bottom">
            <Container>
                {/* TIP: Use as={NavLink} for the brand to prevent full page reloads */}
                <Navbar.Brand as={NavLink} to="/">Home Listing .Inc</Navbar.Brand> 
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link 
                            as={NavLink} 
                            to="/" 
                            end 
                            // FIX: Add this logic for the active style to work
                            style={({ isActive }) => (isActive ? activeStyle : undefined)}
                        >
                            Home
                        </Nav.Link>
                        
                        <Nav.Link 
                            as={NavLink} 
                            to="/about" 
                            style={({ isActive }) => (isActive ? activeStyle : undefined)}
                        >
                            About
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex me-2">
                        <FormControl type="search" placeholder="Search" className="me-2"/>
                        <Button variant="outline-primary">Search</Button>
                    </Form>
                    <Button variant="outline-secondary" className="me-2">Signin</Button>
                    <Button variant="primary">Register</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
