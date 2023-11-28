import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MakeAnnouncements = () => {
  const axiosSecure = useAxiosSecure();
  const handleAnnouncement = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const announcement = form.announcement.value;
    const announcementData = {
      title,
      announcement,
    };
    axiosSecure.post("/announcements", announcementData).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Announcement make successfully",
          showConfirmButton: false,
          timer: 2500,
        });
      }
    });
  };
  return (
    <>
      <h2 className="text-6xl text-center font-extrabold mb-4 md:my-14">
        Make an Announcement
      </h2>
      <div className="flex justify-center mx-auto">
        <div className="card shrink-0 w-full max-w-sm md:max-w-2xl bg-green-100">
          <form onSubmit={handleAnnouncement} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Give announcement title"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Announcements</span>
              </label>
              <input
                type="text"
                name="announcement"
                placeholder="Give an announcement"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button
                className="disabled: block w-1/2 justify-center mx-auto select-none rounded-lg bg-green-800 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="submit"
                data-ripple-light="true"
              >
                Make Announcement
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MakeAnnouncements;
