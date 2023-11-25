import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
    .then((result) => {
      console.log(result);
      navigate(from, { replace: true });
    });
  };

  return (
    <div>
      <button
        onClick={handleGoogleSignIn}
        className="btn btn-outline font-semibold text-xl px-10"
      >
        <FaGoogle className="text-blue-500"></FaGoogle> - Google
      </button>
    </div>
  );
};

export default GoogleLogin;
