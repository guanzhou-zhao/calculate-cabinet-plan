import React, { Component } from 'react'
import ControlForm from './ControlForm'
import Lists from './Lists'
import fakeState from '../../data/fake'
import rules from '../../data/rules'
import update from 'immutability-helper';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = fakeState;
    this.handleListChange = this.handleListChange.bind(this);
    this.handleCalcDimensionChange = this.handleCalcDimensionChange.bind(this);
  }
  handleListChange(newActiveList) {
    this.setState({
      activeList: newActiveList
    });
  }
  handleCalcDimensionChange(d, value) {
    var newState = update(this.state, {
      calcInfo: {
        dimension: {
          [d]: {$set: value}
        }
      }
    });
    this.setState(newState)
  }
  render () {
    return (
      <div>
        <ControlForm
          handleCalcDimensionChange = {this.handleCalcDimensionChange}
          customer = {this.state.customer}
          calcInfo = {this.state.calcInfo} />
        <Lists
        handleListChange = {this.handleListChange}
        calcResult = {this.state.calcResult}
        activeList = {this.state.activeList} />
      </div>
    )
  }
}
