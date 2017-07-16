import React, { Component } from 'react'

export default class ControlForm extends Component {
  render() {
    return (
      <div className="l-top ctl">
          <div className="ctl-part">
              <span className="ctl-part-header">Business info</span>
              <div className="ctl-part-inputs">
                  <input type="text" name="business-code" placeholder="business code" />
                  <input type="text" name="lot-num" placeholder="lot number" />
                  <input type="text" name="customer-name" placeholder="customer name" />
                  <input type="text" name="board-color" placeholder="18mm board color" />
              </div>
          </div>
          <div className="ctl-part">
              <span className="ctl-part-header">Top or Bottom Cabinet</span>
              <div className="ctl-part-inputs">
                  <input type="button" value="Top Cabinet" />
                  <input type="button" value="Bottom Cabinet" />
              </div>
          </div>
          <div className="ctl-part">
              <span className="ctl-part-header">Cabinet Type</span>
              <div className="ctl-part-inputs">
                  <input type="button" value="drawer cabinet" />
                  <input type="button" value="open shelf cabinet" />
                  <input type="button" value="fixed shelf cabinet" />
                  <input type="button" value="corner cabinet" />
                  <input type="button" value="bin cabinet" />
                  <input type="button" value="plain cabinet (microware or fridge-top cabinet)" />
              </div>
          </div>
          <div className="ctl-part">
              <span className="ctl-part-header">Door Type</span>
              <div className="ctl-part-inputs">
                  <input type="button" value="two doors (left and right open)" />
                  <input type="button" value="single door (left or right open)" />
                  <input type="button" value="single door (tilt open)" />
                  <input type="button" value="single door tilt open (two pieces)" />
              </div>
          </div>
          <div className="ctl-part">
              <span className="ctl-part-header">Dimension of Cabinet</span>
              <div className="ctl-part-inputs">
                  <input type="number" placeholder="Cabinet Width" />
                  <input type="number" placeholder="Cabinet Depth" />
                  <input type="number" placeholder="Cabinet Height" />
              </div>
          </div>
          <div className="ctl-part">
              <span className="ctl-part-header">Operations</span>
              <div className="ctl-part-inputs">
                  <input type="button" value="Calculate"/>
              </div>
          </div>
      </div>
    )
  }
}
