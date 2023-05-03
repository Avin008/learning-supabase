import { useState } from "react";

const LoginPage = () => {
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setLoginCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="h-screen flex justify-center">
      <div className="border w-96 h-fit border-black mt-20 p-4 flex flex-col gap-2">
        <h1 className="text-center text-xl">Login</h1>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            className="border p-1 px-2 border-black"
            type="email"
            name="email"
            placeholder="johndoe@gmail.com"
            onChange={inputHandler}
            value={loginCredentials.email}
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
            value={loginCredentials.password}
          />
        </div>
        <button className="border p-1 font-medium border-black w-full">
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
