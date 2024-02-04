/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import gsap from "gsap";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  useEffect(() => {
    gsap.fromTo(".login", {
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
    <div className=" flex w-4/5 justify-around m-auto mt-16 mb-16">
      <div className="login mb-28 md:w-1/2 ">
        <h1 className="text-2xl font-semibold">Login</h1>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Enter your Email"
        ></input>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Enter your Password"
        ></input>
        <div>
          <button
            // onClick={() => {
            //   login();
            // }}
            className="w-1/2 bg-blue-500 h-10 rounded-md text-white text-center text-xl "
          >
            Login
          </button>
        </div>
        <div>OR</div>
        <Link to="/register">
          <button className="w-1/2 bg-blue-500 h-10 rounded-md text-white  text-xl ">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};
