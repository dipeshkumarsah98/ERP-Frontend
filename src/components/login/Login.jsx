import React, { useState } from "react";
import Particle from "../particle/Particle";
import Logo from "../../assets/logo-ismt.png";
import Input from "../common/Input";

const Login = () => {
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const name = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, password);
  };

  return (
    <>
      <Particle />
      <div className="absolute z-50 top-1/4 left-[10%] md:left-[20%] 2xl:top-[18%] 2xl:left-[37.5%] lg:left-1/3 translate-1/2">
        <form
          onSubmit={(e) => onSubmit(e)}
          className="bg-[#f6f8fa] h-[55vh] w-[80vw] px-5 md:h-[50vh] md:w-[60vw] 2xl:h-[55vh] 2xl:w-[25vw] lg:w-[30vw] flex flex-col md:px-16 space-y-4 rounded-md shadow-lg py-10"
        >
          <img
            src={Logo}
            alt="ismt-logo"
            width="200px"
            className="mx-auto mb-5 w-32 md:w-40 xl:w-52"
          />
          <Input
            placeholder="Enter your email address.."
            name="email"
            type="email"
          />
          <Input placeholder="password" name="password" type="password" />
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
