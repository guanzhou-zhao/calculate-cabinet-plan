import React, { Component } from 'react';
import _ from 'lodash';
import Category from '../model/Category';
import CabPlanForm from './CabPlanForm'

export default class ClaculatePlanList extends Component {
  constructor(props) {
    super(props);
    this.showCabPlanForm = this.showCabPlanForm.bind(this);
    this.showCabPlanList = this.showCabPlanList.bind(this);
  }


  showCabPlanForm() {
    var category = this.props.cat;
    // console.log(this.props.cat._id)
    var updateState = this.props.config.updateState;
    var result;
    if (this.props.config.isAddingCabPlan && category._id.equals(this.props.config.cabPlanAddingFor)) {
      result = <CabPlanForm config={this.props.config}/>
    } else {
      result = <input type="button" value="Add Cab Plan"
                  onClick={()=> {
                    updateState({
                      isAddingCabPlan: { $set: true},
                      cabPlanAddingFor: { $set: category._id}
                    });
                    }}
                />
    }
    return result;
  }
  showCabPlanList() {
    var result = '';
    var cat = this.props.cat;
    console.log(`cat ${cat}`)
    if (cat.cabs && cat.cabs.length > 0) {
      result = cat.cabs.reduce((accumulator, cabPlan, currentIndex, array)=> {
        accumulator.push(
          <div className="cabPlanListItem">
            <span>{cabPlan.name}</span> <span> {cabPlan.desc}</span>
          </div>
        );
        return accumulator;
      }, []);
    }
    return result;
  }
  render () {
    return (
      <div className="CabPlan">
        <div className="CabPlanList">
          {this.showCabPlanList()}
        </div>
        {this.showCabPlanForm()}
      </div>
    )
  }
}
