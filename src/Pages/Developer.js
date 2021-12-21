import React from 'react'


const Developer = () => {
  return <>
    <h2 className="creators text-center">Creators</h2>
    <section className="developer--section container">
      <article className="card animate__animated animate__zoomInUp">
        <img src="https://avatars.githubusercontent.com/u/52108126?v=4" alt="developer" />
        <div>
          <h1>Debarshi Mondal</h1>
        </div>
        <section className="developer--text">
          <h3>Developer</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, ut. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Illo, libero.</p>
        </section>
      </article>
      <article className="card animate__animated animate__zoomInUp">
        <img src="https://avatars.githubusercontent.com/u/66204882?v=4" alt="desginer" />
        <div className="">
          <h1>Sutari Sunil Reddy</h1>
        </div>
        <section className="developer--text">
          <h3>Designer</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, ut. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Illo, libero.</p>
        </section>
      </article>
    </section>
  </>
};

export default Developer;
