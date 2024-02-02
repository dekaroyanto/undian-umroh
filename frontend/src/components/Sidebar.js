import React, { useState } from "react";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
  FaSignOutAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/member",
      name: "Profile",
      icon: <FaUserAlt />,
    },

    {
      path: "/transaction",
      name: "Transaction",
      icon: <FaShoppingBag />,
    },

    {
      path: "/logout",
      name: "Sign Out",
      icon: <FaSignOutAlt />,
    },
  ];
  return (
    <div className="container">
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100%",
          width: isOpen ? "200px" : "50px",
          transition: "width 0.3s ease",
        }}
        className="sidebar"
      >
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Umroh
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeClassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main style={{ marginLeft: isOpen ? "200px" : "50px" }}>{children}</main>
    </div>
  );
};

export default Sidebar;
