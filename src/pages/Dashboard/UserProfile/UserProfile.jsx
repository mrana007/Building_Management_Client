import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";

const UserProfile = () => {
  const { user } = useAuth();
  return (
    <>
    <Helmet>
        <title>Quantum Tower | Dashboard | User Profile</title>
    </Helmet>
    <div className="flex flex-col md:flex-row justify-center">
      <div className="border border-black-200 bg-red-300 rounded p-6 md:p-16">
        <img className="rounded-full justify-center mx-auto" src={user?.photoURL} alt="" />
        <p className="text-white pt-2">Name: {user?.displayName}</p>
        <p className="text-white">Email: {user?.email}</p>
      </div>
      <div className="border border-black-200 bg-slate-500 rounded p-6 md:p-20">
        <h2 className="text-white font-bold text-4xl">User Status</h2>
        <hr />
      </div>
    </div>
    </>
  );
};

export default UserProfile;
