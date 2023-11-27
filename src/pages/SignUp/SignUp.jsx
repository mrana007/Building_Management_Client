import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import GoogleLogin from "../../Components/GoogleLogin/GoogleLogin";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

// create user
  const { createUser, updatedUserProfile, logOut} = useContext(AuthContext);
  const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
    .then(result=>{
        const loggedUser = result.user;
        console.log(loggedUser);
        updatedUserProfile(data.name, data.photoURL)
        .then(()=>{
          // create user entry in the database
          const usersInfo ={
            name: data.name,
            email: data.email,
            role: 'user'
          }
          axiosPublic.post('/users', usersInfo)
          .then(res=>{
            if(res.data.insertedId){
              reset();
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'User added to the database successfully',
              showConfirmButton: false,
              timer: 2000
          });
          logOut();
          navigate('/login');
            }
          })
          
        })
        .catch(error =>console.log(error))
    })
  };

  return (
    <>
        <Helmet>
            <title>Quantum Tower | Sign Up</title>
        </Helmet>
      <div
        className="hero min-h-screen mt-16 md:py-20"
        style={{
          backgroundImage: "url(https://i.ibb.co/rMZKdBw/12188678-4907157.jpg)",
        }}
      >
        <div className="hero-content flex-col md:flex-row-reverse shadow-xl rounded-lg shadow-gray-400">
          <div className="text-center md:w-1/2 lg:text-left">
            <img
              src="https://i.ibb.co/rv4Lg48/5202813-Mobile-removebg-preview.png"
              alt="login"
            />
          </div>
          <div className="card md:w-1/2 max-w-sm">
            <h1 className="text-5xl text-center pt-3 font-bold">Sign Up</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  name="photoURL"
                  placeholder="Enter photo url"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Photo URL is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                  required
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative input input-bordered">
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    name="password"
                    placeholder="Enter password"
                    className="pt-2"
                    required
                  />
                  {errors.password?.type === "required" && (
                    <span className="text-red-600">Password is required</span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="text-red-600">
                      Password must be 6 characters
                    </span>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <span className="text-red-600">
                      Password must be less than 20 characters
                    </span>
                  )}
                  {errors.password?.type === "pattern" && (
                    <span className="text-red-600">
                      Password must have one uppercase, one lower case, one
                      number and one specials character
                    </span>
                  )}
                  <span
                    className="absolute top-3 right-3"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
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
              <p className="mb-2">Or Sign up with</p>
              <GoogleLogin></GoogleLogin>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
