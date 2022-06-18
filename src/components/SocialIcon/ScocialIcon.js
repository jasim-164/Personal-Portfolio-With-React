import React from "react";
import {
  fab,
  faTwitterSquare,
  faFacebook,
  faLinkedin,
  faGithub,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import "./SocialIcon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ScocialIcon = () => {
  return (
    <div className="">
      <div className="fixed-social">
        <ul className="social-icons ">
          <li className="text-white mb-4">
            <FontAwesomeIcon icon={faFacebookF} />
          </li>
          <li className="text-white mb-4">
            <FontAwesomeIcon icon={faGithub} />
          </li>
          <li className="text-white mb-4">
            <FontAwesomeIcon icon={faLinkedin} />
          </li>
          <li className="text-white mb-4">
            <FontAwesomeIcon icon={faTwitterSquare} />
          </li>
        </ul>
        
      </div>

      <div>
        <p className="text-center text-white">
          Nostrud amet sint aliqua excepteur Lorem consectetur incididunt nisi
          proident. Minim mollit aliqua dolor elit culpa pariatur enim ipsum
          elit anim. Qui incididunt eu commodo esse eu magna mollit incididunt
          sunt. Anim velit adipisicing irure laborum irure officia. Nulla labore
          irure ad voluptate occaecat nostrud ea consequat velit cupidatat
          laboris quis officia aliquip. Nostrud pariatur esse pariatur voluptate
          amet voluptate nostrud sunt ipsum nostrud. Non elit sit eiusmod
          consectetur exercitation exercitation sint laborum. Duis occaecat do
          esse consectetur consequat. Sint nisi nulla anim quis aliquip anim
          esse et sit. Irure reprehenderit ut aliquip sunt aute aliqua cillum
          ut. Amet nostrud dolor voluptate labore tempor. In occaecat occaecat
          sit do occaecat. Cupidatat commodo occaecat aute tempor cupidatat esse
          minim exercitation. Mollit eu laboris non consectetur est incididunt
          mollit magna tempor deserunt do consequat labore est. Elit id ea
          laborum exercitation labore do fugiat minim cillum nostrud aute ad
          fugiat. Velit eu laboris nisi et aliqua culpa culpa pariatur ex culpa
          ut. Duis commodo ut irure nostrud officia mollit culpa laborum duis
          labore nulla. Mollit eiusmod dolore minim magna est in velit
          consectetur. Et ullamco id cupidatat do ex anim do ea elit occaecat
          ipsum. Nisi deserunt reprehenderit anim laboris excepteur
          reprehenderit duis eiusmod sit veniam eiusmod aliqua commodo nostrud.
          Sunt consequat nisi proident nostrud ea velit veniam do esse id dolor
          aliquip velit. Tempor ipsum incididunt consectetur sunt nulla ex.
          Veniam anim adipisicing officia aliqua qui tempor commodo consequat
          magna dolore ad magna esse cupidatat. Culpa sunt tempor ut id ullamco
          ea. Nostrud nulla excepteur cillum qui qui amet duis Lorem ea irure
          fugiat occaecat nostrud. Do velit eiusmod ut ad sint. Nostrud laboris
          qui proident aliqua dolor sunt qui non eu mollit duis duis.
        </p>
      </div>
    </div>
  );
};

export default ScocialIcon;
