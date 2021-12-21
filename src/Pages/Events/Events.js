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
        <p className="date">Wedensday 25, 2021</p>
        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam velit
          enim quas nisi illo omnis accusamus adipisci ex quia ad.
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
