import React from "react";
import Popup from "./Popup";

const PaymentPopup = ({ onClose, amount, onPay }) => {
  return <Popup onClose={onClose} onPay={onPay} amount={amount} />;
};

export default PaymentPopup;
