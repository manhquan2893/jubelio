import React, { Component } from 'react'
import {connect} from 'react-redux'
import SaleItem from '../SaleItem/SaleItem'
import loading from './loading.svg'
import './style.scss'
export class SaleItemList extends Component {
  render() {
    let locationItems = this.props.locationItems
    return (
      <div className="saleItemList">
        {
          locationItems ? (
            locationItems.length !== 0 ? (
              locationItems.map((item)=>{
                return <SaleItem itemName={item.item_name} 
                thumbnail={item.thumbnail}
                sellPrice={item.variants[0].sell_price}
                itemGroupId={item.item_group_id}/>
              })
            ):
            <p>there is no items</p>
          ):
          (<div>
            <img src={loading} alt="" style={{width:'125px',height:'125px'}}/>
          </div>)
        }
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    locationItems : state.sale.locationItems
  }
}
export default connect(mapStateToProps,null)(SaleItemList)

