/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

const HomePage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="bg-primary py-4 text-primary-foreground">
        <div className="container mx-auto px-4">
        </div>
      </header>
      <main className="flex-1 container mx-auto px-4 py-8 flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="mb-4 text-4xl font-bold">Welcome to TaskDone</h2>
            <p className="text-muted-foreground mb-4">
              Organize your tasks and stay on top of your to-do list with our easy-to-use todo app. With TaskDone, you can easily create and manage your tasks, set deadlines, and track your progress. Whether you're a busy professional or a student looking to stay organized, TaskDone has got you covered. Our app is designed to be intuitive and user-friendly, making it simple to get started and use on a daily basis. 
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Link
                to="/signup"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white w-40"
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white w-40"
              >
                Login
              </Link>
            </div>
          </div>
          <div className="w-full flex justify-center items-center md:mt-0 mt-8">
            <iframe 
              src="https://lottie.host/embed/23cd343f-45d0-4149-8133-14de881df0b5/sYWRvSos73.json" 
              height="400px" 
              width="400px"
              className="md:h-[600px] md:w-[600px] h-[400px] w-[400px]"
            ></iframe>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
