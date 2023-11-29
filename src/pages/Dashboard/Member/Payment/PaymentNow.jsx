import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

// DONE: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Key);
const PaymentNow = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
        {/* page title */}
      <h2 className="text-6xl text-center font-extrabold mb-4 md:my-14">
        Payment Card
      </h2>
      {/* payment card */}
      <div className="bg-base-300 rounded-xl lg:w-1/2 px-2 mb-3 text-white mx-auto">
        <Elements stripe={stripePromise}>
          <PaymentForm></PaymentForm>
        </Elements>
      </div>
    </div>
  );
};

export default PaymentNow;
