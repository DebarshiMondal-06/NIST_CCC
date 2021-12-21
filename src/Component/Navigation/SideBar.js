import React, { useContext } from 'react'
import { GlobalContext } from '../../Context';
import './SideBar.css';
import { NavLink } from 'react-router-dom';



const SideBar = () => {
  const { modalOpen, setModalOpen, closeModal, setCloseModal } = useContext(GlobalContext);

  const Item = [
    { text: 'Home', path: '/' },
    { text: 'AboutUs', path: '/aboutus' },
    { text: 'Events', path: '/events-all' },
    { text: 'Members', path: '/members' },
    { text: 'Hire me', path: '/hiring' },
  ];

  const handleClose = (time) => {
    setCloseModal(true)
    setTimeout(() => {
      setCloseModal(false);
      setModalOpen(false);
    }, 200);
  }



  return <section className={`animate__animated  ${modalOpen ? "animate__fadeInLeft sidebar--section" : 'd-none'} 
  ${closeModal ? 'animate__fadeOutLeft' : null}`}>

    <div className="card shadow-lg sidebar--card">
      <img src="https://i.ibb.co/VBCyyGk/logo-cutted.png" alt="" />
      <div className="sidebar--head">
        <h2>Nist CCC</h2>
        <h6><i onClick={() => handleClose(500)}
          style={{ cursor: 'pointer' }}
          className="fas fa-times"></i></h6>
      </div>
      <p className="line" />
      <div className="sidebar--body animate__animated animate__fadeInLeft">
        {
          Item.map((item, i) => {
            const { path, text } = item;
            return <NavLink key={i} className="list" to={path} onClick={() => handleClose(400)}>
              {text}
            </NavLink>
          })
        }
      </div>
    </div>
  </section>
}

export default SideBar;
