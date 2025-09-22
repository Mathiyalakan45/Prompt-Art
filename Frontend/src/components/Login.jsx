import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Appcontext } from "../context/AppContext";

const Login = () => {
  const [state, setState] = useState("Login");
  const {setShowLogin} = useContext(Appcontext)
  

  useEffect(()=>{
       document.body.style.overflow ='hidden'

       return()=>{
        document.body.style.overflow ='unset'
       }
  },[])

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <form className="relative bg-white p-10 rounded-xl text-slate-500 w-96 shadow-lg">
        <h1 className="text-center text-2xl text-neutral-700 font-medium">
          {state}
        </h1>
        <p className="text-sm text-center mt-1">
          {state === "Login"
            ? "Welcome back! Please sign in to continue."
            : "Create a new account to get started."}
        </p>

        {state !== "Login" && (
          <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
            <img src={assets.profile_icon} alt="Profile" className="h-5" />
            <input
              type="text"
              placeholder="Full Name"
              required
              className="outline-none text-sm flex-1"
            />
          </div>
        )}

        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          <img src={assets.email_icon} alt="Email" className="h-5" />
          <input
            type="email"
            placeholder="Email"
            required
            className="outline-none text-sm flex-1"
          />
        </div>

        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          <img src={assets.lock_icon} alt="Password" className="h-5" />
          <input
            type="password"
            placeholder="Password"
            required
            className="outline-none text-sm flex-1"
          />
        </div>

        {state === "Login" && (
          <p className="text-sm text-blue-600 my-4 cursor-pointer">
            Forgot password?
          </p>
        )}

        <button
          type="submit"
          className="bg-blue-600 w-full text-white py-2 rounded-full hover:bg-blue-700 transition mt-5"
        >
          {state === "Login" ? "Login" : "Create Account"}
        </button>

        {state === "Login" ? (
          <p className="mt-5 text-center">
            Don’t have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setState("Sign Up")}
            >
              Sign up
            </span>
          </p>
        ) : (
          <p className="mt-5 text-center">
            Already have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setState("Login")}
            >
              Login
            </span>
          </p>
        )}

        <img
          onClick={()=>setShowLogin(false)}
          src={assets.cross_icon}
          alt="Close"
          className="absolute top-5 right-5 cursor-pointer w-5 h-5"
        />
      </form>
    </div>
  );
};

export default Login;
