import React from "react";
import "./index.scss";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});
const AddCourse = () => {
  return (
    <div className="addCourse">
      <h1>Add Course</h1>
      <Formik
        initialValues={{
          type: "",
          name: "",
          description: "",
          rating: "",
          image: "",
          price: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          axios.post("http://localhost:8000/courses", {
            type: values.type,
            name: values.name,
            description: values.description,
            rating: values.rating,
            image: values.image,
            price: values.price,
            star: "https://est4toest.ru/images/dishes/rating/star_5.png",
          });
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="up">
              <div className="left">
                <h4>Type:</h4>
                <Field name="type" />
                {errors.type && touched.type ? <div>{errors.type}</div> : null}
                <h4>Name:</h4>
                <Field name="name" />
                {errors.name && touched.name ? <div>{errors.name}</div> : null}
                <h4>Image:</h4>
                <Field name="image" />
                {errors.image && touched.image ? (
                  <div>{errors.image}</div>
                ) : null}
              </div>
              <div className="right">
                <h4>Description:</h4>
                <Field name="description" />
                {errors.description && touched.description ? (
                  <div>{errors.description}</div>
                ) : null}
                <h4>Rating:</h4>
                <Field name="rating" />
                {errors.rating && touched.rating ? (
                  <div>{errors.rating}</div>
                ) : null}
                <h4>Price:</h4>
                <Field name="price" />
                {errors.price && touched.price ? (
                  <div>{errors.price}</div>
                ) : null}
              </div>
            </div>
            <button type="submit" className="add">
              Add
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddCourse;
