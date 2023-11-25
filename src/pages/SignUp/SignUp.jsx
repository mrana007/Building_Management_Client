import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <>
      <div
        className="hero min-h-screen md:py-20"
        style={{ backgroundImage: "url(https://i.ibb.co/rMZKdBw/12188678-4907157.jpg)"}} >
        <div className="hero-content flex-col md:flex-row-reverse shadow-xl rounded-lg shadow-gray-400" >
          <div className="text-center md:w-1/2 lg:text-left">
            <img src="https://i.ibb.co/rv4Lg48/5202813-Mobile-removebg-preview.png" alt="login" />
          </div>
          <div className="card md:w-1/2 max-w-sm">
            <h1 className="text-5xl text-center pt-3 font-bold">Sign Up</h1>
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter photo url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-2">
                <input
                  className="btn bg-green-400 w-1/2 mx-auto text-white text-xl font-extrabold "
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="text-center text-green-600 text-xl font-medium">
              <small>
              Already registered? 
                <Link to="/login" className="font-extrabold">
                Go to Login
                </Link>
              </small>
            </p>
            <div className="my-2 text-center text-xl font-medium">
            <p className="mb-2">Or Sign in with</p>
            {/* <SocialLogin></SocialLogin> */}
            </div>
          </div>
        </div>
      </div>
    </>
    );
};

export default SignUp;