import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BackTop, Dropdown, Space } from "antd";
import "./index.scss";
import { useEffect } from "react";
const Header = () => {
  const [visible, setVisible] = useState(false);
  const [header, setHeader] = useState(false);
  const blog = [
    {
      label: <Link>Blog</Link>,
      key: "0",
    },
    {
      label: <Link>Blog Details</Link>,
      key: "1",
    },
    {
      label: <Link>Element</Link>,
      key: "2",
    },
    {
      type: "divider",
    },
  ];
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 420) {
        setVisible(true);
        setHeader(true);
      } else {
        setVisible(false);
        setHeader(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={header ? "header2" : "header"}>
      <div className="headerLeft">
        <Link to="/">
          <i className="fa-sharp fa-solid fa-book-open fa-2x"></i>
          <h2>Courses</h2>
        </Link>
      </div>
      <div className="headerRight">
        <nav>
          <Link to="/">Home</Link>
          <Link>Courses</Link>
          <Link>About</Link>

          <Dropdown
            menu={{
              items: blog,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>Blog</Space>
            </a>
          </Dropdown>
          <Link>Contact</Link>
          <Link to="/add-course">Add Course</Link>
        </nav>
        <div className="buttonSide">
          <button className="join">Join</button>
          <button className="logIn">Log In</button>
        </div>
        <div
          className={visible ? "backToTop" : "backToTopnone"}
          onClick={() => scrollToTop()}
        >
          <i className="fa-sharp fa-solid fa-arrow-turn-up"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
