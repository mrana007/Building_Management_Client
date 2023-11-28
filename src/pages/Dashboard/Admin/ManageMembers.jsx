import { Helmet } from "react-helmet-async";
import { FaTrash } from "react-icons/fa";
import useUsers from "../../../hooks/useUsers";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageMembers = () => {
  const [users, refetch] = useUsers();
  const members = users.filter((user) => user.role == "member");
  const axiosSecure = useAxiosSecure();
  const handleRemoveMember = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove the member!",
    }).then((result) => {
      if (result.isConfirmed) {
        const res = axiosSecure.patch(`/member/${id}`);
        if (res) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Member removed successfully.",
            icon: "success",
          });
        }
      }
    });
  };
  return (
    <>
      <Helmet>
        <title>Quantum Tower | Admin Dashboard | Manage Members</title>
      </Helmet>
      <div className="max-w-screen-md mx-auto">
        <h2 className="text-6xl text-center font-extrabold mb-4 md:my-14">
          Manage Members
        </h2>
        <div className="overflow-x-auto rounded-2xl">
          <table className="table">
            {/* head */}
            <thead className="bg-red-300 text-white font-semibold">
              <tr className="text-lg">
                <th>Serial</th>
                <th>User Name</th>
                <th>User Email</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member, index) => (
                <tr key={member._id}>
                  <th>{index + 1}</th>
                  <td>{member.name}</td>
                  <td>{member.email}</td>
                  <td>
                    <button
                      onClick={() => handleRemoveMember(member._id)}
                      className="text-red-500 pl-2 text-3xl"
                    >
                      {" "}
                      <FaTrash />{" "}
                    </button>
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

export default ManageMembers;
