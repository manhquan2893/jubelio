import React, {useState} from 'react'
import { Modal} from 'antd'
import { Input, Popover } from 'antd'
import './style.scss'

const { TextArea } = Input;

const ChangeItemModal = (props) => {
  const [visibleDiscountPopover, setVisibleDiscountPopover] = useState(false)
  const [visibleTaxPopover,setVisibleTaxPopover] = useState(false)
  const [discount, setDiscount] = useState(null)
  const [tax, setTax] = useState(null)
  const handleVisibleDiscountPopover = (visible) => {
    setVisibleDiscountPopover(visible)
  }
  const handleVisibleTaxPopover = (visible) => {
    setVisibleTaxPopover(visible)
  }
  const save = () => {
    props.makeDiscount(discount)
    props.onClose()
  }
  const discountPercents = (
    <div className="percents">
        <div className="percentItem" onClick={()=>{
        setDiscount(10)}}>10%</div>
        <div className="percentItem" onClick={()=>{
        setDiscount(25)}}>25%</div>
        <div className="percentItem" onClick={()=>{
        setDiscount(50)}}>50%</div>
        <div className="percentItem" onClick={()=>{
        setDiscount(60)}}>60%</div>
        <div className="percentItem" onClick={()=>{
        setDiscount(70)}}>70%</div>
        <div className="percentItem" onClick={()=>{
        setDiscount(90)}}>90%</div>
    </div>
  )
  const taxPercents = (
    <div className="percents">
        <div className="percentItem" onClick={()=>{
        setTax(10)}}>10%</div>
        <div className="percentItem" onClick={()=>{
        setTax(25)}}>25%</div>
        <div className="percentItem" onClick={()=>{
        setTax(50)}}>50%</div>
        <div className="percentItem" onClick={()=>{
        setTax(60)}}>60%</div>
        <div className="percentItem" onClick={()=>{
        setTax(70)}}>70%</div>
        <div className="percentItem" onClick={()=>{
        setTax(90)}}>90%</div>
    </div>
  )
  
  return (
    <Modal
    visible={props.isShowChangeItemModal}
    okText="Simpan"
    cancelText="Batal"
    onCancel={props.onClose}
    closable={false}
    wrapClassName="changeItemModal"
    onOk={save}
  >
      <div className="itemTitle">
        <p className="itemTitleText">
          {props.itemName}
        </p>
        <i className="fas fa-trash-alt">
        </i>
      </div>
      <div className="itemInfo">
        <div className="itemImage">
          <img src={props.thumbnail} alt=""/>
        </div>
        <div className="itemInfoText">
          <table>
            <tr>
              <td>Merek</td>
              <td>Love and Hate</td>
            </tr>
            <tr>
              <td>SKU</td>
              <td>{props.itemCode}</td>
            </tr>
            <tr>
              <td>Harga</td>
              <td>{props.sellPrice}</td>
            </tr>
            <tr>
              <td>Persediaan</td>
              <td>{props.available}</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="changeAdditionalInfo">
        <div className="changeDiscount">
          <Popover
          overlayClassName="changeAdditionalInfoPopover"
          content={discountPercents}
          placement="left"
          trigger="click"
          visible={visibleDiscountPopover}
          onVisibleChange={handleVisibleDiscountPopover}
          >
            <span>Ubah Diskon</span>
          </Popover>
          <div className="dicountText">
            {discount}
          </div>
          <div className="cells">
            <div className="percent">%</div>
            <div className="rp">Rp</div>
          </div>
          <div className="number">{props.sellPrice*discount/100}</div>
        </div>
        <div className="changeTax">
        <Popover
          overlayClassName="changeAdditionalInfoPopover"
          content={taxPercents}
          placement="left"
          trigger="click"
          visible={visibleTaxPopover}
          onVisibleChange={handleVisibleTaxPopover}
          >
            <span>Ubah Pajak</span>
          </Popover>
          <div className="dicountText">
            {tax}
          </div>
          <div className="cells">
            <div className="percent">%</div>
            <div className="rp">Rp</div>
          </div>
          <div className="number">{props.sellPrice*tax/100}</div>
        </div>
      </div>
      <TextArea rows={3} placeholder='...Note'/>
  </Modal>    
)
}

export default ChangeItemModal
