import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { AiFillCaretDown, AiFillHome } from "react-icons/ai";
import { GoBook } from "react-icons/go";
import { BsFileBarGraph } from "react-icons/bs";
import { HiAcademicCap } from "react-icons/hi";
import { MdOutlineLibraryBooks, MdAccountBalance } from "react-icons/md";

const Sidebar = () => {
  const [active, setActive] = useState("home");

  const handleClick = (item) => {
    setActive(item);
  };

  return (
    <div className=" flex-column max-h-full xl:h-screen font-roboto flex-shrink-0 p-3 text-white bg-blue-700 col-1 col-md-4 col-lg-2 hidden md:flex">
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
                ? "nav-link text-white active flex items-center  gap-2 text-xl"
                : "nav-link text-white flex items-center  gap-2 text-xl"
            }
            onClick={() => handleClick("home")}
            aria-current="page"
          >
            <AiFillHome />
            Home
          </Link>
        </li>
        <li className="nav-item">
          <button
            className="btn btn-toggle align-items-center rounded text-white flex gap-2 text-xl"
            data-bs-toggle="collapse"
            data-bs-target="#dashboard-collapse"
            aria-expanded="true"
          >
            <HiAcademicCap />
            Assignment
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
                      ? "nav-link text-white active text-lg"
                      : "nav-link text-white text-lg"
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
                      ? "nav-link text-white active text-lg"
                      : "nav-link text-white text-lg"
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
                      ? "nav-link text-white active text-lg"
                      : "nav-link text-white text-lg"
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
                ? "nav-link text-white active flex items-center  gap-2 text-xl"
                : "nav-link text-white flex items-center  gap-2 text-xl"
            }
          >
            <GoBook />
            Library
          </Link>
        </li>
        <li>
          <Link
            to="/"
            onClick={() => handleClick("diabetes-status")}
            className={
              active === "diabetes-status"
                ? "nav-link text-white active flex items-center  gap-2 text-xl"
                : "nav-link text-white flex items-center  gap-2 text-xl"
            }
          >
            <MdOutlineLibraryBooks />
            Courses
          </Link>
        </li>
        <li>
          <Link
            to="/"
            onClick={() => handleClick("diabetes-status")}
            className={
              active === "diabetes-status"
                ? "nav-link text-white active flex items-center  gap-2 text-xl"
                : "nav-link text-white flex items-center  gap-2 text-xl"
            }
          >
            <BsFileBarGraph />
            Result
          </Link>
        </li>
        <li>
          <Link
            to="/"
            onClick={() => handleClick("diabetes-status")}
            className={
              active === "diabetes-status"
                ? "nav-link text-white active flex items-center  gap-2 text-xl"
                : "nav-link text-white flex items-center  gap-2 text-xl"
            }
          >
            <MdAccountBalance />
            Account
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
