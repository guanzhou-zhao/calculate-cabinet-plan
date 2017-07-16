import React, { Component } from 'react'
import ControlForm from './ControlForm'
import Lists from './Lists'
export default class App extends Component {
  render () {
    return (
      <div>
        <ControlForm />
        <Lists />
      </div>
    )
  }
}
