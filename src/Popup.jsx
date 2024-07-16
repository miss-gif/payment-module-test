import React from "react";

const Popup = ({ onClose, onPay, amount }) => {
  return (
    <div className="popup">
      <div className="pwrap">
        <button className="closebtn" onClick={onClose}>
          X
        </button>
        <div>
          <h1>결제하기</h1>
        </div>
        <table>
          <tbody>
            <tr>
              <td>
                <a href="#" onClick={onPay}>
                  <img src="/resources/img/icon_kakao.png" alt="카카오페이" />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <h3 className="amount">결제 금액 : {amount}원</h3>
        </div>
      </div>
    </div>
  );
};

export default Popup;
