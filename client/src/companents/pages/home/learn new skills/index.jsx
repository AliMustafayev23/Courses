import React from "react";
import "./index.scss";
const LearnNewSkills = () => {
  return (
    <div className="learnNewSkills">
      <div className="learnNewSkillsLeft">
        <div className="arrow">
          <img
            src="https://preview.colorlib.com/theme/courses/assets/img/icon/about.svg"
            alt=""
          />
        </div>
        <h1>
          Learn new skills online with
          <br />
          top educators
        </h1>
        <p>
          The automated process all your website tasks. Discover tools and
          techniques
          <br />
          to engage effectively with vulnerable children and young people.
        </p>
        <p>
          <img src="https://preview.colorlib.com/theme/courses/assets/img/icon/right-icon.svg" />
          Techniques to engage effectively with vulnerable children and young
          people.
        </p>
        <p>
          <img src="https://preview.colorlib.com/theme/courses/assets/img/icon/right-icon.svg" />
          Join millions of people from around the world learning together.
        </p>
        <p>
          <img src="https://preview.colorlib.com/theme/courses/assets/img/icon/right-icon.svg" />
          Join millions of people from around the world learning together.
          Online <br />
          learning is as easy and natural.
        </p>
      </div>
      <div className="learnNewSkillsRight">
        <a
          className="play"
          href="https://www.youtube.com/watch?v=up68UAfH0d0"
          target="_blank"
        >
          <i className="fa-solid fa-play fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default LearnNewSkills;
