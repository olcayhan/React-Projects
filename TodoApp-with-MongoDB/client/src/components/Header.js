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
    /*  <Navbar bg="primary" expand="lg">
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
     </Navbar> */
    <div className="d-flex flex-column flex-shrink-0 bg-light position-fixed" style={{ width: "8rem" }}>
      <a href="/home" className="d-block p-3 link-dark text-decoration-none" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
        hello
      </a>
      <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
        <li className="nav-item">
          <a href="/important" className="nav-link py-3 border-bottom" aria-current="page" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
            Home
          </a>
        </li>
      </ul>
      {/*      <div className="dropdown border-top">
        <a href="#" className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://github.com/mdo.png" alt="mdo" width="24" height="24" className="rounded-circle" />
        </a>
        <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
          <li><a className="dropdown-item" href="#">New project...</a></li>
          <li><a className="dropdown-item" href="#">Settings</a></li>
          <li><a className="dropdown-item" href="#">Profile</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#">Sign out</a></li>
        </ul>
      </div> */}
    </div>
  );
}

