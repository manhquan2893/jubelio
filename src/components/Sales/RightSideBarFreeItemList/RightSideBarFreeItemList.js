import React, {Component} from 'react'
import {connect} from 'react-redux'
import RightSidebarFreeItem from 'components/Sales/RightSidebarFreeItem/RightSidebarFreeItem'
import classNames from 'classnames/bind'
import './style.scss'

export class RightSidebarFreeItemList extends Component {
  constructor(){
    super()
    this.state={
      addedFreeItemGroupId: null
    }
  }
  shouldComponentUpdate(nextProps){
    if(nextProps.freeItems && 
      nextProps.freeItems.length > this.props.freeItems.length){
        let addedFreeItem=nextProps.freeItems.find(item=>{
          return !this.props.freeItems.includes(item)
        })
        this.setState({addedFreeItemGroupId:addedFreeItem.item_group_id})
      }
    return true
  }
  render() {
    let listFreeItemClassName = classNames({
      'rightSidebarFreeItemList': true,
      'hideScroll': this.props.freeItems.length<3
    });
    return (
      <div>
        <div className="freeStuff">
            BARANG GRATIS
        </div>
        <div className={listFreeItemClassName}>
        {
          this.props.freeItems.map((item)=>{
            return <RightSidebarFreeItem isFreeItem={true} 
            addedFreeItemGroupId={this.state.addedFreeItemGroupId}
            itemName={item.item_name}
            itemCode={item.variants[0].item_code}
            thumbnail={item.thumbnail}
            itemQuantity={item.itemQuantity}
            itemGroupId={item.item_group_id}/>
          })
        }
        </div>
      </div>
    )
  }
}
const mapStateToProps = state =>{
  return {
    freeItems: state.sale.selectedItems.filter((item=>{
      return item.itemQuantity>1
    }))
  }
}

export default connect(mapStateToProps,null)(RightSidebarFreeItemList)

