import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-neutral shadow-2xl">
      <div className="flex-1">
        <Link to='/' className="btn btn-ghost normal-case text-xl" title="Back to Home">BreakingBad</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal pr-10">
          <li className="mr-5">
            <Link to='/deathinfo'>Chars Death Info</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
