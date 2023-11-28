import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const MemberProfile = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: agreementInfo = [] } = useQuery({
    queryKey: ["agreementInfo"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/agreementInfo/${user?.email}`);
      return res.data;
    },
  });
  const { date, floorNo, block, apartmentNo, rent } = agreementInfo;
//   console.log(block);

  return (
    <>
      <Helmet>
        <title>Quantum Tower | Dashboard | Member Profile</title>
      </Helmet>
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-6xl text-center font-extrabold mb-4 md:my-14">
          Member Profile
        </h2>
        <div className="flex flex-col md:flex-row gap-2 justify-center">
          <div className="flex-1 w-3/4 bg-red-200 rounded-full p-6">
            <img
              className="rounded-full justify-center mx-auto"
              src={user?.photoURL}
              alt=""
            />
            <p className="text-black text-xl text-center pt-2 font-bold">
              <span className="text-slate-600">Member Name:</span> {user?.displayName}
            </p>
            <p className="text-black text-xl text-center font-bold">
              <span className="text-slate-500">Email:</span> {user?.email}
            </p>
          </div>
          <div className="flex-1 w-3/4 bg-green-800 rounded-3xl p-6">
            <div className="md:pt-12">
            <p className="text-white text-xl font-bold">
              <span className="text-red-200">Agreement Accepted date:</span> {date}
            </p>
            <p className="text-white text-xl font-bold">
              <span className="text-red-200">Floor Number:</span> {floorNo}
            </p>
            <p className="text-white text-xl font-bold">
              <span className="text-red-200">Block:</span> {block}
            </p>
            <p className="text-white text-xl font-bold">
              <span className="text-red-200">Apartment Number:</span> {apartmentNo}
            </p>
            <p className="text-white text-xl font-bold">
              <span className="text-red-200">Rent:</span> $ {rent}
            </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberProfile;
