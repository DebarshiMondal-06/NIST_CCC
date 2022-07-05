import React from 'react';
import { Link } from 'react-router-dom';


const ViewTicket = ({ getItem }) => {
  var items = JSON.parse(getItem);



  return <section className="view--ticket" style={{ marginTop: '-5%' }}>
    <h1> User Details</h1>
    <div style={{ marginTop: '-3%', padding: '20px' }} className="card shadow-lg checkout">
      <h2><b>Ticket ID:</b> <span>#{(items.ticketId && items.ticketId.S) ? items.ticketId.S : items.ticket}</span></h2>
      <main className="ticket--card--info">
        <div>
          <p><b>Name: </b> <span>{(items.name && items.name.S) ? items.name.S : items.fullname}</span></p>
          <p><b>Contact: </b><span>{(items.contact && items.contact.S) ? items.contact.S : items.contact}</span></p>
          <p><b>Roll No: </b><span>{(items.rollno && items.rollno.S) ? items.rollno.S : items.rollno}</span></p>
          <p><b>Batch </b><span>{(items.batch && items.batch.S) ? items.batch.S : items.batch} &nbsp;</span>
          </p>
          <p><b>Branch & Section: </b><span> {(items.branch && items.branch.S) ? items.branch.S : items.branch} & &nbsp;
            {(items.section && items.section.S) ? items.section.S : items.section}</span>
          </p>
          <p><b>Email: </b><span className="text-lowercase">{(items.emailId && items.emailId.S) ? items.emailId.S : items.emailId}</span></p>
        </div>
      </main>
      <br />
      <article className="pla">
        <Link to={{ pathname: "https://ccc-game.tech" }} target="_blank">
          <p className="badge bg-warning" id="view-register">
            Checkout <i className='text-primary fas fa-rocket'></i>
          </p>
        </Link>
      </article>
    </div>
  </section>
}

export default ViewTicket
