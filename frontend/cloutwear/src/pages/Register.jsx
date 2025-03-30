import React from "react";
import { useState } from "react";
import {useDispatch} from "react-redux"
import { Link } from "react-router-dom";
import register from "../assets/register.webp";
import {registerUser} from "../redux/slices/authSlice"


const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  

  const handleSubmit = (e) => {
    e.preventDefault();
   dispatch(registerUser({name,email,password}))
  };

  return (
    <div className="flex ">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
        <form
          onSubmit={handleSubmit}
          action=""
          className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm"
        >
          <div className="flex justify-center mb-6">
            <h2 className="text-4xl font-medium">Cloutwear</h2>
          </div>
          <h2 className="text-xl font-bold text-center mb-6">Hey there! 👋</h2>
          <p className="text-center mb-6">Enter your username and password</p>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Name</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border  rounded "
              value={name}
              placeholder="Enter your name"
            ></input>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border  rounded "
              value={email}
              placeholder="Enter your email address"
            ></input>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border  rounded "
              value={password}
              placeholder="Enter your Password"
            ></input>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-500 transition"
          >
            Sign up
          </button>
          <p className="text-center text-sm text-gray-500 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 font-semibold">
              Login
            </Link>
          </p>
        </form>
      </div>
      <div className="hidden md:block w-1/2 bg-gray-800">
        <div className="w-full flex flex-col justify-center items-center">
          <img
            src={register}
            alt="login to account"
            className=" h-[750px] w-full object-cover"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Register;
