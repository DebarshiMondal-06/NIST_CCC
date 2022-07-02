import React, { useState } from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom';
import { eventDetails } from '../../../Component/Data/eventDetails';


const EventDetails = () => {
  const loc = useLocation();
  const [state] = useState(eventDetails);


  var filterData = [];
  if (loc.pathname === '/events-all') {
    filterData = state
  }
  if (loc.pathname === '/events-upcoming') {
    filterData = state.filter((item) => item.event_type.toLowerCase() === 'upcoming');
  }
  if (loc.pathname === '/events-previous') {
    filterData = state.filter((item) => item.event_type.toLowerCase() === 'previous');
  }




  return <section className="event--details--section animate__animated animate__tada">
    {
      filterData && filterData.length > 0
        ? filterData.map((item, i) => {
          const { event_type, name, describe, logo, short_desc } = item;
          return <> <div key={i} className="event--card card shadow-lg">
            <p className="badge bg-warning"><i className="fas fa-atom"></i> {event_type}</p>
            <main className="p-0">
              <img width="250" className="p-0" height="180"
                src={logo} alt=""
              />
            </main>
            <main className="event--text">
              <h3>{name}</h3>
              <p>
                {describe}
              </p>
              <h6 className="text-info" style={{
                fontFamily: 'cursive'
              }}> {short_desc} <i className="fas fa-shapes"></i> </h6>
              {
                event_type === 'Upcoming' ? <Link to="/events-details">
                  <button className="btn btn-primary">
                    Check Details <i className="fas fa-rocket p-1"></i>
                  </button>
                </Link> : null
              }
            </main>
          </div>
          </>
        }).reverse()
        : <div className="event--card shadow">
          <article className="no--data">
            <i className="fas fa-frown-open fa-4x"></i>
            <p>Oops! No Event Data</p>
          </article>
        </div>
    }
  </section>
}

export default EventDetails
