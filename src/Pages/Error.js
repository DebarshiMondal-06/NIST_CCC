import React from 'react'
import { useHistory } from 'react-router';
import Notfound from '../Images/404.png';



const Error = () => {
  const history = useHistory();


  return <section className="error--section container">
    <div style={{ margin: '10% 0px' }}>
      <h2>Oops! seems Nothing found here!</h2>
      <img src={Notfound} width="200" height="200" alt="" className="mb-4" />
      <div className="error--btn">
        <button onClick={() => history.push('/')}
          className="btn ">
          Proceed to home
        </button>
      </div>
    </div>
  </section>
}

export default Error;
