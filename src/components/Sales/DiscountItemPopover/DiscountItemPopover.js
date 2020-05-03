import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Popover, Button } from 'antd'
import classNames from 'classnames/bind'
import './style.scss'


export class DiscountItemPopover extends Component {
  constructor(){
    super()
    this.state={
      visiblePopover:false
    }
    this.handlePopover=this.handlePopover.bind(this)
  }
  setVisiblePopover(visible){
    this.setState({
      visiblePopover:visible
    })
  }
  handlePopover(visible){
    if(this.props.isHaveAdditionalItem){
      this.setVisiblePopover(visible)
    }
  }
  shouldComponentUpdate(nextProps){
    // console.log(nextProps.clickedItemGroupId)
    console.log(this.props.itemGroupId)
    if( nextProps.itemQuantity !== this.props.itemQuantity && 
      nextProps.itemQuantity === 2 ){
      this.setVisiblePopover(true)
    }
    return true
  }
  render() {
    const myText1 = (
      <div>
        <p>Beli 3 diskon 50 rb</p> 
        <p>Rp. 50.000,00</p>
      </div>
      )
    const popoverClassName = classNames({
      'discountItemPopover': true
    });
    const btnClass = classNames({
      'discountItemBtn':true,
      'isHaveAdditionalItem':this.props.isHaveAdditionalItem
    });
    return (
      <div>
        <Popover
        placement="left"
        content={myText1}
        trigger="click"
        visible={this.state.visiblePopover}
        onVisibleChange={this.handlePopover}
        overlayClassName={popoverClassName}
        >
        <Button className={btnClass}></Button>
      </Popover>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    
  }
}
const mapStateToProps = state => {
  return {
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(DiscountItemPopover)


