import { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom"



export default function Header({ user, setUser }) {
  useEffect(() => {
    if (localStorage.getItem("user") && !user) {
      setUser(JSON.parse(localStorage.getItem("user")))
    }
  }, [user]);

  const navigate = useNavigate()

  return (

    <div className="d-flex flex-column flex-shrink-0 position-fixed" style={{ width: "16%", height: "100%", backgroundColor: "#EDEDED" }}>

      { user !== null ? <div className='header--head'>
        <p>{user}</p>
      </div> : <span></span> }
      
      <hr />
      
      <a href="/home" className='header-home-section' style={user!==null ? {visibility:"visible"}: {visibility:"hidden"}}>
        <i class="fa-regular fa-sun"></i>
        <span style={{ marginLeft: "10px", fontWeight: "100" }}>Tasks</span>
      </a>


      <a href="/important" className='header-important-section' style={user!==null ? {visibility:"visible"}: {visibility:"hidden"}}>
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

