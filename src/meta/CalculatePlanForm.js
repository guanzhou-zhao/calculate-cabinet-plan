import React, { Component } from 'react';
import _ from 'lodash';
import Category from '../model/Category';

export default class ClaculatePlanForm extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="piece">
        <input type="text" name="piece-name" placeholder="piece name" defaultValue=""
          onChange={(e)=>{

          }}
        />
        <input type="number" name="piece-qty" placeholder="quantity" defaultValue=""
          onChange={(e)=>{

          }}
        />
        <input type="number" name="piece-cut-height" placeholder="height" defaultValue=""
          onChange={(e)=>{

          }}
        />
        <input type="number" name="piece-cut-width" placeholder="width" defaultValue=""
          onChange={(e)=>{

          }}
        />
        <input type="number" name="piece-fin-height" placeholder="finish height" defaultValue=""
          onChange={(e)=>{

          }}
        />
        <input type="number" name="piece-fin-width" placeholder="finish width" defaultValue=""
          onChange={(e)=>{

          }}
        />
        <input type="text" name="piece-material" placeholder="material" defaultValue=""
          onChange={(e)=>{

          }}
        />
      </div>
    )
  }
}
