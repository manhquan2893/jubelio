import React from 'react';
import { Input, Checkbox } from 'antd';

const PaymentR1 = (props) => {
  const { viewDetail, viewPopupPay } = props;

  return (
    <div className="payment__right">
      <div className="payment__right__top">
        <div className="payment__right__total">
          TOTAL
          <p>Rp. 828.700,00</p>
        </div>
        <div className="payment__right__input">
          <div style={{ marginBottom: 16 }}>
            <Input
              addonAfter={<Checkbox></Checkbox>}
              // defaultValue="mysite"
              placeholder="Kupon..."
              className="payment__right-kupon"
            />
          </div>
        </div>
        <div className="payment__right__method">
          <button className="payment__right-money" href="/">
            <i className="fa fa-money"></i>
            <p className="">Tunai</p>
          </button>
          <button className="payment__right-jcb" href="/">
            <i className="fa fa-cc-jcb"></i>
            <p className="">Kartu Debit</p>
          </button>
          <button className="payment__right-discover" onClick={viewPopupPay}>
            <i className="fa fa-cc-discover"></i>
            <p className="">Kartu Credit</p>
          </button>
        </div>
      </div>
      <div className="payment__right__bottom">
        <div className="payment__bayar-cepat">Bayar Cepat</div>
        <div className="payment__group-btn">
          <button className="payment__sama-btn" onClick={viewDetail}>
            Sama
          </button>
          <button className="payment__monney-btn">Rp. 830.000,00</button>
          <button className="payment__monney-btn">Rp. 850.000,00</button>
          <button className="payment__monney-btn">Rp. 900.000,00</button>
        </div>

        <button className="payment__bayar-nanti" onClick={viewDetail}>
          Bayar Nanti
        </button>
      </div>
    </div>
  );
};

export default PaymentR1;
