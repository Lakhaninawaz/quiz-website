/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import gsap from "gsap";

export const Home = () => {
const userId = false;

useEffect(()=>{
  gsap.fromTo(".home",{
    opacity:0,
    y:-50,
  },
  {
    opacity:1, 
    y:0,
    duration:1,
  })
})

  return (
    <div className="home h-96 mt-10 mb-10 flex items-center justify-center flex-col">
      <div className="pt-10 justify-self-center">
        <h1 className="font-bold text-3xl md:text-5xl text-center mb-10">Let's Start Quiz Now</h1>
      </div>
      <div className="text-center">
          <NavLink to={!userId ? "/quiz" : "/register"}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Start Now</button>
          </NavLink>        
      </div>
    </div>
  );
};
