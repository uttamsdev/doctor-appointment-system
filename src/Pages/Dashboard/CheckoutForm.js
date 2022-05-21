import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";

/*
payments step:
1. install stripe react strip js
2. Open stripe account on stripe website
3. get publishable key
4. create elements wrapper using publishable key
5. create Checkout from using card element , useStripe, useElements
6. get card element info

7. get credit card info/error
*/

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return; // data na pele kar jonno payemnt krsi na pele return kore dibo
    }

    const card = elements.getElement(CardElement); //card er j data dicchi ekhane card setake extract kore niye astache

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card, //card contain cards detials user info
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-success btn-s mt-4"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-500">{cardError}</p>}
    </>
  );
};

export default CheckoutForm;
