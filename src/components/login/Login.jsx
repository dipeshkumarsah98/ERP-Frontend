import React, { useState } from "react";
import Particle from "../particle/Particle";
import Logo from "../../assets/logo.png";
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
      <div className="absolute top-1/4 2xl:top-[18%] lg:left-1/4 translate-1/2">
        <form
          onSubmit={(e) => onSubmit(e)}
          className="bg-white h-[40vh] lg:h-[60vh] 2xl:h-[70vh] w-screen lg:w-[50vw] flex flex-col items-center justify-center space-y-4 rounded-md shadow-lg"
        >
          <img src={Logo} alt="ismt-logo" width="300px" />
          {/* to show invalid password */}
          {error && (
            <p className="text-rose-500">Invalid username or password</p>
          )}
          <Input label="Email" name="email" type="email" />
          <Input label="Password" name="password" type="password" />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-sm hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
