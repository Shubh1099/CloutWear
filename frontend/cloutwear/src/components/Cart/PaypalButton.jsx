import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const paypalid = import.meta.env.VITE_PAYPAL_CLIENT_ID;

const PaypalButton = ({ amount, onSuccess, onError }) => {
  const options = {
    currency: "USD",
    "client-id": paypalid,
    intent: "capture",
  };

  return (
    <PayPalScriptProvider options={options}>
      <PayPalButtons
        style={{
          layout: "vertical",
        }}
        createOrder={(data, actions) => {
          // Call your backend to create the order
          console.log(data);

          // Capture the payment and return the result
          return actions.order.create({
            purchase_units: [
              {
                amount: { value: amount, currency_code: "USD" },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          console.log(data);
          return actions.order.capture().then(onSuccess);
        }}
        onError={onError}
        amount={amount}
        // onSuccess={(data, actions) => {
        //   // Call your backend to save the payment data
        //   console.log(data, actions);
        // }}
      />
    </PayPalScriptProvider>
  );
};

export default PaypalButton;
