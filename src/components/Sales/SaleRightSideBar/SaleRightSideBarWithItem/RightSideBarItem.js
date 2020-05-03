import React, {useState} from 'react'
import {connect} from 'react-redux'
import { Button, Popover } from 'antd'
import {INCREASE_ITEM_QUANTITY,
  DECREASE_ITEM_QUANTITY,
  DELETE_RIGHT_SIDEBAR_ITEM,
  MAKE_ITEM_DISCOUNT} from 'constants/actionTypes'
import ChangeItemModal from 'components/Sales/ChangeItemModal/ChangeItemModal'
import DiscountItemPopover from 'components/Sales/DiscountItemPopover/DiscountItemPopover'

const RightSideBarItem = (props) => {
  const [isShowChangeItemModal,showChangeItemModal] = useState(false)
  const  [visiblePopover, setVisiblePopover] = useState(false)
  const onCancelChangeItemModal = () => {
    showChangeItemModal(false)
  }
  const deleteItem = (itemGroupId) =>{
    props.deleteRightSidebarItem(itemGroupId)
  }
  const popoverContent=(
    <div onClick={()=>{
      deleteItem(props.itemGroupId)
    
    }}>Delete</div>
  )
  const makeDiscount = (percent) => {
    let itemGroupId = props.itemGroupId
    props.makeItemDiscount({itemGroupId,percent})
  }
  const isHaveAdditionalItem = props.itemQuantity > 1
    return (
      <div className="rightSideBarItem" >
        <DiscountItemPopover 
        isHaveAdditionalItem={isHaveAdditionalItem}
        itemQuantity={props.itemQuantity}
        itemGroupId={props.itemGroupId}
        />
        <div className="inner" >
          <div className="itemImage" onClick={()=>{
            showChangeItemModal(true)
            }}>
            <img src={props.thumbnail} alt=""/>
          </div>
          <div className="content">
            <div className="itemInfo">
              <div className="title" onClick={()=>{
                showChangeItemModal(true)}
                }>{props.itemName}</div>
              <div className="sku">{props.itemCode}</div>
              <div class='bottom'>
                <div className="upDownQuantity">
                <Button size="small" onClick={()=>
                  {
                    if(props.itemQuantity>1){
                      props.decreaseItemQuantity(props.itemGroupId)
                    }
                  }}>
                  <i class="fa fa-minus" ></i>
                </Button>
                <div className="quantity">{props.itemQuantity}</div>
                <Button size="small" onClick={()=>{
                  props.increaseItemQuantity(props.itemGroupId)
                  }
                  }>
                  <i class="fa fa-plus" ></i>
                </Button>
                </div>
                {
                  props.customDiscount ? (
                    <div className="customDiscount">Diskon {props.customDiscount} %</div>
                  ):null
                }
                
              </div>
            </div>
            <div className="priceSection">
              <div className="otherPrice">@Rp. 150.000,00</div>
              <div className="price">Rp. 400.000,00</div>
              <div className="linethroughPrice">Rp. 150.000,00</div>
            </div>
            
          </div>
        </div>
        
        <div className="ellipsisButton">
          <Popover
            title={null}
            trigger="click"
            visible={visiblePopover}
            onVisibleChange={setVisiblePopover}
            placement="bottom"
            overlayClassName="rightSidebarItemPopover"
            content={popoverContent}
          >
            <div>
              <i class="fas fa-ellipsis-v"></i>
            </div>
          </Popover>
        </div>
        <ChangeItemModal isShowChangeItemModal={isShowChangeItemModal}
        itemName={props.itemName}
        sellPrice={props.sellPrice}
        itemCode={props.itemCode}
        available={props.available}
        onClose={onCancelChangeItemModal}
        thumbnail={props.thumbnail}
        makeDiscount={makeDiscount}
        />
        
      </div>
    )
  }
const mapDispatchToProps = dispatch =>{
  return{
    increaseItemQuantity: (payload)=>{
      dispatch({type:INCREASE_ITEM_QUANTITY,payload})
    },
    decreaseItemQuantity: (payload)=>{
      dispatch({type:DECREASE_ITEM_QUANTITY,payload})
    },
    deleteRightSidebarItem: (payload)=>{
      dispatch({type:DELETE_RIGHT_SIDEBAR_ITEM,payload})
    },
    makeItemDiscount: (payload)=>{
      dispatch({type:MAKE_ITEM_DISCOUNT,payload})
    }
  }
  
}

export default connect(null,mapDispatchToProps)(RightSideBarItem)
