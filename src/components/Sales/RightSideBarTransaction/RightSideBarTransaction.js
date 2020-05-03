import React , {useState} from 'react'
import {Table} from 'antd'
import './style.scss'
import ChangeTransactionModal from 'components/Sales/ChangeTransactionModal/ChangeTransactionModal'
const RightSideBarTransaction = () => {
  const [visibleTransactionModal,setVisibleTransactionModal] =useState(false)
  const handleVisibleTransactionModal = () =>{
    setVisibleTransactionModal(true)
  }
  const onCancelTransactionModal = () => {
    setVisibleTransactionModal(false)
  }
  const dataSource = [
      {
        key: '1',
        title: 'Subtotal',
        price: 'Rp. 900.000,00'
      },
      {
        key: '2',
        title: 'Diskon Barang',
        price: 'Rp. 900.000,00',
      },
      {
        key: '2',
        title: 'Diskon Transaksi',
        price: 'Rp. 900.000,00',
      },
      {
        key: '2',
        title: 'Pajak',
        price: 'Rp. 900.000,00',
      },
      {
        key: '2',
        title: 'Biaya Lainnya',
        price: 'Rp. 900.000,00',
      },
      {
        key: '2',
        title: 'Asuaransi',
        price: 'Rp. 900.000,00',
      },
      {
        key: '2',
        title: 'Pembulatan',
        price: 'Rp. 900.000,00',
      },
      {
        key: '2',
        title: 'Total Barang',
        price: 'Rp. 900.000,00',
      },
    ];
    const columns = [
      {
        dataIndex: 'title'
      },
      {
        dataIndex: 'price',
      }
    ];
  return (
    <div>
    <Table dataSource={dataSource} 
    columns={columns} 
    showHeader={false} 
    rowClassName="transactionTableRow"
    pagination={false}/>
    <ChangeTransactionModal 
      visibleTransactionModal={visibleTransactionModal}
      onCancel={onCancelTransactionModal}/>
    </div>
  )
}
export default RightSideBarTransaction
