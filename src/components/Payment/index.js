import React, { useState } from 'react';
import { List, Row, Col, Menu, Dropdown, Modal } from 'antd';
import './style.scss';

import PaymentR2 from './PaymentRight/PaymentR2';
import PaymentR1 from './PaymentRight/PaymentR1';
import PaymetPopup from './PaymetPopup';
import PaymentLeft from './PaymentLeft';

const Payment = () => {
  const [detail, setDetail] = useState(false);
  const [visible, setVisible] = useState(false);

  const showDetail = () => {
    setDetail(!detail);
  };

  const viewPaymentClick = () => {
    setVisible(!visible);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div className="payment">
      <Row>
        <Col span={7}>
          <PaymentLeft />
        </Col>
        <Col span={17}>
          {detail && <PaymentR2 returnPayment={() => showDetail()} />}
          {!detail && (
            <PaymentR1
              viewDetail={() => showDetail()}
              viewPopupPay={() => viewPaymentClick()}
            />
          )}
          <Modal
            visible={visible}
            className="modlep"
            onCancel={() => handleCancel()}
          >
            <PaymetPopup
              payClick={() => {
                showDetail();
                handleCancel();
              }}
            />
          </Modal>
        </Col>
      </Row>
    </div>
  );
};

export default Payment;
