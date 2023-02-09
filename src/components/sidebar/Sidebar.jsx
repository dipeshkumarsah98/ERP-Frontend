import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { AiFillCaretDown } from "react-icons/ai";

const Sidebar = () => {
  const [active, setActive] = useState("home");

  const handleClick = (item) => {
    setActive(item);
  };

  return (
    <div className=" flex-column max-h-full xl:h-screen flex-shrink-0 p-3 text-white bg-blue-700 col-1 col-md-4 col-lg-2 hidden md:flex">
      <a
        href="/"
        className="d-flex justify-center items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <img
          src={Logo}
          height={150}
          width={400}
          alt="ismt-logo"
          className="mb-2"
        />
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mt-2 mb-auto">
        <li className="nav-item">
          <Link
            to={"/"}
            className={
              active === "home"
                ? "nav-link text-white active"
                : "nav-link text-white"
            }
            onClick={() => handleClick("home")}
            aria-current="page"
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <button
            className="btn btn-toggle align-items-center rounded text-white flex gap-1"
            data-bs-toggle="collapse"
            data-bs-target="#dashboard-collapse"
            aria-expanded="true"
          >
            Report
            <AiFillCaretDown />
          </button>
          <div className="collapse" id="dashboard-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ml-7 visible">
              <li>
                <Link
                  to="/"
                  onClick={() => handleClick("blood")}
                  className={
                    active === "blood"
                      ? "nav-link text-white active"
                      : "nav-link text-white"
                  }
                >
                  Blood Report
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={() => handleClick("urin")}
                  className={
                    active === "urin"
                      ? "nav-link text-white active"
                      : "nav-link text-white"
                  }
                >
                  Urin Report
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={() => handleClick("stool")}
                  className={
                    active === "stool"
                      ? "nav-link text-white active"
                      : "nav-link text-white"
                  }
                >
                  Stool Report
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link
            to="/"
            onClick={() => handleClick("heart-report")}
            className={
              active === "heart-report"
                ? "nav-link text-white active"
                : "nav-link text-white"
            }
          >
            Heart Report
          </Link>
        </li>
        <li>
          <Link
            to="/"
            onClick={() => handleClick("diabetes-status")}
            className={
              active === "diabetes-status"
                ? "nav-link text-white active"
                : "nav-link text-white"
            }
          >
            diabetes Status
          </Link>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <Link
          to="/profile"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle mt-2"
          id="dropdownUser1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            className="rounded-circle me-2"
            width="32"
            height="32"
          />
          <strong>Dipesh</strong>
        </Link>
        <ul
          className="dropdown-menu dropdown-menu-dark text-small shadow"
          aria-labelledby="dropdownUser1"
        >
          <li>
            <Link className="dropdown-item" to="/project">
              New project...
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to={"setting"}>
              Settings
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/profile">
              Profile
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <Link className="dropdown-item" to="/logout">
              Sign out
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
