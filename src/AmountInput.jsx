import React from "react";

const AmountInput = ({ value, onChange }) => {
  return (
    <input
      className="amountValue"
      type="text"
      value={value}
      onChange={onChange}
    />
  );
};

export default AmountInput;
