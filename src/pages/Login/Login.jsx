import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signIn } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
    .then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        icon: "success",
        title: "Login Successfully",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
    })
    .catch(error=>{
        console.log(error);
        Swal.fire({
            icon: "error",
            text: "Wrong user information!"
          });
      })
  };

  return (
    <>
      <div
        className="hero min-h-screen mt-16 md:py-20"
        style={{
          backgroundImage: "url(https://i.ibb.co/rMZKdBw/12188678-4907157.jpg)",
        }}
      >
        <div className="hero-content flex-col md:flex-row shadow-xl rounded-lg shadow-gray-400">
          <div className="text-center md:w-1/2 lg:text-left">
            <img
              src="https://i.ibb.co/rv4Lg48/5202813-Mobile-removebg-preview.png"
              alt="login"
            />
          </div>
          <div className="card md:w-1/2 max-w-sm">
            <h1 className="text-5xl text-center pt-3 font-bold">Login</h1>
            <form onSubmit={handleLogin} className="card-body">
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
                <div className="relative input input-bordered">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className="pt-2"
                  required
                />
                <span
                  className="absolute top-3 right-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
                </div>
              </div>
              <div className="form-control mt-3">
                <input
                  className="btn bg-green-400 w-1/2 mx-auto text-white text-xl font-extrabold "
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="text-center text-green-600 text-xl font-medium">
              <small>
                New here?
                <Link to="/signup" className="font-extrabold">
                  Create a New Account
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

export default Login;
