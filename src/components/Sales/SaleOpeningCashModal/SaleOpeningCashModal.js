import React from 'react'
import {Modal} from 'antd'
import {Input } from 'antd'
import './style.scss'
function SaleOpeningCashModal({visible,onCancel}) {
  return (
    <Modal
    visible={visible}
    okText='Simpan'
    cancelText='Batal'
    closable={false}
    onCancel={onCancel}
    wrapClassName="saleOpeningCashModal">
      <div>Rp.</div>
      <Input placeholder="Basic usage" />
      <div>,00</div>
    </Modal>
  )
}

export default SaleOpeningCashModal
