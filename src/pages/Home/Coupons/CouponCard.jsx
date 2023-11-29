import Lottie from "lottie-react";
import diamond from "../../../../Animation - 1701241860270.json";

const CouponCard = ({ coupon }) => {
  const { code, discount, description } = coupon;
  return (
    <div className="w-72 bg-slate-800 border border-black text-center text-white rounded-3xl p-4 cursor-pointer group justify-center mx-auto shadow-2xl hover:shadow-xl shadow-green-300 hover:shadow-pink-800">
      <div className="relative group-hover:scale-105">
        <div className="absolute -right-6 w-28 -top-10">
          <Lottie className="text-" animationData={diamond} loop={true} />
        </div>
        <h2 className="text-blue-500 font-bold text-3xl">{code}</h2>
        <h2 className="text-orange-400 font-bold text-3xl">{discount}%</h2>
        <h2>{description}</h2>
      </div>
    </div>
  );
};

export default CouponCard;
