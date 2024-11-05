import React from "react";
import "../App.css";

const Email = () => {
  return (
    <div className="bg-white w-full max-w-md flex flex-col justify-center items-center mx-auto mt-8 p-4 sm:p-8 md:mt-[6rem] md:p-10 max-sm:mt-[9rem]">
      <div className="flex flex-col justify-center items-start w-full">
        <h1 className="text-2xl sm:text-3xl font-bold p-2 pt-5">Forgot your password?</h1>
        <p className="text-sm sm:text-md p-2">
          Please enter the email you use to reset your password
        </p>

        <div className="flex flex-col justify-center items-start p-2 w-full">
          <label htmlFor="email" className="pt-3">
            Your work email
          </label>
          <input
            type="email"
            className="border-2 p-2 w-full h-10 mt-1 rounded"
            placeholder="Enter your email"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center pt-7 w-full">
        <button className="bg-blue-700 w-full text-white p-2 rounded hover:bg-blue-600">
          Request Password Reset
        </button>
        <a href="#" className="pb-5 pt-1.5 text-blue-600 font-semibold ">
          Back to Sign in
        </a>
      </div>
    </div>
  );
};

export default Email;
