import React from 'react';
import './Intro.css'
import Typical from "react-typical";
import { Button } from "react-bootstrap";
const Intro = () => {
    return (
        <div className="mt-5 container">
            <h2 className="name-text">Hi, My name is </h2>
            <p className="">Jasim Uddin</p>
            <h3 class="big-heading">I build things for the web.</h3>
            <p className="para-me"> I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at<a href="https://upstatement.com/" target="_blank" rel="noreferrer">Upstatement</a>.</p>
            
            <div>
            <Button variant="outline-info" className='check-button'>Check Out My Works!</Button>
            </div>
            
            <Typical
            steps={["Jasim",500,"Uddin",500]}
            loop={Infinity}
            wrapper="p"
          />
          
          
        </div>
    );
};

export default Intro;
