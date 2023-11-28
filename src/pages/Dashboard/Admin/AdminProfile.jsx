import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";

const AdminProfile = () => {
    const { user } = useAuth();
    return (
        <>
    <Helmet>
        <title>Quantum Tower | Dashboard | Admin Profile</title>
    </Helmet>
        <h2 className="text-6xl text-center font-extrabold mb-4 md:my-14">Admin Profile</h2>
    <div className="flex flex-col md:flex-row justify-center">
      <div className="border border-black-200 bg-red-200 rounded p-6 md:p-16">
        <img className="rounded-full justify-center mx-auto" src={user?.photoURL} alt="" />
        <p className="text-white text-xl text-center pt-2 font-bold">Admin Name: {user?.displayName}</p>
        <p className="text-white text-xl text-center font-bold">Email: {user?.email}</p>
      </div>
    </div>
    </>
    );
};

export default AdminProfile;