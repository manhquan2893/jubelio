import React, { Component } from 'react'
import {connect} from 'react-redux'
import RightSideBarItem from './RightSideBarItem'
import classNames from 'classnames/bind'

export class RightSideBarItemList extends Component {
  render() {
    let selectedItems = this.props.selectedItems ? this.props.selectedItems : []
    let listItemClassName = classNames({
      'rightSideBarItemList': true,
      'hideScroll': selectedItems.length<4
    });
    return (
      <div className={listItemClassName}>
        {
          selectedItems.length > 0 ? (
            selectedItems.map((item)=>{
              return <RightSideBarItem 
              itemGroupId={item.item_group_id}
              itemName={item.item_name}
              itemQuantity={item.itemQuantity}
              sellPrice={item.variants[0].sell_price} 
              itemCode={item.variants[0].item_code}
              thumbnail={item.thumbnail}
              available={item.variants[0].available}
              customDiscount={item.customDiscount}
              showMoreDiscountPopover={this.props.showMoreDiscountPopover}
              />
            })
          ):null
        }
        
      </div>
    )
  }
}
const mapStateToProps = state =>{
  return {
    selectedItems: state.sale.selectedItems
  }
}
export default connect(mapStateToProps,null)(RightSideBarItemList)
