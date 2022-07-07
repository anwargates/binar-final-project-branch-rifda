import React from "react";
import "./NavbarNoSearch.css";
import { IoArrowBackOutline } from "react-icons/io5";

const NavbarNoSearch = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-white shadow-sm d-block">
        <div className="container d-flex">
          <a className="logo__" href="/">
            <img src="/Img/logo.svg" alt="" className="" />
          </a>
          <a href="/" className="back__button">
            <IoArrowBackOutline />
          </a>
          <span href="/" className="navbar-text mx-auto">
            Info Profil
          </span>
        </div>
      </nav>
    </>
  );
};

export default NavbarNoSearch;
