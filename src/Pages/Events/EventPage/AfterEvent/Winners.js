import React from "react";



const Winners = () => {


  return <section className="container" style={{ width: '60%' }}>
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner" >
        <div className="carousel-item">
          <img className="img-fluid" style={{ height: 600 }} src="https://cloudcomputingimages.s3.ap-south-1.amazonaws.com/IMG-20211111-WA0007.jpg" alt="Third slide" />
        </div>
        <div className="carousel-item active">
          <img className="img-fluid" style={{ height: 600 }} src="https://cloudcomputingimages.s3.ap-south-1.amazonaws.com/IMG-20211110-WA0009.jpg" alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="img-fluid" style={{ height: 600 }} src="https://cloudcomputingimages.s3.ap-south-1.amazonaws.com/IMG-20211110-WA0020.jpg" alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="img-fluid" style={{ height: 600 }} src="https://cloudcomputingimages.s3.ap-south-1.amazonaws.com/IMG-20211110-WA0022.jpg" alt="Third slide" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    <br /><br />
  </section>
};

export default Winners;
