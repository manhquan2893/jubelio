import React,{Component} from 'react'
import DiscountFreeItemPopover from 'components/Sales/DiscountFreeItemPopover/DiscountFreeItemPopover'
import './style.scss'

export class RightSidebarFreeItem extends Component {
  constructor(){
    super()
    this.state={
      visibleDiscountPopover:false
    }
  }
  shouldComponentUpdate(nextProps){
    console.log(1)
    if(nextProps.addedFreeItemGroupId &&
      nextProps.addedFreeItemGroupId !== this.props.addedFreeItemGroupId &&
      nextProps.addedFreeItemGroupId === this.props.itemGroupId){
        this.setState({
          visibleDiscountPopover:true
        })
      }
    return true
  }
  render() {
    console.log(this.state.visibleDiscountPopover)
    return (
      <div className="rightSidebarFreeItem" >
        <DiscountFreeItemPopover visibleDiscountPopover={this.state.visibleDiscountPopover}/>
        <div className="inner" >
          <div className="itemImage">
            <img src={this.props.thumbnail} alt=""/>
          </div>
          <div className="content">
            <div className="itemInfo">
              <div className="title">{this.props.itemName}</div>
              <div className="sku">{this.props.itemCode}</div>
            </div>
            
          </div>
        </div>
      </div>
    )
  }
}

export default RightSidebarFreeItem

