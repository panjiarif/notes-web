import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils";

const Navbar = () => {
  const navigate = useNavigate();
  const Logout = async () => {
    try {
      await axios.delete(`${BASE_URL}/logout`);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="navbar-menu m-3">
      <div className="navbar-start">
        <div className="title mt-3 mx-3">
          Cloud Notes
        </div>
        <a href="/dashboard" className="navbar-item">
          Home
        </a>
        <a href="/dashboard" className="navbar-item">
          About
        </a>
        <a href="/dashboard" className="navbar-item">
          Contact
        </a>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <button onClick={Logout} className="button is-light">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
