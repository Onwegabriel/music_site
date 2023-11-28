import React from 'react';
// import '../styles/bootstrap.bundle.min.js';
// import 'bootstrap/dist/css/bootstrap.min.css';



const Carousel = () => {
    return (

    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
          <img src="/assets/home1.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption">
                <h1 className="front">WELCOME TO <br/> CLIMAX ESTATE</h1> <br/>
                <button className="btn btn-light" data-bs-toggle="modal" data-bs-target="#inspecton">Book an Inspection</button>
       
             
            </div>
          </div>
          <div className="carousel-item">
          <img src="/assets/home-1.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption">
                <h5>Always Dedicated</h5> <br/>
                <button className="btn btn-light" data-bs-toggle="modal" data-bs-target="#inspecton">Book an Inspection</button>
       
           
            </div>
          </div>
          <div className="carousel-item">
            <img src="/assets/home2.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption">
                <h5>Your Dream Estate</h5> <br/>
                <button className="btn btn-light" data-bs-toggle="modal" data-bs-target="#inspecton">Book an Inspection</button>
           
  
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  };
  
  export default Carousel;
  