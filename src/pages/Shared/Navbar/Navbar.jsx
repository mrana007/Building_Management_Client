import { Link } from "react-router-dom";

const Navbar = () => {
  const navOptions = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/apartment">Apartment</Link></li>
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navOptions}
            </ul>
          </div>
          <div className="flex items-center">
          <a className="btn btn-ghost text-xl">Quantum Tower</a>
          <img className="w-10" src="https://i.ibb.co/wMjm0hx/house.png" alt="apartment" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        {/* login info */}
        <div className="navbar-end md:pr-16">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-16 rounded-full">
                <img src="https://i.ibb.co/cxddwLx/placeholder.jpg" alt="" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-black bg-opacity-40 text-white rounded-box w-52">
              <li>
                <p className="justify-between">Profile</p>
              </li>
              <li>
                <Link to="/dashboard">DashBoard</Link>
              </li>
              <li>
                <button>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
