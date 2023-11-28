import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
    <div className="flex justify-start px-2 mt-10 mr-10">
      <Link to="/">
        <button className="btn bg-red-400 text-white">Go Home</button>
      </Link>
    </div>
    <div className="flex items-center justify-center">
      <img className="h-[70vh]" src="https://i.ibb.co/SQ8tmL8/404.jpg" alt="" />
    </div>
    </div>
  );
};

export default ErrorPage;
