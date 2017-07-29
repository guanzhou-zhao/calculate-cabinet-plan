import React, { Component } from 'react'

export default class ControlForm extends Component {
  render() {
    var customer = this.props.customer;
    var calcInfo = this.props.calcInfo;
    var handleCalcDimensionChange = this.props.handleCalcDimensionChange;
    var handleCalculate = this.props.handleCalculate;
    return (
      <div className="l-top ctl">
          <div className="ctl-part">
              <span className="ctl-part-header">Business info</span>
              <div className="ctl-part-inputs">
                  <input type="text" name="business-code" placeholder="business code" defaultValue={customer.code}/>
                  <input type="text" name="lot-num" placeholder="lot number" defaultValue={customer.lotNum}/>
                  <input type="text" name="customer-name" placeholder="customer name" defaultValue={customer.name}/>
                  <input type="text" name="board-color" placeholder="18mm board color" defaultValue={customer.colorBoard[0].color}/>
              </div>
          </div>
          <div className="ctl-part">
              <span className="ctl-part-header">Board Material</span>
              <div className="ctl-part-inputs">
                  <input type="button" defaultValue="WHITE16" className={calcInfo.is16 ? 'button-isActive' : ''}/>
                  <input type="button" defaultValue="COLOUR18" className={calcInfo.is16 ? ' ' : 'button-isActive'}/>
              </div>
          </div>
          <div className="ctl-part">
              <span className="ctl-part-header">Top Board or Rail</span>
              <div className="ctl-part-inputs">
                  <input type="button" defaultValue="Rail" className={calcInfo.isRail ? 'button-isActive' : ''}/>
                  <input type="button" defaultValue="Top Board" className={calcInfo.isRail ? ' ' : 'button-isActive'}/>
              </div>
          </div>
          <div className="ctl-part">
              <span className="ctl-part-header">Edge Thickness</span>
              <div className="ctl-part-inputs">
                  <input type="button" defaultValue="1mm" className={calcInfo.is1mm ? 'button-isActive' : ''}/>
                  <input type="button" defaultValue="2mm" className={calcInfo.is1mm ? ' ' : 'button-isActive'}/>
              </div>
          </div>
          <div className="ctl-part">
              <span className="ctl-part-header">Cabinet Type</span>
              <div className="ctl-part-inputs">
                  <input type="button" defaultValue="drawer cabinet" className={calcInfo.cabType == 'dr' ? 'button-isActive' : ''}/>
                  <input type="button" defaultValue="open shelf cabinet" className={calcInfo.cabType == 'open-shelf' ? 'button-isActive' : ''}/>
                  <input type="button" defaultValue="fixed shelf cabinet" className={calcInfo.cabType == 'fixed-shelf' ? 'button-isActive' : ''}/>
                  <input type="button" defaultValue="corner cabinet" className={calcInfo.cabType == 'corner' ? 'button-isActive' : ''}/>
                  <input type="button" defaultValue="bin cabinet" className={calcInfo.cabType == 'bin' ? 'button-isActive' : ''}/>
                  <input type="button" defaultValue="plain cabinet (microware or fridge-top cabinet)" className={calcInfo.cabType == 'plain' ? 'button-isActive' : ''}/>
              </div>
          </div>
          <div className="ctl-part">
              <span className="ctl-part-header">Door Type</span>
              <div className="ctl-part-inputs">
                  <input type="button" defaultValue="two doors (left and right open)" className={calcInfo.doorType == 'two' ? 'button-isActive' : ''}/>
                  <input type="button" defaultValue="single door (left or right open)" className={calcInfo.doorType == 'single' ? 'button-isActive' : ''}/>
                  <input type="button" defaultValue="single door (tilt open)" className={calcInfo.doorType == 'tilt' ? 'button-isActive' : ''}/>
                  <input type="button" defaultValue="single door tilt open (two pieces)" className={calcInfo.doorType == 'tilt2' ? 'button-isActive' : ''}/>
              </div>
          </div>
          <div className="ctl-part">
              <span className="ctl-part-header">Dimension of Cabinet</span>
              <div className="ctl-part-inputs">
                  Cabinet Width:<input type="number" placeholder="Cabinet Width" defaultValue={calcInfo.dimension.width} onChange={(e)=>{handleCalcDimensionChange('width', e.target.value)}}/>
                  Cabinet Height:<input type="number" placeholder="Cabinet Height" defaultValue={calcInfo.dimension.height} onChange={(e)=>{handleCalcDimensionChange('height', e.target.value)}}/>
                  Cabinet Depth:<input type="number" placeholder="Cabinet Depth" defaultValue={calcInfo.dimension.depth} onChange={(e)=>{handleCalcDimensionChange('depth', e.target.value)}}/>
              </div>
              <div>
                {`width height depth: ${calcInfo.dimension.width} ${calcInfo.dimension.height} ${calcInfo.dimension.depth}`}
              </div>
          </div>
          <div className="ctl-part">
              <span className="ctl-part-header">Operations</span>
              <div className="ctl-part-inputs">
                  <input type="button" defaultValue="Calculate" onClick={handleCalculate}/>
              </div>
          </div>
      </div>
    )
  }
}
