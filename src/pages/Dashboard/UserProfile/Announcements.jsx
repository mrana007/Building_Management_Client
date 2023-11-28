import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";

const Announcements = () => {
  const axiosPublic = useAxiosPublic();
  const { data: announcements = [] } = useQuery({
    queryKey: ["apartments"],
    queryFn: async () => {
      const res = await axiosPublic.get("/announcements");
      return res.data;
    },
  });
  return (
    <>
      <Helmet>
        <title>Quantum Tower | Dashboard | Announcements</title>
      </Helmet>
      <h2 className="text-6xl text-center font-extrabold mb-4 md:my-14">
        Total Announcements: {announcements.length}
      </h2>
      <div className="max-w-screen-lg mx-auto">
        <div className="overflow-x-auto rounded-2xl">
          <table className="table">
            {/* head */}
            <thead className="bg-red-300 text-white font-semibold">
              <tr className="text-lg">
                <th>Serial</th>
                <th>Title</th>
                <th>Announcement</th>
              </tr>
            </thead>
            <tbody>
              {announcements.map((announcement, index) => (
                <tr key={announcement._id}>
                  <th>{index + 1}</th>
                  <td>{announcement.title}</td>
                  <td>{announcement.announcement}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Announcements;
