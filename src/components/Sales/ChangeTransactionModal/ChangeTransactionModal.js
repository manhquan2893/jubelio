import React,{useState} from 'react'
import {Modal, Popover} from 'antd'
import './style.scss'

const percents = (
  <div className="percents">
    <div className="percentItem">10%</div>
    <div className="percentItem">25%</div>
    <div className="percentItem">50%</div>
    <div className="percentItem">60%</div>
    <div className="percentItem">70%</div>
    <div className="percentItem">90%</div>
  </div>
)
const ChangeTransactionModal = (props) => {
  const [visibleDiscountPopover,setVisibleDiscountPopover] = useState(false)
  const [visibleTaxPopover,setVisibleTaxPopover] = useState(false)
  const [visibleOtherFeePopover,setVisibleOtherFeePopover] = useState(false)
  const [visibleAssurancePopover,setVisibleAssurancePopover] = useState(false)

  const handleDiscountPopover = (visible) =>{
    setVisibleDiscountPopover(visible)
  }
  const handleTaxPopover = (visible) =>{
    setVisibleTaxPopover(visible)
  }
  const handleOtherFeePopover = (visible) =>{
    setVisibleOtherFeePopover(visible)
  }
  const handleAssurancePopover = (visible) =>{
    setVisibleAssurancePopover(visible)
  }
  return (
    <Modal
      visible={props.visibleTransactionModal}
      okText="Simpan"
      cancelText="Batal"
      onCancel={props.onCancel}
      wrapClassName="changeTransactionModal"
      closable={false}
    >
      <div className="transactionItem">
      <Popover
            overlayClassName="changeAdditionalInfoPopover"
            content={percents}
            placement="left"
            trigger="click"
            visible={visibleDiscountPopover}
            onVisibleChange={handleDiscountPopover}
            >
          <div className="transactionItemTitle">Diskon Transaksi</div>
        </Popover>
        <div className="cells">
          <div className="rp">Rp</div>
          <div className="percent">%</div>
        </div>
        <div className="transactionItemText">
          20
        </div>
      </div>
      <div className="transactionItem">
      <Popover
            overlayClassName="changeAdditionalInfoPopover"
            content={percents}
            placement="left"
            trigger="click"
            visible={visibleTaxPopover}
            onVisibleChange={handleTaxPopover}
            >
          <div className="transactionItemTitle">Pajax</div>
        </Popover>
        <div className="cells">
          <div className="rp">Rp</div>
          <div className="percent">%</div>
        </div>
        <div className="transactionItemText">
          10
        </div>
      </div>
      <div className="transactionItem">
        <Popover
            overlayClassName="changeAdditionalInfoPopover"
            content={percents}
            placement="left"
            trigger="click"
            visible={visibleOtherFeePopover}
            onVisibleChange={handleOtherFeePopover}
            >
          <div className="transactionItemTitle">Biaya Lainnya</div>
        </Popover>
        <div className="cells">
          <div className="rp">Rp</div>
          <div className="percent">%</div>
        </div>
        <div className="transactionItemText">
          20
        </div>
      </div>
      <div className="transactionItem">
      <Popover
            overlayClassName="changeAdditionalInfoPopover"
            content={percents}
            placement="left"
            trigger="click"
            visible={visibleAssurancePopover}
            onVisibleChange={handleAssurancePopover}
            >
          <div className="transactionItemTitle">Asuransi</div>
        </Popover>
        <div className="cells">
          <div className="rp">Rp</div>
          <div className="percent">%</div>
        </div>
        <div className="transactionItemText">
          20
        </div>
      </div>
    </Modal>
  )
}
export default ChangeTransactionModal
