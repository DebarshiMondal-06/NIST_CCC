import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { GlobalContext } from '../../Context';
import './Navbar.css';
import logo from '../../Images/club_logo.png';
import { useCookies } from 'react-cookie';
import { useLocation } from 'react-use';
import { adminAuthContext } from '../../Admin/AdminContext';


const Navbar = () => {
  const [cookie] = useCookies();
  const { pathname } = useLocation();
  const { setModalOpen } = useContext(GlobalContext);
  const { logout } = useContext(adminAuthContext)
  const [backColor, setbackColor] = useState(false);


  const changeBackground = () => {
    if (window.scrollY >= 200) {
      setbackColor(true);
    }
    else {
      setbackColor(false);
    }
  }
  window.addEventListener('scroll', changeBackground);


  const someFun1 = () => {
    document.getElementById('contact-sect').scrollIntoView({ behavior: "smooth" });
  }
  return <section>
    <nav className={`navbar ${backColor ? 'navbar--section backColor  shadow-lg' : 'navbar--section'}`}>
      <div className="container-fluid">
        <NavLink className="navbar--brand navbar-brand" to="/">
          <img width="80" height="100" src={logo} alt="" />
        </NavLink>
        <article className="navbar--left">
          <button className="btn" onClick={() => setModalOpen(true)}>
            <i className="fas fa-external-link-alt"></i>
          </button>&nbsp;
          {
            cookie.admin_data && pathname.includes('admin')
              ? <button onClick={() => logout()} className="btn-contact btn">Logout</button>
              : <button onClick={someFun1} className="btn-contact btn">Contact</button>
          }
        </article>
      </div>
    </nav>
  </section>
}

export default Navbar;
