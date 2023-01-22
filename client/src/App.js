import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./companents/layout/footer";
import Header from "./companents/layout/header";
import Detail from "./companents/pages/detail";
import Home from "./companents/pages/home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:_id" element={<Detail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
