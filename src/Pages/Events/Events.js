import React from 'react'
import { Link } from 'react-router-dom';



const Events = () => {
  return (
    <div className="container events--home">
      <div className="card events--card shadow-lg">
        <article className="">
          <img width="100" height="100"
            src="https://p2zk82o7hr3yb6ge7gzxx4ki-wpengine.netdna-ssl.com/wp-content/uploads/2018/01/serverless_bze.png" alt="" />
        </article>
        <h1>Serverless in Action</h1>
        <p className="date">10<sup>th</sup> - 11<sup>th</sup> November</p>
        <p className="desc">
            Microservices architecture is a distributed design approach intended to overcome the limitations of traditional monolithic architectures.
        </p>
        <article>
          <Link to="/events-previous">
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
