import React from 'react';


const ViewTicket = ({ getItem }) => {
  var items = JSON.parse(getItem);



  return <section className="view--ticket" style={{ marginTop: '-5%' }}>
    <h1> User Details</h1>
    <div style={{ marginTop: '-3%', padding: '20px' }} className="card shadow-lg">
      <h2><b>Ticket ID:</b> <span>#{(items.ticketId && items.ticketId.S) ? items.ticketId.S : items.ticket}</span></h2>
      <main className="ticket--card--info">
        <div>
          <p><b>Name: </b> <span>{(items.name && items.name.S) ? items.name.S : items.fullname}</span></p>
          <p><b>Contact: </b><span>{(items.contact && items.contact.S) ? items.contact.S : items.contact}</span></p>
          <p><b>Roll No: </b><span>{(items.rollno && items.rollno.S) ? items.rollno.S : items.rollno}</span></p>
          <p><b>Batch & Branch: </b><span>{(items.batch && items.batch.S) ? items.batch.S : items.batch}, &nbsp;
            {(items.branch && items.branch.S) ? items.branch.S : items.branch}</span>
          </p>
          <p><b>Email: </b><span>{(items.emailId && items.emailId.S) ? items.emailId.S : items.email}</span></p>
        </div>
      </main>
    </div>
  </section>
}

export default ViewTicket
