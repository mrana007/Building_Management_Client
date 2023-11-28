import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageCoupons = () => {
  const axiosSecure = useAxiosSecure();
  const handleCoupons = (e) => {
    e.preventDefault();
    const form = e.target;
    const coupon = form.coupon.value;
    const discount = form.discount.value;
    const description = form.description.value;
    console.log(coupon, discount, description);
    const couponData = {
      coupon,
      discount,
      description,
    };
    axiosSecure.post("/coupons", couponData).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Coupon added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        document.getElementById("my_modal_5").close();
      }
    });
  };
  return (
    <>
      <h2 className="text-6xl text-center font-extrabold mb-4 md:my-14">
        Manage Coupons
      </h2>
      <div className="flex max-h-screen items-center">
        <button
          className="disabled: block w-1/2 justify-center mx-auto select-none rounded-lg bg-green-800 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          data-ripple-light="true"
        >
          <button
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Add Coupons
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-middle sm:modal-middle"
          >
            <div className="modal-box">
              <div className="modal-action bg-slate-700 rounded">
                <form
                  onSubmit={handleCoupons}
                  method="dialog"
                  className="card-body"
                >
                  <div className="flex mx-auto gap-2">
                    <div className="form-control flex-1">
                      <label className="label">
                        <span className="label-text text-white">
                          Coupon Code
                        </span>
                      </label>
                      <input
                        type="text"
                        name="coupon"
                        placeholder="Enter coupon code"
                        className="input input-bordered text-black w-full"
                        required
                      />
                    </div>
                    <div className="form-control flex-1">
                      <label className="label">
                        <span className="label-text text-white">
                          Discount Percentage
                        </span>
                      </label>
                      <input
                        type="text"
                        name="discount"
                        placeholder="Enter discount percentage"
                        className="input input-bordered text-black w-full"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">
                        Coupon Description
                      </span>
                    </label>
                    <input
                      type="text"
                      name="description"
                      placeholder="Enter coupon description"
                      className="input input-bordered text-black"
                      required
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn w-1/4 mx-auto">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </dialog>
        </button>
      </div>
    </>
  );
};

export default ManageCoupons;
