import { Helmet } from "react-helmet-async";
import { FaTrash } from "react-icons/fa";

const ManageMembers = () => {
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
              <th></th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Name</td>
              <td>Email</td>
              <td>
                <button className="text-red-500 pl-2 text-3xl">
                  {" "}
                  <FaTrash />{" "}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    </>
  );
};

export default ManageMembers;
