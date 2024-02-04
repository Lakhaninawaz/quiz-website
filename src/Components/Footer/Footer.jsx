import gsap from "gsap";
import { useEffect } from "react";

export const Footer = () => {

  useEffect(()=>{
    gsap.fromTo(".footer p", 
  {
    opacity: 0,
    y: "-50px",
  }, 
  {
    opacity: 1,
    y: "0px",
    duration: 0.5,
  });
  })

  return (
    <div className="footer absolute h-15 left-0  bottom-0 w-full bg-slate-400 tracking-widest">
      
      <p className="text-white text-center mt-4 pb-4">
        ©️Quizeee |  Made with love by Nawaz
      </p>
    </div>
  );
};
