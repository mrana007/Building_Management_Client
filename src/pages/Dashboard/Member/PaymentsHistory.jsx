import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";



const PaymentsHistory = () => {
    const axiosSecure = useAxiosSecure();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axiosSecure.get(`payments/aayan@any.com`);
      return res.data;
    },
  });
    return (
        <>
      <Helmet>
        <title>Quantum Tower | Dashboard | Payment History</title>
      </Helmet>
      <h2 className="text-6xl text-center font-extrabold mb-4 md:my-14">
        Total Payment: {payments.length}
      </h2>
      <div className="max-w-screen-lg mx-auto">
        <div className="overflow-x-auto rounded-2xl">
          <table className="table">
            {/* head */}
            <thead className="bg-red-300 text-white font-semibold">
              <tr className="text-lg">
                <th>Serial</th>
                <th>Member</th>
                <th>Apartment</th>
                <th>Rent For</th>
                <th>Rent</th>
                <th>Pay Date</th>
                <th>Transaction Id</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr key={payment._id}>
                  <th>{index + 1}</th>
                  <td>{payment.email}</td>
                  <td>{payment.apartmentNo}</td>
                  <td>{payment.month}</td>
                  <td>${payment.rent}</td>
                  <td>{payment.date}</td>
                  <td>{payment.transactionId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
    );
};

export default PaymentsHistory;