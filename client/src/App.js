import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./companents/layout/footer";
import Header from "./companents/layout/header";
import AddCourse from "./companents/pages/add course";
import Detail from "./companents/pages/detail";
import Home from "./companents/pages/home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:_id" element={<Detail />} />
        <Route path="/add-course" element={<AddCourse />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
