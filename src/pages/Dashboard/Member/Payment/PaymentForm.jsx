import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const PaymentForm = () => {
    const [error, setError] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card
    })
    if(error){
        console.log('Payment error', error);
        setError(error.message);
    }
    else{
        console.log('Payment method', paymentMethod);
        setError(' ');
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
        <button
          className="btn btn-sm bg-gradient-to-r from-violet-500 to-fuchsia-500 mt-4 text-white mx-auto"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
        <p className="text-red-600">{error}</p>
      </form>
    </div>
  );
};

export default PaymentForm;
