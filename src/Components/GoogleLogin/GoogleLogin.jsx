import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const GoogleLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
    .then((result) => {
      console.log(result.user);
      const userInfo ={
        email: result.user?.email,
        name: result.user?.displayName,
        photo: result.user?.photoURL
      }
      axiosPublic.post('/users', userInfo)
      .then(res=>{
        console.log(res.data);
        navigate(from, { replace: true });
      })
    });
  };

  return (
    <div>
      <button
        onClick={handleGoogleSignIn}
        className="btn btn-outline font-semibold text-xl px-10">
        <FcGoogle className="text-3xl"></FcGoogle> - Google
      </button>
    </div>
  );
};

export default GoogleLogin;
