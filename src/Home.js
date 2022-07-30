import React from 'react';
import globetech from './image/globetech logo.png';
import circle from './image/Group 1.png';
import shuttle from './image/fa_space-shuttle.png';
import './Home.css';
import Features from './Features';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="container">
          <nav className="navbar pt-4">
            <div className="container-fluid">
              <img src={globetech} className="navbar-brand" alt="Globetech icon" />
              <div>
                <span className="ms-4 active"> Home</span>
                <Link to='/services'><span className="ms-4 color"> Services</span></Link>
                <Link to="/login" ><span className="ms-4 color"> Login</span></Link>
              </div>
            </div>
          </nav>
          <div className="d-flex mt-5 justify-content-between pb-5">
            <div>
              <div className="d-flex space-jet">
                <div className="mt-2 pt-1">
                  <hr />
                  <hr />
                  <hr />
                </div>
                <img className="shuttle mb-3" src={shuttle} alt="fa_space-shuttle" />
              </div>
              <h1>Welcome to<br />
                <span>Globetech</span> </h1>
              <p className="details">We are committed to deliver <span>best IT services</span> . Our Consultants have experience in working with clients. We have extensive experience in the software application space and also offer a broad range and depth of technology.</p>
              <div> <span className="spanBox-one px-3 py-1 me-3" >Support us</span> <span className="spanBox-two px-3 py-1">Our Mission</span> </div>
            </div>
            <div className="circle">
              <div className="line-1">
                <div className="line-2">
                  <div className="line-3">
                    <div className="line-4">
                      <div className="cir-1"></div>
                      <div className="cir-2"></div>
                      <div className="cir-3"></div>
                      <div className="cir-4"></div>
                      <div className="cir-5"></div>
                      <div className="cir-6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Features />
    </>
  );
};

export default Home;