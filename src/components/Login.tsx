import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const name = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    //validate the form first
    const message = checkValidData(
      email.current!.value,
      password.current!.value,
      name.current!.value
    );
    setErrorMessage(message);
  };

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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black w-1/3 my-36 mx-auto right-0 left-0 text-white p-12 bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-7 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          ref={email}
          type="text"
          placeholder="Email-Address"
          className="py-4 my-2 w-full px-2 bg-stone-800"
        />
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full px-2 bg-stone-800"
          />
        )}
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full px-2 bg-stone-800"
        />
        <p className="text-red-600 py-2">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg  "
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-6 cursor-pointer" onClick={toggleSignUpForm}>
          new to Netflix? Sign Up Now
        </p>
      </form>
    </div>
  );
};

export default Login;
