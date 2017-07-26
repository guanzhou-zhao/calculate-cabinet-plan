import React, { Component } from 'react'
import ControlForm from './ControlForm'
import Lists from './Lists'
import fakeState from '../../data/fake'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = fakeState;
    this.handleListChange = this.handleListChange.bind(this);
  }
  handleListChange(newActiveList) {
    this.setState({
      activeList: newActiveList
    });
  }
  render () {
    return (
      <div>
        <ControlForm
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
