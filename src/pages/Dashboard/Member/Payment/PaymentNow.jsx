import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";
import { useSearchParams } from "react-router-dom";

// DONE: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Key);
const PaymentNow = () => {
    const [params] = useSearchParams();
    const queryParams = {
        rent: params.get('rent'),
        month: params.get('month'),
        email: params.get('email'),
        apartmentNo: params.get('apartmentNo')
      };
    // console.log(queryParams);

  return (
    <div className="max-w-screen-xl mx-auto">
        {/* page title */}
      <h2 className="text-6xl text-center font-extrabold mb-4 md:my-14">
        Payment Card
      </h2>
      {/* payment card */}
      <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl lg:w-1/2 px-2 mb-3 text-white mx-auto">
        <Elements stripe={stripePromise}>
          <PaymentForm queryParams={queryParams}></PaymentForm>
        </Elements>
      </div>
    </div>
  );
};

export default PaymentNow;
