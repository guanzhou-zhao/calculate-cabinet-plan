import React, { Component } from 'react';
import _ from 'lodash';
import Category from '../model/Category';

export default class CalculatePlanForm extends Component {
  constructor(props) {
    super(props);
    this.updateCalculatePlanInState = this.updateCalculatePlanInState.bind(this);
    this.getAddingPieceForm = this.getAddingPieceForm.bind(this);
  }

  updateCalculatePlanInState(isCab, propName, propValue) {
    if (isCab) {
      this.props.config.updateState({
        cabPlanAdding: {
          [propName]: { $set: propValue}
        }
      })
    } else {
      this.props.config.updateState({
          pieceAdding: {
            [propName]: { $set: propValue}
          }
      })
    }
  }
  getAddingPieceForm() {
    var result;
    if (this.props.config.isAddingPiece) {
      result = (<div className="addingPieceForm">
        <input type="text" name="piece-name" placeholder="piece name" defaultValue=""
        onChange={(e)=>{
          this.updateCalculatePlanInState(false, 'name', e.target.value);
        }}
        />
        <input type="number" name="piece-qty" placeholder="quantity" defaultValue=""
        onChange={(e)=>{
          this.updateCalculatePlanInState(false, 'qty', e.target.value);
        }}
        />
        <input type="number" name="piece-cut-height" placeholder="height" defaultValue=""
        onChange={(e)=>{
          this.updateCalculatePlanInState(false, 'height', e.target.value);
        }}
        />
        <input type="number" name="piece-cut-width" placeholder="width" defaultValue=""
        onChange={(e)=>{
          this.updateCalculatePlanInState(false, 'width', e.target.value);
        }}
        />
        <input type="number" name="piece-fin-height" placeholder="finish height" defaultValue=""
        onChange={(e)=>{
          this.updateCalculatePlanInState(false, 'fiHeight', e.target.value);
        }}
        />
        <input type="number" name="piece-fin-width" placeholder="finish width" defaultValue=""
        onChange={(e)=>{
          this.updateCalculatePlanInState(false, 'fiWidth', e.target.value);
        }}
        />
        <input type="text" name="piece-material" placeholder="material" defaultValue=""
        onChange={(e)=>{
          this.updateCalculatePlanInState(false, 'material', e.target.value);
        }}
        />
        <input type="button" value="Save" onClick={ ()=> {
            this.props.config.updateState({
              pieces: { $push: [this.props.config.pieceAdding]},
              pieceAdding: {$set: {} },
              isAddingPiece: {$set: false}
            });
          }}
        />
      </div>);
    } else {
      result = (
        <input type="button" value="add one piece" onClick={()=> {
          this.props.config.updateState({
            isAddingPiece: {$set: true}
          });
        }} />
      );
    }
    return '  ';
  }
  render () {
    var config = this.props.config;
    var updateState = config.updateState;
    var cabPlanAddingFor = config.cabPlanAddingFor;
    return (
      <div className="cab">
        <div className="cabSummary">
          <input type="text" name="cab-name" placeholder="cab name" defaultValue=""
          onChange={(e)=>{
            this.updateCalculatePlanInState(true, 'name', e.target.value);
          }}
          />
          <input type="text" name="cab-desc" placeholder="cab Description" defaultValue=""
          onChange={(e)=>{
            this.updateCalculatePlanInState(true, 'desc', e.target.value);
          }}
          />
          <input type="button" value="save" onClick={()=> {
            // console.log(cabPlanAddingFor.toString());
            //
            // Category.update(cabPlanAddingFor,
            //   { cabs: {$push: [config.cabPlanAdding]}},
            //   {upsert: true},
            //   (err, doc)=> {
            //     console.log(doc)
            //     updateState({
            //       isAddingCabPlan: { $set: false},
            //       cabPlanAddingFor: { $set: ''}
            //     });
            // })
            Category.findById(cabPlanAddingFor, (err, cat)=> {
              cat.cabs.push(config.cabPlanAdding);
              cat.save((err)=> {
                updateState({
                  isAddingCabPlan: { $set: false},
                  cabPlanAddingFor: { $set: ''}
                });
                config.updateCategories();
              })
            })
          }} />
          <input type="button" value="cancel" onClick={()=> {
            updateState({
              isAddingCabPlan: { $set: false},
              cabPlanAddingFor: { $set: ''}
            });
          }} />
        </div>
        <div className="pieces">
         {this.getAddingPieceForm()}
        </div>
      </div>
    )
  }
}
