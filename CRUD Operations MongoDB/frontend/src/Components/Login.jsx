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
        try{
            const response = await axios.post('http://localhost:4000/api/v1/user/login',{
                email,
                password
            })
            console.log(response);
            navigate("/todo",{state:response.data.user});
        }
        catch(error){
            console.log(error);
            alert(error.response.data.message);
        }
        finally{
            showLoader(false);
        }
    };

    return (
    <>
    {loader?(<Loader/>):(<div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white">
        <div className="w-full space-y-4 px-4 ">
            <div className="text-center W-full">
                <h1 className="text-3xl font-bold">Welcome Back!</h1>
                <p className="text-muted-foreground">
                    <p className="md:text-xl text-sm text-center mt-4">
                        Connect your mind | Increase Productivity | Boost Your Creativity!
                    </p>
                </p>
            </div>
            <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm text-white md:w-1/2 mx-auto"
                data-v0-t="card"
            >
                <form className="p-6 space-y-4" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            className="flex h-10 w-full  text-black  rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="email"
                            placeholder="Enter your email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="space-y-2">
                        <label
                            className="text-sm font-medium  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            className="flex h-10 w-full text-black  rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="password"
                            placeholder="Enter your password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center ">
                        <button
                            className="bg-white text-black w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full hover:bg-gray-300 hover:text-black"
                            type="submit"
                        >
                            Log In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>)}
    </>
    );
};

export default Login;
