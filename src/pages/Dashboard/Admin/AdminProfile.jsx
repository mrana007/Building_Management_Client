import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import useUsers from "../../../hooks/useUsers";
import { FaUsers } from "react-icons/fa";
import { MdApartment } from "react-icons/md";

const AdminProfile = () => {
  const { user } = useAuth();
  const [users] = useUsers();
  const members = users.filter((user) => user.role == "member");
  return (
    <>
      <Helmet>
        <title>Quantum Tower | Dashboard | Admin Profile</title>
      </Helmet>
      <div className="max-w-screen-lg mx-auto grid grid-cols-2 md:grid-cols-4 mb-4 gap-8">
        <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-md mr-2">
          <h2 className="flex items-center text-white mx-auto justify-center py-4 px-5">
            <MdApartment className="text-6xl font-extrabold mr-2"></MdApartment>{" "}
            <p className="text-center text-2xl font-bold">
              {18} <br />
              Apartments
            </p>
          </h2>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-md mr-2">
          <h2 className="flex items-center text-white mx-auto justify-center py-4 px-5">
            <FaUsers className="text-6xl font-extrabold mr-2"></FaUsers>{" "}
            <p className="text-center text-2xl font-bold">
              {60} % <br />
              Available
            </p>
          </h2>
        </div>
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... rounded-md mr-2">
          <h2 className="flex items-center text-white mx-auto justify-center py-4 px-5">
            <FaUsers className="text-6xl font-extrabold mr-2"></FaUsers>{" "}
            <p className="text-center text-2xl font-bold">
              {users.length} <br />
              Users
            </p>
          </h2>
        </div>
        <div className="bg-gradient-to-r from-sky-500 to-indigo-500 rounded-md mr-2">
          <h2 className="flex items-center text-white mx-auto justify-center py-4 px-5">
            <FaUsers className="text-6xl font-extrabold mr-2"></FaUsers>{" "}
            <p className="text-center text-2xl font-bold">
              {members.length} <br />
              Members
            </p>
          </h2>
        </div>
      </div>
      {/* Admin Profile */}
      <div className="flex flex-col md:flex-row justify-center">
        <div className="border border-black-200 bg-red-200 rounded p-6 md:p-16">
          <img
            className="rounded-full justify-center mx-auto"
            src={user?.photoURL}
            alt=""
          />
          <p className="text-3xl text-center font-extrabold pt-2">
            Admin Profile
          </p>
          <p className="text-white text-xl text-center pt-2 font-bold">
            Admin Name: {user?.displayName}
          </p>
          <p className="text-white text-xl text-center font-bold">
            Email: {user?.email}
          </p>
        </div>
      </div>
    </>
  );
};

export default AdminProfile;
