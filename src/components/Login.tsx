import React, { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/e49aba81-ee7c-4f19-baef-7c54bbab003e/web/IN-en-20260202-TRIFECTA-perspective_04f5de39-b518-493c-9a8d-6aef11af0457_large.jpg"
          alt="Logo"
        />
      </div>
      <form className="absolute bg-black w-1/3 my-36 mx-auto right-0 left-0 text-white p-12 bg-opacity-80">
        <h1 className="font-bold text-3xl py-7 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          type="text"
          placeholder="Email-Address"
          className="py-4 my-2 w-full px-2 bg-stone-800"
        />
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full px-2 bg-stone-800"
          />
        )}
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full px-2 bg-stone-800"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg  ">
          Sign In
        </button>
        <p className="py-6 cursor-pointer" onClick={toggleSignUpForm}>
          new to Netflix? Sign Up Now
        </p>
      </form>
    </div>
  );
};

export default Login;
