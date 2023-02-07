import React, { useState, useContext } from "react";
import Particle from "../particle/Particle";
import Logo from "../../assets/logo-ismt.png";
import Input from "../common/Input";
import { useSnackbar } from "notistack";
import axios from "axios";
import { UserContext } from "../../store/Context/UserContext";

const Login = () => {
  const { userData, setUserData, userLoading, setUserLoading } =
    useContext(UserContext);
  const [error, setError] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const initialState = {
    email: "",
    password: "",
  };

  const [loginData, setLoginData] = useState(initialState);
  console.log(loginData);

  const handleChange = (e) => {
    e.preventDefault();
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  console.log("user data are : ", userData);

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (loginData.email === "" || loginData.password === " ") {
      enqueueSnackbar("Empty Field Detected", { variant: "error" });
    } else {
      axios({
        method: "POST",
        url: "http://localhost:5000/api/v1/studentslogin/login",
        data: {
          email: loginData.email,
          password: loginData.password,
        },
      })
        .then((res) => {
          console.log("response data are : ", res.data.name);
          enqueueSnackbar(
            `Welcome to Dashboard , ${res?.data?.student?.name}`,
            {
              variant: "success",
            }
          );
          setUserData(res.data)
          setLoading(false);
        })
        .catch((err) => {
          enqueueSnackbar(err?.response?.data?.msg, { variant: "error" });
          setLoading(false);
        });
    }
  };

  return (
    <>
      <Particle />
      <div className="absolute z-50 top-1/4 left-[10%] md:left-[20%] 2xl:top-[18%] 2xl:left-[37.5%] lg:left-1/3 translate-1/2">
        <form
          onSubmit={(e) => onSubmit(e)}
          className="bg-[#f6f8fa] h-[55vh] w-[80vw] px-5 md:h-[50vh] md:w-[60vw] 2xl:h-[65vh] 2xl:w-[25vw] lg:w-[30vw] flex flex-col md:px-16 space-y-4 rounded-md shadow-lg py-10"
        >
          <img
            src={Logo}
            alt="ismt-logo"
            width="200px"
            className="mx-auto mb-5 w-32 md:w-40 xl:w-48"
          />
          <input
            placeholder="Enter your email address.."
            name="email"
            type="email"
            value={loginData.email}
            onChange={(e) => handleChange(e)}
          />
          <input
            placeholder="password here"
            name="password"
            type="password"
            value={loginData.password}
            onChange={(e) => handleChange(e)}
          />
          <button
            type="submit"
            className="bg-[#ED741A] text-white px-4 py-2 rounded-sm hover:bg-[#ED741A]/75"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
