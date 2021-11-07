import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import { eventDetails } from '../../../Component/Data/eventDetails';



const OneEvent = () => {

  const [value] = useState(eventDetails[0]);


  return <section className="container event--brief--section">
    <div style={{ margin: '10% 0px' }}>
      <Link to="/events-all" className="link_to_member">
        <article className="event--back_btn">
          <i className="fas fa-long-arrow-alt-left fa-2x"></i>
        </article>
      </Link>
      <main>
        <h1 className='text-left'>{value.name} <i className="fas fa-calendar-check"></i> </h1>
        <article className="register--btn">
          <button className="btn btn-primary shadow-lg">
            Register Here &nbsp; <i className="fas fa-plus"></i>
          </button>
        </article>
      </main>
      <div className="card shadow  text-center p-0">
        <p className="event-describe p-4">{value.describe}</p>
        <div className="event-extra">
          <p className='badge bg-info'>2 Days Workshops</p>
        </div>
        <article className="event--info">
          <h6>Timings 👇 </h6>
          <article className="badge--register">
            <span className="registered--badge badge shadow-lg">Registered</span>
          </article>
          <div className="timings">
            <br />
            <p className="date"><b>Date:</b> 5<sup>th</sup> - 6<sup>th</sup> of November</p>
            <p><b>Time:</b> 2:30 pm to 5:30pm</p>
          </div>
        </article>
        <article className="place">
          <p className="badge bg-warning">Venue: LHC - 407</p>
        </article>
      </div>
    </div>
  </section>
}

export default OneEvent;
