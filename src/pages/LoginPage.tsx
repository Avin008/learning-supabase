import { useState } from "react";
import supabase from "../lib/supabase";
import useAuthStore from "../store/authStore";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { addAuth } = useAuthStore((store) => store);
  const navigate = useNavigate();

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

  const loginUser = async () => {
    const { data: userData } =
      await supabase.auth.signInWithPassword(
        loginCredentials
      );
    console.log(userData);
    addAuth(userData.user?.id as string);
    navigate("/");
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
        <button
          className="border p-1 font-medium border-black w-full"
          onClick={loginUser}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
