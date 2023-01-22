import React from "react";

import "./index.scss";
const OnlineLearningPlatform = () => {
  return (
    <div className="onlineLearning">
      <div className="onlineLearningLeft">
        <h1 className="onlineLearningH1">
          Online Learning
          <br />
          Platform
        </h1>
        <p className="onlineLearningText">
          Build skills with courses,certificates,and degrees online from world-
          <br />
          class universities and companies
        </p>
        <button className="joinForFree">Join For Free</button>
        <div className="cardSide">
          <div className="card">
            <img
              src="https://preview.colorlib.com/theme/courses/assets/img/icon/icon1.svg"
              alt=""
            />
            <div className="cardLeft">
              <h3>60+ UX courses</h3>
              <p>The automated process all your website tasks.</p>
            </div>
          </div>
          <div className="card">
            <img
              src="https://preview.colorlib.com/theme/courses/assets/img/icon/icon2.svg"
              alt=""
            />
            <div className="cardLeft">
              <h3>60+ UX courses</h3>
              <p>The automated process all your website tasks.</p>
            </div>
          </div>
          <div className="card">
            <img
              src="https://preview.colorlib.com/theme/courses/assets/img/icon/icon3.svg"
              alt=""
            />
            <div className="cardLeft">
              <h3>60+ UX courses</h3>
              <p>The automated process all your website tasks.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineLearningPlatform;
