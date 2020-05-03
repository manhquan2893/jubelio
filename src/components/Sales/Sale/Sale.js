import React, { Component } from 'react'
import {connect} from 'react-redux'
import SaleMainContent from 'components/Sales/SaleMainContent/SaleMainContent'
import SaleRightSideBar from 'components/Sales/SaleRightSideBar/SaleRightSideBar'
import SaleOpeningCashModal from 'components/Sales/SaleOpeningCashModal/SaleOpeningCashModal'
import HeaderInfoSection from 'components/Sales/HeaderInfoSection/HeaderInfoSection'
import LeftSidebar from 'components/Sales/LeftSideBar/LeftSideBar'
import api from 'services/api'
import {GET_LOCATION_ITEMS} from 'constants/actionTypes'
import './style.scss'
export class Sale extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleOpeningCashModal: false
    }
  }

  onCancelOpeningCashModal(){
    this.setState({
      visibleOpeningCashModal: false
    })
  }
  componentDidMount(){
    let locationItemsPromise = api.sale.getLocationItems()
    this.props.getLocationItems(locationItemsPromise)
  }
  render() {
    return (
      <div className="sale">
        <HeaderInfoSection />
        <div className="main-container">
          <LeftSidebar />
          <div className="saleSection">
            <SaleMainContent />
            <SaleRightSideBar />
            <SaleOpeningCashModal visible={this.state.visibleOpeningCashModal}
            onCancel={()=>{this.onCancelOpeningCashModal()}}
            />
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state =>{
  return{
    isAuthenticated: state.auth.isAuthenticated,
    isOpeningCash: state.common.posSettings.opening_cash
  }
}
const mapDispatchToProps = dispatch =>{
  return {
    getLocationItems: (payload)=>{
      dispatch({type: GET_LOCATION_ITEMS, payload})
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Sale)
