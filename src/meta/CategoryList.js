import React, { Component } from 'react';
import _ from 'lodash';
import update from 'immutability-helper';
import Category from '../model/Category';
import defaultState from './config'

export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.getCategoryList = this.getCategoryList.bind(this);
  }
  getCategoryList() {
    var categoryList = [];
    return this.props.categories.reduce((accumulator, cat, currentIndex, array)=> {
      accumulator.push(<div className="category" key={currentIndex}>
        <div className="category-head">
          <h3 className="category-name">{cat.name}</h3>
          <span className="category-desc">{cat.desc}</span>
        </div>
        <div className="category-content">

        </div>
      </div>);
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
