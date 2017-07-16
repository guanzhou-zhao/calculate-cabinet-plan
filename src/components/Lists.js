import React, { Component } from 'react'
import CabinetList from './CabinetList'
import DimensionList from './DimensionList'
import QuantityList from './QuantityList'
export default class Lists extends Component {
  render() {
    return (
      <div className="l-content lists">
        <div className="lists-menu">
            <div className="lists-menu-item">ordered by cabinet</div>
            <div className="lists-menu-item">ordered by dimension</div>
            <div className="lists-menu-item">grounped by dimension</div>
        </div>
        <CabinetList />
        <DimensionList />
        <QuantityList />
      </div>
    )
  }
}
