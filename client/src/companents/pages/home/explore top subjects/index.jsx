import React from "react";
import topic1 from "../../../../assets/topic1.png.webp";
import topic2 from "../../../../assets/topic2.png.webp";
import topic3 from "../../../../assets/topic3.png.webp";
import topic4 from "../../../../assets/topic4.png.webp";
import topic5 from "../../../../assets/topic5.png.webp";
import topic6 from "../../../../assets/topic6.png.webp";
import topic7 from "../../../../assets/topic7.png.webp";
import topic8 from "../../../../assets/topic8.png.webp";
import "./index.scss";
const ExploreTopSubject = () => {
  return (
    <div className="explore">
      <h1>Explore top subjects</h1>
      <div className="up">
        <div className="topic">
          <img src={topic1} alt="" />
          <div className="linearGradient"></div>
          <h2>Programming</h2>
        </div>
        <div className="topic">
          <img src={topic2} alt="" />
          <div className="linearGradient"></div>
          <h2>Programming</h2>
        </div>
        <div className="topic">
          <img src={topic3} alt="" />
          <div className="linearGradient"></div>
          <h2>Programming</h2>
        </div>
        <div className="topic">
          <img src={topic4} alt="" />
          <div className="linearGradient"></div>
          <h2>Programming</h2>
        </div>
      </div>
      <div className="down">
        <div className="topic">
          <img src={topic5} alt="" />
          <div className="linearGradient"></div>
          <h2>Programming</h2>
        </div>
        <div className="topic">
          <img src={topic6} alt="" />
          <div className="linearGradient"></div>
          <h2>Programming</h2>
        </div>
        <div className="topic">
          <img src={topic7} alt="" />
          <div className="linearGradient"></div>
          <h2>Programming</h2>
        </div>
        <div className="topic">
          <img src={topic8} alt="" />
          <div className="linearGradient"></div>
          <h2>Programming</h2>
        </div>
      </div>
    </div>
  );
};

export default ExploreTopSubject;
