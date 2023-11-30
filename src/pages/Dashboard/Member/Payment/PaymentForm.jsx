import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const PaymentForm = ({ queryParams }) => {
  const [error, setError] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const { user } = useAuth();
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { rent, month, apartmentNo } = queryParams;

  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { rent, month, apartmentNo })
      .then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
  }, [axiosSecure, rent, month, apartmentNo]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (!card) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");

      const { paymentIntent, error: confirmErr } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: card,
            billing_details: {
              email: user?.email || "anonymous",
              name: user?.displayName || "anonymous",
            },
          },
        });

      if (confirmErr) {
        console.error(confirmErr);
      } else if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);

        const payment = {
          email: user?.email,
          apartmentNo: apartmentNo,
          month: month,
          rent: rent,
          date: new Date().toLocaleDateString("en-GB"),
          transactionId: paymentIntent.id,
        };
        const res = await axiosSecure.post("/payments", payment);
        if (res) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Payment successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    }
  };
  return (
    <div className="max-w-screen-xl md:w-96 mx-auto pt-12 items-center items center pb-4">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#000000",
                "::placeholder": {
                  color: "#000000",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {error ? <p className="my-2 text-red-600">{error}</p> : ""}
        {transactionId ? (
          <p className="text-black text-[10px] my-2">
            Payment successfully. Transaction ID:{transactionId}
          </p>
        ) : (
          ""
        )}
        <button
          type="submit"
          className="btn btn-sm bg-gradient-to-r from-violet-500 to-fuchsia-500 mt-4 text-white mx-auto"
          disabled={!stripe || !clientSecret}
        >
          Pay for: {apartmentNo}, {month}, ${rent}
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
