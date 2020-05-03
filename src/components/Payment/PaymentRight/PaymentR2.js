import React from 'react';
import { Input } from 'antd';

const PaymentR2 = (props) => {
  const { returnPayment } = props;
  return (
    <div className="payment__right">
      <div className="payment__right__top">
        <div className="payment__right__total">
          TOTAL
          <p>Rp. 828.700,00</p>
        </div>
        <div className="payment__right__pembayaran">
          <div className="payment__pembayaran-title">Pembayaran</div>
          <div className="payment__pembayaran-item">
            <i className="fa fa-cc-jcb"></i>
            <p> Rp. 500.000,00</p>
          </div>
          <div className="payment__pembayaran-item">
            <i className="fa fa-money"></i>
            <p> Rp. 328.700,00</p>
          </div>
        </div>
      </div>
      <div className="payment__right__done">
        <div className="payment__kembalian">
          <p className="payment__kembalian-text">Kembalian</p>
          <p className="payment__kembalian-number">Rp. 0,00</p>
        </div>
        <div className="payment__email">
          <div className="payment__email-input">
            <Input
              addonAfter={<i className="fa fa-envelope-o"></i>}
              defaultValue="dika.waruwu@email.com"
            />
          </div>
          <button className="payment__copy-btn">
            <i className="fa fa-print" aria-hidden="true"></i>
          </button>
        </div>
        <div className="payment__pay">
          <button className="payment__pay-tambah" onClick={returnPayment}>
            Tambah Pembayaran Lain
          </button>
          <button className="payment__pay-done">Selesaikan Transaksi</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentR2;
