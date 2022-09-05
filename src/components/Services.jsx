import React from "react";
import Data from "./Data";


const Service = () => {
  const card = (props) => {

    console.log(props.imgsrc);

    return (
      <div className="col-md-4">
        <div className="card">
          <img src={require(`../imges/${props.imgsrc}`)} className="card-img-top" alt={props.title} />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.desc}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center py-4">
            <h1>Services</h1>
            <hr />
          </div>
        </div>
        <div className="row">{Data.map(card)}</div>
      </div>
    </>
  );
};

export default Service;
