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
        <Navbar.Brand href="/home">To Do List</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">My Day</Nav.Link>
          </Nav>

        </Navbar.Collapse>
        {
          user ?
            <Button variant="outline-secondary"
              onClick={(e) => {
                localStorage.removeItem("user")
                setUser(null)
                navigate("/signin")
              }}> Çıkış yap</Button> :


            <Button variant='outline-secondary' >
              <Link className='text-white text-decoration-none' to="/signin">
                Giriş yap
              </Link>
            </Button>

        }

      </Container>
    </Navbar>
  );
}

