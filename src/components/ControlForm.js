import React, { Component } from 'react'

export default class ControlForm extends Component {
  render() {
    var customer = this.props.customer;
    var calcInfo = this.props.calcInfo;
    var handleCalcDimensionChange = this.props.handleCalcDimensionChange;
    var handleCalculate = this.props.handleCalculate;
    var handleButtonClick = this.props.handleButtonClick;
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
          <div className="ctl-part ctl-part-inline">
              <span className="ctl-part-header">Cabinet Board Material</span>
              <div className="ctl-part-inputs">
                  <input type="button" onClick={()=>{handleButtonClick('isCab16', true)}} defaultValue="WHITE16" className={calcInfo.isCab16 ? 'button-isActive' : ''}/>
                  <input type="button" onClick={()=>{handleButtonClick('isCab16', false)}} defaultValue="COLOUR18" className={calcInfo.isCab16 ? ' ' : 'button-isActive'}/>
              </div>
          </div>
          <div className="ctl-part ctl-part-inline">
              <span className="ctl-part-header">Door and Drawer Board Material</span>
              <div className="ctl-part-inputs">
                  <input type="button" onClick={()=>{handleButtonClick('isDoor16',true)}} defaultValue="WHITE16" className={calcInfo.isDoor16 ? 'button-isActive' : ''}/>
                  <input type="button" onClick={()=>{handleButtonClick('isDoor16', false)}} defaultValue="COLOUR18" className={calcInfo.isDoor16 ? ' ' : 'button-isActive'}/>
              </div>
          </div>
          <div className="ctl-part ctl-part-inline">
              <span className="ctl-part-header">Cabinet Edge Thickness</span>
              <div className="ctl-part-inputs">
                  <input type="button" onClick={()=>{handleButtonClick('isCab1mm', true)}} defaultValue="1" className={calcInfo.isCab1mm ? 'button-isActive' : ''}/>
                  <input type="button" onClick={()=>{handleButtonClick('isCab1mm', false)}} defaultValue="2" className={calcInfo.isCab1mm ? ' ' : 'button-isActive'}/>
              </div>
          </div>
          <div className="ctl-part ctl-part-inline">
              <span className="ctl-part-header">Door and Drawer Edge Thickness</span>
              <div className="ctl-part-inputs">
                  <input type="button" onClick={()=>{handleButtonClick('isDoor1mm', true)}} defaultValue="1" className={calcInfo.isDoor1mm ? 'button-isActive' : ''}/>
                  <input type="button" onClick={()=>{handleButtonClick('isDoor1mm', false)}} defaultValue="2" className={calcInfo.isDoor1mm ? ' ' : 'button-isActive'}/>
              </div>
          </div>
          <div className="ctl-part">
              <span className="ctl-part-header">Top Board or Rail</span>
              <div className="ctl-part-inputs">
                  <input type="button" onClick={()=>{handleButtonClick('isRail', true)}} defaultValue="Rail" className={calcInfo.isRail ? 'button-isActive' : ''}/>
                  <input type="button" onClick={()=>{handleButtonClick('isRail', false)}} defaultValue="Top Board" className={calcInfo.isRail ? ' ' : 'button-isActive'}/>
              </div>
          </div>
          <div className="ctl-part">
              <span className="ctl-part-header">Cabinet Type</span>
              <div className="ctl-part-inputs">
                  <input type="button" onClick={()=>{handleButtonClick('cabType', 'dr')}} defaultValue="drawer cabinet" className={calcInfo.cabType == 'dr' ? 'button-isActive' : ''}/>
                  <input type="button" onClick={()=>{handleButtonClick('cabType', 'open-shelf')}} defaultValue="open shelf cabinet" className={calcInfo.cabType == 'open-shelf' ? 'button-isActive' : ''}/>
                  <input type="button" onClick={()=>{handleButtonClick('cabType', 'fixed-shelf')}} defaultValue="fixed shelf cabinet" className={calcInfo.cabType == 'fixed-shelf' ? 'button-isActive' : ''}/>
                  <input type="button" onClick={()=>{handleButtonClick('cabType', 'corner')}} defaultValue="corner cabinet" className={calcInfo.cabType == 'corner' ? 'button-isActive' : ''}/>
                  <input type="button" onClick={()=>{handleButtonClick('cabType', 'bin')}} defaultValue="bin cabinet" className={calcInfo.cabType == 'bin' ? 'button-isActive' : ''}/>
                  <input type="button" onClick={()=>{handleButtonClick('cabType', 'plain')}} defaultValue="plain cabinet (microware or fridge-top cabinet)" className={calcInfo.cabType == 'plain' ? 'button-isActive' : ''}/>
              </div>
          </div>
          <div className="ctl-part">
              <span className="ctl-part-header">Door Type</span>
              <div className="ctl-part-inputs">
                  <input type="button" onClick={()=>{handleButtonClick('doorType', 'two')}} defaultValue="two doors (left and right open)" className={calcInfo.doorType == 'two' ? 'button-isActive' : ''}/>
                  <input type="button" onClick={()=>{handleButtonClick('doorType', 'single')}} defaultValue="single door (left or right open)" className={calcInfo.doorType == 'single' ? 'button-isActive' : ''}/>
                  <input type="button" onClick={()=>{handleButtonClick('doorType', 'tilt')}} defaultValue="single door (tilt open)" className={calcInfo.doorType == 'tilt' ? 'button-isActive' : ''}/>
                  <input type="button" onClick={()=>{handleButtonClick('doorType', 'tilt2')}} defaultValue="single door tilt open (two pieces)" className={calcInfo.doorType == 'tilt2' ? 'button-isActive' : ''}/>
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
