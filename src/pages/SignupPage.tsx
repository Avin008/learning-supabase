import { useState } from "react";

const SignupPage = () => {
  const [signupCredentials, setSignupCredentials] =
    useState({
      email: "",
      password: "",
    });

  const inputHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setSignupCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="h-screen flex justify-center">
      <div className="border w-96 h-fit border-black mt-20 p-4 flex flex-col gap-2">
        <h1 className="text-center text-xl">Sign Up</h1>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            className="border p-1 px-2 border-black"
            type="email"
            name="email"
            placeholder="johndoe@gmail.com"
            onChange={inputHandler}
            value={signupCredentials.email}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Password</label>
          <input
            className="border border-black p-1 px-2"
            type="password"
            name="password"
            placeholder="********"
            onChange={inputHandler}
            value={signupCredentials.password}
          />
        </div>
        <button className="border p-1 font-medium border-black w-full">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignupPage;
