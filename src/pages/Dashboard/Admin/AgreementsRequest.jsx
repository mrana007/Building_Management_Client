import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FcAcceptDatabase } from "react-icons/fc";
import Swal from "sweetalert2";

const AgreementsRequest = () => {

  const axiosSecure = useAxiosSecure();
  const { data: agreements = [], refetch } = useQuery({
    queryKey: ["agreements"],
    queryFn: async () => {
      const res = await axiosSecure.get("/agreements");
      return res.data;
    },
  });

  const handleAccept = ({agreement, agreementId, userEmail}) =>{
    const res =axiosSecure.patch(`/agreement/status/${agreementId}`)
    const response =axiosSecure.patch(`/users/role/${userEmail}`)
    if(res && response){
        refetch();
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Agreement request accepted",
            showConfirmButton: false,
            timer: 2500
          });
    }
    const date = new Date();
    const formattedDate = date.toISOString().split("T")[0];
    const {floorNo, block, apartmentNo} = agreement;
    const agreementInfor ={
        email: userEmail,
        floorNo,
        block,
        apartmentNo,
        date: formattedDate,
    }
    axiosSecure.post("/agreementInfo", agreementInfor)
  }
  const handleReject = id =>{
    const res =axiosSecure.patch(`/rejectAgreement/status/${id}`)
    if(res){
        refetch();
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Agreement request rejected",
            showConfirmButton: false,
            timer: 2500
          });
    }
  }
  return (
    <>
      <Helmet>
        <title>Quantum Tower | Admin Dashboard | Agreements Request</title>
      </Helmet>
      <h2 className="text-6xl text-center font-extrabold mb-4 md:my-14">
        Agreements Request: {agreements.length}
      </h2>
      <div className="">
      <div className="overflow-x-auto rounded-2xl">
        <table className="table">
          {/* head */}
          <thead className="bg-red-300 text-white font-semibold">
            <tr className="text-lg">
              <th></th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Floor No</th>
              <th>Block Name</th>
              <th>Room No</th>
              <th>Rent/Month</th>
              <th>Agreement Request Date</th>
              <th>Accept</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {agreements.map((agreement, index) => (
              <tr key={agreement._id} className="text-center">
                <th>{index + 1}</th>
                <td>{agreement.userName}</td>
                <td>{agreement.userEmail}</td>
                <td>{agreement.floorNo}</td>
                <td>{agreement.block}</td>
                <td>{agreement.apartmentNo}</td>
                <td>$ {agreement.rent}</td>
                <td>{agreement.date}</td>
                <td>
                  {
                    agreement?.status == "pending" ? <>
                    <button onClick={()=>handleAccept({agreementId: agreement._id, userEmail: agreement.userEmail, agreement })}>
                    {" "}
                    <FcAcceptDatabase className="text-5xl" />{" "}
                  </button>
                    </>:agreement?.status
                    
                  }
                </td>
                <td>
                  {
                    agreement?.status =="pending" ? <>
                    <button onClick={()=> handleReject(agreement._id)} className="text-red-500 text-4xl">X</button>
                    </>
                    :
                    "--"
                    
                    }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </>
  );
};

export default AgreementsRequest;
