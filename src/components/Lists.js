import React, { Component } from 'react'
import CabinetList from './CabinetList'
import DimensionList from './DimensionList'
import QuantityList from './QuantityList'
export default class Lists extends Component {
  getActiveList(activeListName, result) {
    var activeList = <CabinetList />;
    switch (activeListName) {
      case "cab":
        activeList = <CabinetList calcResult = {result}/>;
        break;
      case "dimension":
        activeList = <DimensionList calcResult = {result}/>;
        break;
      case "quantity":
        activeList = <QuantityList calcResult = {result}/>;
        break;
      default:
        activeList = <CabinetList calcResult = {result}/>;
        break;
    }

    return activeList;
  }
  render() {
    return (
      <div className="l-content lists">
        <div className="lists-menu">
            <div className="lists-menu-item">ordered by cabinet</div>
            <div className="lists-menu-item">ordered by dimension</div>
            <div className="lists-menu-item">grounped by dimension</div>
        </div>
        {
          this.getActiveList(this.props.activeList, this.props.calcResult)
        }
      </div>
    )
  }
}
