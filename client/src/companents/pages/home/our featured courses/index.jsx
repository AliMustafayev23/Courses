import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "better-react-carousel";

import "./index.scss";
import { Link } from "react-router-dom";
const OurFeaturedCourses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios("http://localhost:8000/courses").then((response) => {
      setCourses(response.data);
    });
  }, []);
  console.log(courses);
  return (
    <div className="ourFeaturedCourse">
      <h1>Our Featured Courses</h1>
      <Carousel cols={3} rows={1} gap={10} loop>
        {courses.map((e) => {
          return (
            <Carousel.Item>
              <Link to={e._id} className="courseCard">
                <img src={e.image} alt="" />
                <p>{e.type}</p>
                <h2>{e.name}</h2>
                <p>{e.description}</p>
                <img src={e.star} alt="" className="star" />
                <div>
                  <p>{e.rating} based on 120</p>
                  <p>${e.price}</p>
                </div>
                <button className="findOutMore">Find Out More</button>
              </Link>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default OurFeaturedCourses;
