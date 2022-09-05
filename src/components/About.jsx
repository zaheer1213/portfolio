import React from "react";
import img1 from "../../src/imges/img1.jpeg";

const About = () => {
  return (
    <>
      <section className="about">
        <div className="container">
          <div className="row">
            <h1 className="col-12 text-center py-4">About</h1>
            <hr />
          </div>
        </div>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-5 mx-auto my-5">
              <img src={img1} alt="zaheer" height="300px" width="300px" />
            </div>

            <div className="col-md-6 my-5">
              <h1 className="display-5">Zaheer Baig</h1>
              <p className="lead">
                Results driven computer science student from pune university passionate about developing user-friendly software application . excellent problem solving skills and ability to perform well in a team as well as develop my own skills as a coder.
              </p>
            </div>

            <div class="progress my-4">
              <div
                class="progress-bar bg-success"
                role="progressbar"
                aria-label="Success example"
                style={{ width: "80%" }}
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              >HTML/HTML5</div>
              <span className="pro"> 80%</span>
            </div>
            <div class="progress my-4">
              <div
                class="progress-bar bg-info"
                role="progressbar"
                aria-label="Info example"
                style={{ width: "70%" }}
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
              >CSS</div>
              <span className="pro"> 70%</span>
            </div> 

            <div class="progress my-4">
              <div
                class="progress-bar bg-warning"
                role="progressbar"
                aria-label="Warning example"
                style={{ width: "60%" }}
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              > JAVASCRIPT</div> 
            <span className="pro"> 60%</span>

            </div> 
            
             
            <div class="progress my-4">
              <div
                class="progress-bar bg-danger"
                role="progressbar"
                aria-label="Danger example"
                style={{ width: "50%" }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              >REACT</div>
              <span className="pro"> 50%</span>
            </div>
             
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
