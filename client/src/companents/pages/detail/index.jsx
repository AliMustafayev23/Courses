import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.scss";
const Detail = () => {
  let { _id } = useParams();
  const [course, setCourse] = useState([]);
  useEffect(() => {
    axios(`http://localhost:8000/courses/${_id}`).then((response) => {
      setCourse(response.data);
    });
  }, []);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  console.log(course);
  return (
    <div className="detail">
      <img src={course.image} alt="" />
      <div className="detailRight">
        <p>{course.type}</p>
        <h1>{course.name}</h1>
        <p>{course.description}</p>
        <img src={course.star} alt="" className="star" />
        <p>Rating:{course.rating} based on 120</p>
        <p>Price:${course.price}</p>
      </div>
    </div>
  );
};

export default Detail;
