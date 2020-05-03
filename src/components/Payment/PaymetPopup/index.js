import React from 'react';

const PaymetPopup = (props) => {
  const { payClick } = props;
  return (
    <div className="payment-popup">
      <p className="payment-popup__title">Kartu Kredit</p>
      <div className="payment-popup__money">
        <span>Rp.</span>
        <input></input>
        <span>,00</span>
      </div>
      <div className="payment-popup__group-btn">
        <button className="payment-popup__BCA-btn" onClick={payClick}>
          BCA
        </button>
        <button className="payment-popup__mandiri-btn" onClick={payClick}>
          Mandiri
        </button>
        <button className="payment-popup__BNI-btn" onClick={payClick}>
          BNI
        </button>
      </div>
    </div>
  );
};

export default PaymetPopup;
