import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { eventDetails } from "../../Component/Data/eventDetails"


const Events = () => {
  const data = useState(eventDetails[1]);


  return (
    <div className="container events--home">
      <div className="card events--card shadow-lg">
        <article className="">
          <img width="100" height="100"
            src={data[0].logo} alt="" />
        </article>
        <h1>{data[0].name}</h1>
        <p className="date">05<sup>th</sup> July, 2022</p>
        <p className="desc">
          {data[0].describe}
        </p>
        <article>
          <Link to="/events-upcoming">
            <button className="btn mt-2">
              Checkout...
            </button>
          </Link>
        </article>
      </div>
    </div>

  )
}

export default Events;
