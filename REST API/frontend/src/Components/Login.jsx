/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import Loader from "./Loader";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, showLoader] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    showLoader(true);
    try {
      const response = await axios.post('https://recipebook-loih.onrender.com/api/v1/user/login', {
        email,
        password
      })
      console.log(response);
      navigate("/upload", { state: response.data });
    }
    catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
    finally {
      showLoader(false);
    }
  };

  return (
    <>
      {loader ? (<Loader />) : (<div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white text-black">
        <div className="w-full md:w-1/2 space-y-4 px-4 md:px-8">
          <div className="text-center w-full">
            <br />
            <h1 className="text-3xl font-bold">Welcome Back!</h1>
            <p className="md:text-xl text-sm text-center mt-4">
              Connect your mind | Increase Productivity | Boost Your Creativity!
            </p>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm text-white mx-auto">
            <form className="p-6 space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label
                  className="text-sm text-black font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="flex h-10 w-full text-black rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm font-medium text-black leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="flex h-10 w-full text-black rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="password"
                  placeholder="Enter your password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex items-center">
                <button
                  className="bg-black text-white w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 hover:bg-gray-900 hover:text-white"
                  type="submit"
                >
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
          <iframe src="https://lottie.host/embed/840afae1-5e79-4eca-b7ff-3a4e1119a37e/CuX2Wi3p5C.json" height={"400px"} width={"400px"} className="md:h-[400px] md:w-[400px] h-[300px] w-[300px]"></iframe>
        </div>
      </div>
      )}
    </>
  );
};

export default Login;