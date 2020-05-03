import React, { useState } from 'react';
import { List, Dropdown, Menu, Row, Col } from 'antd';
import CardHozItem from '../CardHozItem';

const PaymentLeft = () => {
  const [data, setData] = useState([1, 2, 3, 4, 5]);
  const [data01, setData01] = useState([1]);
  const [showPelanggan, setShowPelanggan] = useState(true);

  const viewPelangganClick = () => {
    setShowPelanggan(false);
  };

  const menu = (
    <Menu>
      <Menu.Item>1st menu item</Menu.Item>
      <Menu.Item>2nd menu item</Menu.Item>
      <Menu.Item>3rd menu item</Menu.Item>
    </Menu>
  );

  return (
    <div className="payment__left">
      <div className="payment__left-title">
        <div className="payment__left-code">JP/GI/RG/20200312/0001</div>
        <div className="payment__left-icon">
          <i className="fa fa-trash" />
          <Dropdown className="payment__left-dot" overlay={menu}>
            <a href="/">
              <i className="fa fa-ellipsis-h" />
            </a>
          </Dropdown>
        </div>
      </div>
      <div className="payment__waruwu">
        {showPelanggan && (
          <div className="payment__left-top">
            <Row>
              <Col span={12}>
                <button
                  className="payment__pelanggan-btn"
                  onClick={() => viewPelangganClick()}
                >
                  <i className="fa fa-plus-square-o"></i>Pelanggan
                </button>
              </Col>
              <Col span={12}>
                <button className="payment__simpan-btn">
                  <i className="fa fa-bookmark-o" aria-hidden="true"></i>Simpan
                </button>
              </Col>
            </Row>
          </div>
        )}
        {!showPelanggan && (
          <div className="payment__waruwu-title">Dika Waruwu</div>
        )}
        <div className="payment__waruwu-list">
          <List
            dataSource={data}
            renderItem={(item) => (
              <List.Item key={item.id}>
                <CardHozItem
                  nameCode="SXSMW026 - Biru"
                  diskon="2"
                  amount="Diskon 10%"
                ></CardHozItem>
              </List.Item>
            )}
          ></List>
        </div>
      </div>
      <div className="payment__gratis">
        <div className="payment__gratis-title">Barang Gratis</div>
        <div className="payment__gratis-list">
          <List
            dataSource={data01}
            renderItem={(item) => (
              <List.Item key={item.id}>
                <CardHozItem
                  nameCode="SXSMW026 - Biru"
                  diskon="2"
                  amount="Diskon 10%"
                ></CardHozItem>
              </List.Item>
            )}
          ></List>
        </div>
      </div>
      <div className="payment__total">
        <div className="payment__total__item">
          <p>Subtotal</p>
          <p>Rp. 900.000,00</p>
        </div>
        <div className="payment__total__item">
          <p>Diskon Barang</p>
          <p>Rp. 65.000,00</p>
        </div>
        <div className="payment__total__item">
          <p>Diskon Transaksi</p>
          <p>Rp. 15.000,00</p>
        </div>
        <div className="payment__total__item">
          <p>Pajak</p>
          <p>Rp. 0,00</p>
        </div>
        <div className="payment__total__item">
          <p>Biaya Lainnya</p>
          <p>Rp. 5.000,00</p>
        </div>
        <div className="payment__total__item">
          <p>Asuransi</p>
          <p>Rp. 3.640,00</p>
        </div>
        <div className="payment__total__item">
          <p>Pembulatan</p>
          <p>Rp. 60,00</p>
        </div>
        <div className="payment__total-sum">
          <p>Total Barang</p>
          <p>6</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentLeft;
