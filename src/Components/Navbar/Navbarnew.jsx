/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

export const Navbarnew = () => {
  const userId = "127282";
  const userName = null;
  const adminName = null;

useEffect(()=>{
  gsap.fromTo(".navbar .link",{
    opacity: 0,
    y: "-50px",
  }, {
    opacity: 1,
    y: "0px",
    stagger: 0.4,
    duration: 0.5,
  })
},[])
  return (
    <div className="navbar h-24 m-auto flex items-center text-center justify-between bg-slate-50 px-4 md:px-8 ">
      <Link className="link" to="/">
        <h1 className="text-2xl md:text-4xl ">Quizee</h1>
      </Link>

      <div className="flex text-center justify-center item-center">
        {" "}
        <div className="flex align-center justify-center">
          <div className="pt-2">
            {userName !== null || adminName !== null ? (
              <div className="link flex ">
                {userName}
              </div>
            ) : (
              <Link to="/login" className="link bg-blue-600 px-5 py-2 text-sm  md:text-xl text-white">
                SIGN IN
              </Link>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
