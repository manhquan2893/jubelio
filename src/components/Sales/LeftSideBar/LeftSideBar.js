import React, { Component } from 'react'
import { Layout, Menu } from 'antd'
import './style.scss'

const { Sider } = Layout;

export class LeftSidebBar extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <div className="leftSideBar">
        <ul>
          <li>Penjualan</li>
          <li>Daftar Transaksi</li>
          <li>Tutup Kasir</li>
        </ul>
      </div>
    )
  }
}

export default LeftSidebBar

