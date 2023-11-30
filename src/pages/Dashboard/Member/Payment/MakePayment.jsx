import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import { Link } from "react-router-dom";
import { useState } from "react";

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
  const [data, setData] = useState();

  return (
    <>
      <Helmet>
        <title>Quantum Tower |Member Dashboard | Make Payment</title>
      </Helmet>
      <h2 className="text-6xl text-center font-extrabold mb-4 md:my-14">
        Make Payment
      </h2>
      <div className="max-w-screen-xl justify-center">
        <div className="card w-3/4 mx-auto shadow-xl bg-slate-500">
          <form  className="py-8 px-8 md:px-16">
            <div className="flex flex-col md:flex-row mx-auto justify-center gap-4">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-white text-xl font-semibold">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue={email}
                  readOnly
                  placeholder="email"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-white text-xl font-semibold">
                    Floor No
                  </span>
                </label>
                <input
                  type="text"
                  name="floorNo"
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
                  <span className="label-text text-white text-xl font-semibold">
                    Block Name
                  </span>
                </label>
                <input
                  type="text"
                  name="block"
                  defaultValue={block}
                  readOnly
                  placeholder=""
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-white text-xl font-semibold">
                    Apartment No
                  </span>
                </label>
                <input
                  type="text"
                  name="apartmentNo"
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
                  <span className="label-text text-white text-xl font-semibold">
                    Rent
                  </span>
                </label>
                <input
                  type="text"
                  name="rent"
                  defaultValue={rent}
                  readOnly
                  placeholder=""
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-white text-xl font-semibold">
                    Month
                  </span>
                </label>
                <select
                onChange={(e) =>setData(e.target.value)}
                  name="month"
                  className="select select-bordered w-full"
                  required
                >
                  <option value="" disabled selected>
                    Select Month
                  </option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
              </div>
            </div>
            <div className="form-control mt-6 md:w-1/4 mx-auto">
              <Link to={`/dashboard/paymentNow?rent=${rent}&month=${data}&email=${email}&apartmentNo=${apartmentNo}`}>
                <button className="btn bg-red-400 text-white text-2xl">
                  Pay Now
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MakePayment;
