import React, { useState } from "react";
import axios from "axios";
import AmountInput from "./AmountInput";
import PaymentButton from "./PaymentButton";
import PaymentPopup from "./PaymentPopup";

const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [amount, setAmount] = useState(1000);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const kakaopay = () => {
    var IMP = window.IMP;
    IMP.init("imp56341203");
    IMP.request_pay(
      {
        pg: "kakaopay.TC0ONETIME",
        pay_method: "card",
        merchant_uid: "GPK_" + new Date().getTime(),
        name: "GOOTTFLEX",
        amount: amount,
        buyer_name: "buyer_name",
        buyer_tel: "hp",
      },
      function (data) {
        let msg;
        if (data.success) {
          msg = "결제 완료";
          msg += "// 결제 수단 : Kakao";
          msg += "// 상점 거래ID : " + data.merchant_uid;
          msg += "// 결제 금액 : " + data.paid_amount;
          msg += "// 구매자 이름 : " + data.buyer_name;

          axios
            .post("/paySuccess", {
              ID: data.buyer_email,
              amount: data.paid_amount,
            })
            .then((response) => {
              alert("결제 완료: " + response.data.message);
            })
            .catch((error) => {
              alert("결제 성공 후 처리 중 오류: " + error.message);
            });
        } else {
          msg = "결제 실패";
          msg += "에러 내용: " + data.error_msg;
          alert(msg);
        }
      }
    );
  };

  return (
    <div>
      <input className="inputMonthH" type="hidden" />
      <input className="sessionuserID" type="hidden" value="user_id" />
      <AmountInput value={amount} onChange={(e) => setAmount(e.target.value)} />
      <PaymentButton onClick={openPopup} />
      {isPopupOpen && (
        <PaymentPopup onClose={closePopup} amount={amount} onPay={kakaopay} />
      )}
    </div>
  );
};

export default App;
