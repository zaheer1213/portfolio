import React from 'react'
import { NavLink } from 'react-router-dom'
import img1 from "../../src/imges/img1.jpeg"
import About from './About'
import Contact from './Contact'
// import Footer from './Footer'
import Service from './Services'

const Home = () => {
  return (
    <>
    <section className="container my-5 py-5">
<div className="row">
    <div className="col-md-5 mt-5 mb-4">
        <h1 className="display-5 mb-4">I'm Web Delevoper <br /></h1>
        <p className="lead">I value simple content structure, clean design patterns, and thoughtful interactions. I like to code things from scratch, and enjoy bringing ideas to life in the browser</p>
    <NavLink className='btn btn-outline-primary me-4' to="/contact">Get Start</NavLink>
    <NavLink className='btn btn-outline-primary' to="/about">More About Me</NavLink>


    </div>

    <div className="col-md-7 d-flex justify-content-center align-items-center">
        <img src={img1} alt="zaheer" height="300px" width='300px' />
    </div>
</div>

    </section>
<About/>
<Service/>
<Contact/>


    </>


  )
}

export default Home