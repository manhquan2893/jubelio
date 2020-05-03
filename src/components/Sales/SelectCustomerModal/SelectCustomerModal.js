import React from 'react'
import {Modal, Input} from 'antd'
import CustomerInfoCardList from 'components/Sales/CustomerInfoCardList/CustomerInfoCardList'
import './style.scss'

const { Search } = Input;
function SelectCustomerModal(props) {
  return (
      <Modal
      visible={props.isShowSelectCustomerModal}
      onCancel={props.onCancel}
      wrapClassName="selectCustomerModal"
      closable={false}>
        <div className="header">
          <i class="fa fa-times" onClick={()=>{props.onCancel()}}></i>
          <div className="text">Pelanggan</div>
          <i class="fa fa-user-plus"></i>
        </div>
        <div className="body">
        <Search
          placeholder="input search text"
          onSearch={value => console.log(value)}
        />
        </div>
        <CustomerInfoCardList />
        
        </Modal>
  )
}

export default SelectCustomerModal
