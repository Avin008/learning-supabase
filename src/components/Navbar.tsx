import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="h-12 justify-between fixed left-0 right-0 px-6 flex items-center top-0 border-b border-black">
      <div>
        <span
          className="text-base cursor-pointer font-bold"
          onClick={() => navigate("/")}
        >
          TODO APP
        </span>
      </div>
      <ul className="flex font-medium gap-5">
        <li>
          <button onClick={() => navigate("/login")}>
            LOGIN
          </button>
        </li>
        <button onClick={() => navigate("/signup")}>
          SIGN UP
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
