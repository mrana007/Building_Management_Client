import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import CouponCard from "./CouponCard";

const Coupons = () => {
  const axiosPublic = useAxiosPublic();
  const { data: coupons = [] } = useQuery({
    queryKey: ["coupon"],
    queryFn: async () => {
      const res = await axiosPublic.get("/coupons");
      return res.data;
    },
  });

  return (
    <div className="max-w-screen-xl mx-auto mb-12">
      <div>
        <h2 className="text-center text-4xl font-semibold text-emerald-700">
          Coupons
        </h2>
        <p className="text-center py-7 px-1">
          Embark on a journey to elevated living at{" "}
          <span className="text-xl font-semibold">Quantum Tower</span>{" "}
          Apartments! Seize the moment and <br /> apply coupon code during your
          leasing process to unlock exclusive savings on your dream apartment.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-1">
          {coupons.map((coupon) => (
            <CouponCard key={coupon._id} coupon={coupon}></CouponCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Coupons;
