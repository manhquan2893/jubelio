import React, { Component } from 'react'
import './style.scss'
export class HeaderInfoSection extends Component {
  render() {
    return (
      <div className="headerInfoSection">
        <div className="brand headerInfoItem">
          <div>
            <i class="fab fa-joomla"></i>
            <span className="brandName">Jubelio POS</span>
          </div>
        </div>
        <div className="sliders headerInfoItem icon">
          <i class="fas fa-sliders-h"></i>
        </div>
        <div className="grand headerInfoItem">
          Grand Indonesia - EPSON 1213
        </div>
        <div className="wifi headerInfoItem icon">
          <i className="fas fa-wifi"></i>
        </div>
        <div className="expand headerInfoItem icon">
          <i className="fas fa-expand-alt"></i>
        </div>
        <div className="shoppingCart headerInfoItem icon">
          <i className="fas fa-shopping-cart"></i>
        </div>
        <div className="notificationBell headerInfoItem icon">
          <i className="fas fa-bell"></i>
        </div>
        <div className="profile headerInfoItem">
          <div>
            <i className="fas fa-user"></i>
            <span className="userName">Dika Susanto</span>
          </div>
        </div>
      </div>
    )
  }
}

export default HeaderInfoSection
