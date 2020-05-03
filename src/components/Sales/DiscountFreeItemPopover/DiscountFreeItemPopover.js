import React, {Component} from 'react'
import {Popover, Button} from 'antd'
import classNames from 'classnames/bind'

export class DiscountFreeItemPopover extends Component {
  constructor(){
    super()
    this.state={
      visible:false
    }
    this.handleVisibleChange = this.handleVisibleChange.bind(this)
  }
  handleVisibleChange(visible){
    if(visible===true){
      return
    }
    this.setState({visible})
  }
  shouldComponentUpdate(nextProps){
    console.log(nextProps.visibleDiscountPopover)
    if(nextProps.visibleDiscountPopover !== this.props.visibleDiscountPopover &&
      nextProps.visibleDiscountPopover ===true){
        this.setState({
          visible:true
        })
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
      'discountItemBtn':true
    });
    return (
      <Popover
      placement="left"
      content={myText1}
      visible={this.state.visible}
      onVisibleChange={this.handleVisibleChange}
      trigger="click"
      overlayClassName={popoverClassName}>
      <Button className={btnClass}></Button>
      </Popover>
    )
  }
}

export default DiscountFreeItemPopover
