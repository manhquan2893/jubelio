import React, { useState } from 'react'
import { Popover } from 'antd';
import RightSideBarItemList from './RightSideBarItemList'
import SelectCustomerModal from 'components/Sales/SelectCustomerModal/SelectCustomerModal'
import SaveCartModal from 'components/Sales/SaveCartModal/SaveCartModal'
import RightSideBarFreeItemList from 'components/Sales/RightSideBarFreeItemList/RightSideBarFreeItemList'
import RightSideBarTransaction from 'components/Sales/RightSideBarTransaction/RightSideBarTransaction'
import './style.scss'

const SaleRightSideBarWithItem = (props) => {
  const [isShowSelectCustomerModal, showSelectCustomerModal] = useState(false);
  const [isShowHeaderPopover, showHeaderPopover] = useState(false);
  const [isShowSaveCartModal, showSaveCartModal] = useState(false);
  const handleVisibleChangePopover = visible => {
    showHeaderPopover(visible)
  }
  const onCancelSaveCartModal = () =>{
    showSaveCartModal(false)
  }
  const onShowSaveCartModal = () => {
    showSaveCartModal(true)
    showHeaderPopover(false)
  }
  const handleShowSelectCustomerModal = () => {
    showSelectCustomerModal(true)
  }
  const onCancelSelectCustomerModal= () => {
    showSelectCustomerModal(false)
  }
  return (
      <div className="saleRightSideBarWithItem">
        <div className="headerSection">
          <div className="header">
            <div>JP/GI/RG/20200312/0001</div>
            <div className="rightHeader">
              <i class="fas fa-trash-alt"></i>
              <Popover
                overlayClassName="rightSideBarHeaderPopover"
                content={
                  <ul>
                    <li>Tambah / Ubah Catatan</li>
                    <li onClick={()=>{onShowSaveCartModal()}}>Simpan</li>
                    <li>Lihat Promosi</li>
                  </ul>
                }
                trigger="click"
                visible={isShowHeaderPopover}
                onVisibleChange={handleVisibleChangePopover}
              >
                <div><i class="fa fa-ellipsis-h"></i></div>
              </Popover>
            </div>
          </div>
          <div onClick={() => {handleShowSelectCustomerModal(true)}}
          className="pelanggan">
            <div className="btn">
              <i className="fa fa-plus"></i>
            </div>
            <div className="text">Pelanggan</div>
          </div>
        </div>
        <RightSideBarItemList />
        <RightSideBarFreeItemList />
        <RightSideBarTransaction />
        <SelectCustomerModal 
        isShowSelectCustomerModal={isShowSelectCustomerModal}
        onCancel={onCancelSelectCustomerModal}/>
        <SaveCartModal 
        isShowSaveCartModal={isShowSaveCartModal}
        onCancel={onCancelSaveCartModal}/>
      </div>
    )
}


export default SaleRightSideBarWithItem
