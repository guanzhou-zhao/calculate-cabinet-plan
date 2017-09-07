import React, { Component } from 'react';
import _ from 'lodash';
import update from 'immutability-helper';
import Category from '../model/Category';
import defaultState from './config'
import CategoryList from './CategoryList'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
    this.updateCategories();
    this.updateCategories = this.updateCategories.bind(this);
    this.getCategoryList = this.getCategoryList.bind(this);
    this.showCategoryAddingForm = this.showCategoryAddingForm.bind(this);
    this.updateState = this.updateState.bind(this);
  }
  componentDidMount() {
    this.setState(update(this.state, {'updateState': {$set: this.updateState}}));
  }
  updateCategories() {
    Category.find((err, categories) => {
      if (err) return console.error(err);

      this.updateState({"categories": {$set: categories}});
    })
  }
  getCategoryList() {

    var categoryList;
    if (_.isEmpty(this.state.categories)) {
      categoryList = <div> No category added.</div>
    } else {
      categoryList = <CategoryList
                        updateCategories={this.updateCategories}
                        categoryInEditing={this.state.categoryInEditing}
                        handleValueChange={this.updateState}
                        categories={this.state.categories}
                        config={this.state}
                      />
    }
    return categoryList;
  }
  updateState(obj) {
    var newState = update(this.state, obj);
    this.setState(newState);
  }
  showCategoryAddingForm() {
    var form = '';
    if (this.state.isAddingCategory) {
      form = (
        <div className='categoryAddingForm'>
          <input type="text" name="category-name" placeholder="Category Name" defaultValue=""
            onChange={(e)=>{
              this.updateState( {categoryAdding: {name: {$set: e.target.value}}})
            }}
          />
          <input type="text" name="category-desc" placeholder="Category Description" defaultValue=""
            onChange={(e)=>{
              this.updateState( {categoryAdding: {desc: {$set: e.target.value}}})
            }}
          />
          <input type="button" value="Save"
            onClick={
              () => {
                var category = new Category(this.state.categoryAdding);
                category.save( (err, category) => {
                  if (err) return console.error(err);

                  this.updateCategories();
                  this.updateState({
                    isAddingCategory: {$set: false},
                    categoryAdding: {
                      $set: {
                        name: '',
                        desc: ''
                      }
                    }
                  })
                });
              }
            }
          />
          <input type="button" value="Calcel"
            onClick={
              () => {
                this.updateState({
                  isAddingCategory: {$set: false},
                  categoryAdding: {
                    $set: {
                      name: '',
                      desc: ''
                    }
                  }
                })
              }
            }
          />
        </div>
      )
    }
    return form;
  }
  render () {
    return (
      <div>
        <div className="control">
          <input type="button" value="Add Category"
            onClick={
              ()=>{
                if (!this.state.isAddingCategory) {
                  this.updateState({isAddingCategory: {$set: true}})
                }
              }
            }
          />
          {this.showCategoryAddingForm()}
        </div>
        <div className="list">
          {this.getCategoryList()}
        </div>
      </div>
    )
  }
}
