import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import PropTypes from "prop-types";
function Navbar({ title }) {
  return (
    <nav className="navbar shadow-md bg-neutral text-neutral-content  w-full">
      <div className="container mx-auto">
        <div className="flex-none px-2 ">
          <FaGithub className="inline pr-2 text-3xl" />
          <Link to="/">{title}</Link>
        </div>
        <div className="flex-1">
          <div className="flex justify-end">
            <Link to="/" className="btn mr-2 btn-ghost btn-sm rounded-btn">
              Home
            </Link>
            <Link to="/About" className="btn btn-ghost btn-sm rounded-btn">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "Github Finder",
};

export default Navbar;
