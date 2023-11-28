import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";

const MakePayment = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: agreementInfo = [] } = useQuery({
    queryKey: ["agreementInfo"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/agreementInfo/${user?.email}`);
      return res.data;
    },
  });
  const { email, floorNo, block, apartmentNo, rent } = agreementInfo;
  return (
    <>
      <Helmet>
        <title>Quantum Tower |Member Dashboard | Make Payment</title>
      </Helmet>
      <h2 className="text-6xl text-center font-extrabold mb-4 md:my-14">
        Make Payment
      </h2>
      <div className="max-w-screen-xl justify-center">
        <div className="card w-3/4 mx-auto shadow-xl bg-base-100">
          <form className="py-8 px-16">
            <div className="flex flex-col md:flex-row mx-auto justify-center gap-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                defaultValue={email}
                readOnly
                placeholder="email"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Floor No</span>
              </label>
              <input
                type="text"
                defaultValue={floorNo}
                readOnly
                placeholder=""
                className="input input-bordered w-full"
                required
              />
            </div>
            </div>
            <div className="flex flex-col md:flex-row mx-auto justify-center gap-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Block Name</span>
              </label>
              <input
                type="text"
                defaultValue={block}
                readOnly
                placeholder=""
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Apartment No</span>
              </label>
              <input
                type="text"
                defaultValue={apartmentNo}
                readOnly
                placeholder=""
                className="input input-bordered w-full"
                required
              />
            </div>
            </div>
            <div className="flex flex-col md:flex-row mx-auto justify-center gap-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Rent</span>
              </label>
              <input
                type="text"
                defaultValue={rent}
                readOnly
                placeholder=""
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Month</span>
              </label>
              <input
                type="text"
                name="month"
                placeholder="Enter Month"
                className="input input-bordered w-full"
                required
              />
            </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn md:w-1/4 mx-auto">Pay Now</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MakePayment;
