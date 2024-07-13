/* eslint-disable no-unused-vars */
import React from 'react';
import RiseLoader from 'react-spinners/RotateLoader';

function Loader() {
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-white text-black p-4">
            {/* <RiseLoader
                // color="hsla(270, 100%, 48%, 1)"
                loading
                margin={25}
                size={16}
                speedMultiplier={0.5}
            /> */}
            <iframe src="https://lottie.host/embed/85a6040a-87e6-4e17-bac5-5b9e45824bd7/9ocgrClXkQ.json" height={"100px"} width={"200px"}></iframe>
            <h1 className="text-black text-lg  md:text-2xl mt-10 text-center mt-10">Processing your Request</h1>
        </div>
    );
}

export default Loader;