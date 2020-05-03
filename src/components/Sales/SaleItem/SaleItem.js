import React, { Component } from 'react'
import {connect} from 'react-redux'
import {SELECT_SALE_ITEM} from 'constants/actionTypes'
import './style.scss'
export class SaleItem extends Component {
  selectSaleItem(itemGroupId){
    this.props.selectSaleItem(itemGroupId)
  }
  render() {
    let thumbnail= this.props.thumbnail ? this.props.thumbnail : null
    let itemName= this.props.itemName ? this.props.itemName : null
    let sellPrice = this.props.sellPrice ? this.props.sellPrice : null
    let itemGroupId = this.props.itemGroupId ? this.props.itemGroupId : null
    return (
      <div className="saleItem" onClick={()=>this.selectSaleItem(itemGroupId)}>
        <div className="saleItemImage">
          <img src={thumbnail} alt=""/>
        </div>
        <div className="saleItemInfo">
          <div className="itemName">
            {itemName}
          </div>
          <div className="itemPrice">
            {sellPrice}
          </div>
        </div>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    selectSaleItem: (payload)=>{
      dispatch({type:SELECT_SALE_ITEM,payload})
    }
  }
}
export default connect(null,mapDispatchToProps)(SaleItem)
