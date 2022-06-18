import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Skills.css"
const Skills = () => {
  return (
    <div>
      <ul class="skills-list text-white mb-5">
        <li>JavaScript (ES6+)</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>Eleventy</li>
        <li>Node.js</li>
        <li>WordPress</li>
        <FontAwesomeIcon icon={faFacebookF} />
        <FontAwesomeIcon icon="fa-solid fa-check-square" />

        
      </ul>
    </div>
  );
};

export default Skills;
