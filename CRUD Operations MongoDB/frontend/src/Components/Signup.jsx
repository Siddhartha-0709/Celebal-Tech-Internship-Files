/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Loader from "./Loader";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loader, showLoader] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Password:", password);
        showLoader(true);
        try {
            const response = await axios.post('https://lobster-app-lh22k.ondigitalocean.app/api/todo/v1/user/create', {
                name,
                email,
                password
            })
            console.log(response);
            navigate("/login");
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
            {loader ? (<Loader />) : (<div className="bg-white text-black w-full flex flex-col md:flex-row items-center justify-center min-h-screen">
                <div className="w-full md:w-1/2 space-y-4 px-4">
                    <div className="text-center w-full">
                        <br />
                        <h1 className="text-3xl font-bold">Get Started</h1>
                        <p className="md:text-xl text-sm text-center mt-2">
                            Organize your thoughts | Increase productivity | Boost creativity!
                        </p>
                    </div>
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm text-black mx-auto">
                        <form className="p-6 space-y-4" onSubmit={handleSubmit}>
                            <div className="space-y-2">
                                <label
                                    className="text-black text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    htmlFor="name"
                                >
                                    Name
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    id="name"
                                    placeholder="Enter your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <label
                                    className="text-black text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    id="email"
                                    placeholder="Enter your email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <label
                                    className="text-black text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    id="password"
                                    placeholder="Enter a password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="flex items-center">
                                <button
                                    className="bg-black text-white inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                                    type="submit"
                                >
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
                    <iframe src="https://lottie.host/embed/d071e34c-c1de-44e7-9262-db8d91ee80f1/NYMh1zGieO.json" height={"400px"} width={"400px"} className="md:h-[400px] md:w-[400px] h-[300px] w-[300px]"></iframe>
                </div>
            </div>
            )}
        </>
    );
};

export default SignUp;
