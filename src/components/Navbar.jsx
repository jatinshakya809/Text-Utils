import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            TextifyTool
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/" className="font-bold text-lg">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="font-bold text-lg">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
