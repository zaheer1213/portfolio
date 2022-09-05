import React, { useState } from "react";
// import Data from "./Data";

import axios from "axios";

const Contact = () => {
  const [name, setname] = useState('');

  const [email, setemail] = useState('');

  const [feedback, setfeedback] = useState('');

  const [data, setdata] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const eventHandler = (event) => {
    const { name, value } = event.target;
    setdata((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // alert(`name:${data.name} ,email:${data.email} ,msg:${data.msg}`);

    const data = {
      name,
      email,
      feedback,
    };
console.log(data);
axios.post("http://localhost:5000/user",data) ;



    alert(`name:${name} ,email:${email} `);
    setname("");
    setemail("");
    setfeedback("");
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center md-5 py-4">
            <h1>Contact</h1>
            <hr />
          </div>
        </div>
        <div className="cotainer">
          <div className="row d-flex justify-content-center py-4">
            <div className="col-md-8">
              <form onSubmit={submitHandler}>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    full name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="name"
                    onChange={(e) => setname(e.target.value)}
                    value={name}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="email"
                    onChange={(e) => setemail(e.target.value)}
                    value={email}
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>

                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Feedback
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="msg"
                    onChange={(e) => setfeedback(e.target.value)}
                    value={feedback}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
