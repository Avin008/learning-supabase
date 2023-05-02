const Navbar = () => {
  return (
    <nav className="h-12 justify-between fixed left-0 right-0 px-6 flex items-center top-0 border-b border-black">
      <div>
        <span className="text-base font-bold">
          TODO APP
        </span>
      </div>
      <ul className="flex font-medium gap-5">
        <li>LOGIN</li>
        <li>SIGNUP</li>
      </ul>
    </nav>
  );
};

export default Navbar;
