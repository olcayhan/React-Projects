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

    <div className="d-flex flex-column flex-shrink-0 position-fixed" style={{ width: "16%", height: "100%", backgroundColor: "#F0EBE3" }}>
      <a href="/home" className='header-home-section'>
        <i class="fa-regular fa-sun"></i>
        <span style={{ marginLeft: "10px", fontWeight: "100" }}>Tasks</span>
      </a>
      <a href="/important" className='header-important-section'>
        <i className="fa-regular fa-star"></i>
        <span style={{ marginLeft: "10px", fontWeight: "100" }}>Important</span>
      </a>
      <hr />
      {
        user ?
          <button
            className='header-button'
            onClick={(e) => {
              localStorage.removeItem("user")
              setUser(null)
              navigate("/signin")
            }}> Çıkış yap</button> :

          <button
            className='header-button' >
            <Link className='text-white text-decoration-none' to="/signin">
              Giriş yap
            </Link>
          </button>
      }

    </div>
  );
}

