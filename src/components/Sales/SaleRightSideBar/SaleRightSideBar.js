import React, { Component } from 'react'
import {connect} from 'react-redux'
import SaleRightSideBarNoItem from './SaleRightSideBarNoItem/SaleRightSideBarNoItem'
import SaleRightSideBarWithItem from './SaleRightSideBarWithItem/SaleRightSideBarWithItem'
export class SaleRightSideBar extends Component {
  render() {
    let selectedItems= this.props.selectedItems
    return (
      <div className="saleRightSideBar">
        { selectedItems.length>0 ? (
          <SaleRightSideBarWithItem />
        ):
          <SaleRightSideBarNoItem />
        }
        
      </div>
    )
  }
}
const mapStateToProps = state =>{
  return{
    selectedItems: state.sale.selectedItems
  }
}
export default connect(mapStateToProps,null)(SaleRightSideBar)
