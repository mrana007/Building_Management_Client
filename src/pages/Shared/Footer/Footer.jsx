import { FaTwitter, FaYoutube, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-28">
        <footer className="footer footer-center p-10 bg-base-300 rounded">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Mission</a>
        <a className="link link-hover">Connect & Share</a>
        <a className="link link-hover">Our Projects</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link>
            <FaFacebookF className="text-blue-500 text-4xl"></FaFacebookF>
          </Link>
          <Link>
            <FaInstagram className="text-red-500 text-4xl"></FaInstagram>
          </Link>
          <Link>
            <FaTwitter className="text-blue-500 text-4xl"></FaTwitter>
          </Link>
          <Link>
            <FaYoutube className="text-red-500 text-4xl"></FaYoutube>
          </Link>
        </div>
      </nav>
      <aside>
        <p>Copyright © 2023 - All right reserved by Quantum Tower</p>
      </aside>
    </footer>
    </div>
  );
};

export default Footer;
