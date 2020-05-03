import React, { useState } from 'react'
import SelectCustomerModal from 'components/Sales/SelectCustomerModal/SelectCustomerModal'
import NoItemImage from './noItem.svg';
import './style.scss'

const SaleRightSideBarNoItem = (props) => {
  const [isShowSelectCustomerModal, showSelectCustomerModal] = useState(false);
  const handleShowSelectCustomerModal = () => {
    showSelectCustomerModal(true)
  }
  const onCancelSelectCustomerModal= () => {
    showSelectCustomerModal(false)
  }
    return (
      <div className="saleRightSideBarNoItem">
        <div className="header">
          Keranjang
        </div>
        <div onClick={() => {handleShowSelectCustomerModal(true)}}
          className="pelanggan">
            <div className="btn">
              <i className="fa fa-plus"></i>
            </div>
            <div className="text">Pelanggan</div>
          </div>
        <div className="image">
          <img src={NoItemImage} alt=""/>
        </div>
        <p className="bold">Keranjang masih kosong</p>
        <p>Mohon tambakan beberapa produk</p>
        <p>atau</p>
        <p>Pilih tombol Lonceng</p>
        <p>Untuk mengambil Keranjang disimpan</p>
        <SelectCustomerModal 
        isShowSelectCustomerModal={isShowSelectCustomerModal}
        onCancel={onCancelSelectCustomerModal}/>
      </div>
    )
}

export default SaleRightSideBarNoItem
