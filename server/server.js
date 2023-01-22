const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const { Schema } = mongoose;

const coursesSchema = new Schema({
  type: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  star: { type: String, required: true },
  rating: { type: String, required: true },
  price: { type: Number, required: true },
});
const expertsSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  gender: { type: String, required: true },
});
const Courses = mongoose.model("/courses", coursesSchema);
const Experts = mongoose.model("/experts", expertsSchema);
app.use(cors());
app.use(bodyParser.json());
app.get("/courses", (req, res) => {
  Courses.find({}, (err, docs) => {
    if (!err) {
      res.send(docs);
    }
  });
});
app.get("/courses/:id", (req, res) => {
  let id = req.params.id;
  Courses.findById(id, (err, docs) => {
    if (!err) {
      res.send(docs);
    }
  });
});
app.get("/experts", (req, res) => {
  Experts.find({}, (err, docs) => {
    if (!err) {
      res.send(docs);
    }
  });
});
mongoose.connect(
  "mongodb+srv://Ali:Ali@cluster0.x8qec5j.mongodb.net/database",
  (err) => {
    if (!err) {
      app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
      });
    }
  }
);
