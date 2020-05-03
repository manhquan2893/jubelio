import React from 'react';
import './style.scss';

const CardHozItem = (props) => {
  const { nameCode, diskon, amount, bool } = props;
  return (
    <div className="card-info hoz-item">
      <div className="card-info__diff" style={bool}>d</div>
      <div className="card-info__content">
        <div className="card-info__left">
          <img
            src="https://www.jcrew.com/s7-img-facade/L2559_GR6512?$pdp_enlarge$"
            alt="s"
          ></img>
        </div>
        <div className="card-info__right">
          <div className="card-info__code">{nameCode}</div>
          <span className="card-info__amount">{diskon}</span>
          <span className="card-info__diskon">{amount}</span>
        </div>
      </div>
      <div className="card-info__price">
        <p className="card-info__price-row1">@Rp. 150.000,00</p>
        <p className="card-info__price-row2">Rp. 300.000,00</p>
        <p className="card-info__price-row3">
          <del>Rp. 150.000,00</del>
        </p>
      </div>
      <i className="fa fa-ellipsis-v"></i>
    </div>
  );
};

export default CardHozItem;
