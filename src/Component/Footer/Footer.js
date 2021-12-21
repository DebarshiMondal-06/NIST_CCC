import React from 'react';
import { Link } from 'react-router-dom';
import FooterContact from './FooterContact';




const Footer = () => {
  return <section className="footer--section card shadow-lg" id="contact-sect">
    <div className="container">
      <article className="footer--head">
        <p><img width="100" height="140" src="https://i.ibb.co/VBCyyGk/logo-cutted.png" alt="" /></p>
        <p className="head">NIST CCC</p>
      </article>
      <div className="row">
        <article className="lists col-md-3">
          <Link to="/members"><li>Members</li></Link>
          <Link to="/events-all"><li>Events</li></Link>
          <Link to="/privacy-policy"><li>Privacy</li></Link>
          <Link to="/tech"><li>Tech</li></Link>
        </article>
        <article className="lists col-md-3">
          <Link to="/blogs"><li>Blogs</li></Link>
          <Link to="/hiring"><li>Hiring</li></Link>
          <Link to="/developer"><li>Developer</li></Link>
        </article>
        <section className="contact--section col-md-5">
          <FooterContact />
        </section>
        <section className="col-md-1"></section>
      </div>
    </div>

    <section className="copyright--section card">
      2016-21 &copy; All right reserved @nistccc
    </section>
  </section>
}

export default Footer
