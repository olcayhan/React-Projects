import { useEffect } from 'react';
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom"



export default function Header({ user, setUser }) {

  useEffect(() => {
    if (localStorage.getItem("user") && !user) {
      setUser(JSON.parse(localStorage.getItem("user")))
    }
  }, [user]);

  const navigate = useNavigate()
  return (
    <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Anasayfa</Nav.Link>
            <NavDropdown title="Hakkımızda" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        {
          user ? <Button variant='outline-light'
            onClick={(e) => {
              localStorage.removeItem("user")
              setUser(null)
              navigate("/signin")
            }}> Çıkış yap</Button> :
            <Button variant='outline-light' >
              <Link className='text-white text-decoration-none' to="/signin">
                Giriş yap
              </Link>
            </Button>}
      </Container>
    </Navbar>
  );
}

