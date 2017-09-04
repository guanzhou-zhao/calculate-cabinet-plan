import React, { Component } from 'react';
import _ from 'lodash';
import Category from '../model/Category';
import defaultState from './config';
import CalculatePlanList from './CalculatePlanList'

export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.getCategoryList = this.getCategoryList.bind(this);
  }
  getCategoryList() {
    var categoryList = [];
    return this.props.categories.reduce((accumulator, cat, currentIndex, array)=> {
      if (cat._id.equals(this.props.categoryInEditing.id)) {
        accumulator.push(
          <div className='categoryAddingForm' key={currentIndex}>
            <input type="text" name="category-name" placeholder="Category Name" defaultValue={cat.name}
              onChange={(e)=>{
                this.props.handleValueChange( {categoryInEditing: {obj: { name: {$set: e.target.value}}}})
              }}
            />
            <input type="text" name="category-desc" placeholder="Category Description" defaultValue={cat.desc}
              onChange={(e)=>{
                this.props.handleValueChange( {categoryInEditing: {obj: { desc: {$set: e.target.value}}}})
              }}
            />
            <input type="button" value="Save"
              onClick={
                () => {
                  cat.update(this.props.categoryInEditing.obj, ()=> {
                    this.props.handleValueChange( {categoryInEditing: {id: { $set: ''}}})
                    this.props.updateCategories();
                  })
                }
              }
            />
            <input type="button" value="Calcel"
              onClick={
                () => {this.props.handleValueChange( {categoryInEditing: {id: { $set: ''}}}) }
              }
            />
            <CalculatePlanList config={this.props.config} />
          </div>
        );
      } else {
        accumulator.push(<div className="category" key={currentIndex}>

        <h3 className="category-detail">
          <span className="category-name">{cat.name}    </span>
          <span className="category-desc">{cat.desc}</span>
        </h3>
        <div className="category-action">
        <input type="button" onClick={
          ()=>{
              this.props.handleValueChange({'categoryInEditing': {'id': {$set: cat._id}}})
          }
        } value="Edit"/>
        </div>
        <CalculatePlanList cat={cat} config={this.props.config} />
        </div>);
      }
      return accumulator;
    }, categoryList);
  }
  render () {
    return (
      <div>
        {this.getCategoryList()}
      </div>
    )
  }
}
