import { GET_LOCATION_ITEMS,
  SELECT_SALE_ITEM,INCREASE_ITEM_QUANTITY,
  DECREASE_ITEM_QUANTITY,
  DELETE_RIGHT_SIDEBAR_ITEM,
  MAKE_ITEM_DISCOUNT} from "../constants/actionTypes";

let initSale = {
  selectedItems:[]
}
export default (state = initSale, action) => {
    switch (action.type) {
      case GET_LOCATION_ITEMS:
        return {
          ...state,
          locationItems: action.payload.data.filter((item)=>{
            return item.thumbnail != null
          })
        }
      case SELECT_SALE_ITEM:
        let selectedItem = state.locationItems.find((item)=>{
          return item.item_group_id === action.payload
        })
        if(state.selectedItems.some(item => item.item_group_id === selectedItem.item_group_id)){
          state.selectedItems.find(item=>item.item_group_id===selectedItem.item_group_id).itemQuantity +=1
          return {...state,selectedItems:state.selectedItems.slice(0)}
          }
        else{
          selectedItem.itemQuantity = 1
          return {
            ...state,
            selectedItems:[...state.selectedItems,selectedItem]
          }
        }
      case INCREASE_ITEM_QUANTITY:
        state.selectedItems.find(item=>item.item_group_id===action.payload).itemQuantity +=1
        return {...state,selectedItems:state.selectedItems.slice(0)}
      case DECREASE_ITEM_QUANTITY:
        state.selectedItems.find(item=>item.item_group_id===action.payload).itemQuantity -=1
        return {...state,selectedItems:state.selectedItems.slice(0)}
      case DELETE_RIGHT_SIDEBAR_ITEM:
        state.selectedItems= state.selectedItems.filter(item => item.item_group_id !== action.payload)
        return {...state}
      case MAKE_ITEM_DISCOUNT:
        state.selectedItems.find(
          (item)=>item.item_group_id === action.payload.itemGroupId)
          .customDiscount = action.payload.percent
        return {...state,selectedItems:state.selectedItems.slice(0)}
      default:
        return state;
    }
  };