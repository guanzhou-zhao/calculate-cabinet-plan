import React, { Component } from 'react';
import _ from 'lodash';
import Category from '../model/Category';
import CalculatePlanForm from './CalculatePlanForm'

export default class ClaculatePlanList extends Component {
  constructor(props) {
    super(props);
    this.showCalculatePlanForm = this.showCalculatePlanForm.bind(this);
  }


  showCalculatePlanForm() {
    var category = this.props.cat;
    var addingCalculatePlan = this.props.config.addingCalculatePlan;
    var updateState = this.props.config.updateState;
    var result;
    if (addingCalculatePlan.isAdding && category._id.equals(addingCalculatePlan.addingFor)) {
      result = <CalculatePlanForm />
    } else {
      result = <input type="button" value="Add Calculate Plan"
                  onClick={()=> {
                    updateState({
                      addingCalculatePlan: {
                        $set: {
                          isAdding: true,
                          addingFor: category._id
                        }
                      }
                    });
                    }}
                />
    }
    return result;
  }
  render () {
    return (
      <div className="CalculatePlan">
        <div className="CalculatePlanList">

        </div>
        {this.showCalculatePlanForm()}
      </div>
    )
  }
}
