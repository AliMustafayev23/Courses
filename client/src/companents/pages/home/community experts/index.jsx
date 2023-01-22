import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "better-react-carousel";
import "./index.scss";
const CommunityExperts = () => {
  const [experts, setExperts] = useState([]);
  useEffect(() => {
    axios("http://localhost:8000/experts").then((response) => {
      setExperts(response.data);
    });
  }, []);
  console.log(experts);
  return (
    <div className="communityExperts">
      <h1>Community Experts</h1>
      {/* <div className="normalExprets">
        {experts.map((e) => {
          return (
            <div>
              <div className="exspertCard">
                <img src={e.image} alt="" />
                <h2>
                  {e.gender}.{e.name}
                </h2>
                <p>{e.description}</p>
              </div>
            </div>
          );
        })}
      </div> */}
      <div className="carousel">
        <Carousel cols={4} rows={1} gap={100} loop>
          {experts.map((e) => {
            return (
              <Carousel.Item>
                <div className="exspertCard">
                  <img src={e.image} alt="" />
                  <h3>
                    {e.gender}.{e.name}
                  </h3>
                  <p>{e.description}</p>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default CommunityExperts;
