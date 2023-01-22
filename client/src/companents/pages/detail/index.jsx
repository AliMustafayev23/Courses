import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./index.scss";
const Detail = () => {
  let { _id } = useParams();
  const [course, setCourse] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios(`http://localhost:8000/courses/${_id}`).then((response) => {
      setCourse(response.data);
    });
  }, []);
  const delet = () => {
    axios.delete(`http://localhost:8000/courses/${_id}`);
    navigate("/");
  };
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
        <button className="delet" onClick={() => delet()}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Detail;
