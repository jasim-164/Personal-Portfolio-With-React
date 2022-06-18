import React from 'react';
import Skills from '../Skills/Skills';
import "./About.css"
const About = () => {
    return (
        <div>
        <div className="d-flex align-items-center header-aboutme justify-content-center mt-5 me-5 ">
        <h1 className="text-white "><span className="nav-order">01. </span>About Me</h1>
        <div className="line ms-2"></div>
        </div>

        <div className="d-flex align-items-center justify-justify-content-lg-between mt-5 personal-info">
        <div className=" text-white para-me me-2">
        <p>Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
        <p>Fast-forward to today, and I’ve had the privilege of working atan advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</p>
        </div>
        <div className="img-border"> <div>
        <img src="https://st.depositphotos.com/1224365/2498/i/450/depositphotos_24980235-stock-photo-portrait-of-a-normal-man.jpg" height="300" width="300"alt="profile" className="profile-img "/>
        </div></div>
       
        </div>
        
       

            

        </div>
    );
};

export default About;