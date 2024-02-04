/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import gsap from "gsap";

export const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  useEffect(() => {
    gsap.fromTo(".register", {
      opacity: 0,
      y: -50,
    },{
      duration: 1,
      ease:"power2.inOut",
      opacity: 1,
      y: 0,
    })
  })


  return (
    <div className="flex w-4/5 registermain justify-center m-auto mt-10">
      <div className="register md:w-1/2 h-96">
        <p className="text-2xl font-semibold">Register</p>
        <input
          type="text"
          name="name"
          value={user.name}
          placeholder="Your Name"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="email"
          value={user.email}
          placeholder="Your Email"
          onChange={handleChange}
        ></input>
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="Your Password"
          onChange={handleChange}
        ></input>
        <input
          type="password"
          name="reEnterPassword"
          value={user.reEnterPassword}
          placeholder="Re-enter Password"
          onChange={handleChange}
        ></input>
        <button
          className="w-1/2 clicabledivRegsiter bg-blue-500 h-10 rounded-md text-white  text-xl "
          // onClick={register}
        >
          Register
        </button>
        <div>OR</div>
        <Link className="text-center" to="/login">
          <button className="text-center clicablediv w-1/2 bg-blue-500 h-10 rounded-md text-white  text-xl ">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};
