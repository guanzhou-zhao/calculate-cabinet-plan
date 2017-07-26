import React, { Component } from 'react'

export default class QuantityList extends Component {
  getGroupRows(map, groupName) {
    var groupRows = [];

    map.forEach( function (value, k, m){
      var sizes = k.split('*');
      groupRows.push(
        <tr key={k}>
            <td>{map.get(k)}</td>
            <td>{sizes[0]}</td>
            <td>{sizes[1]}</td>
            <td>{groupName.toUpperCase()}</td>
        </tr>
      );
    })

    return groupRows;
  }
  getGroupDiv(group, groupName) {

    var qtyAggregatedMap = new Map();
    for (const p of group) {
      var key = `${p.cutHt}*${p.cutWd}`;
      if (qtyAggregatedMap.has(key)) {
        qtyAggregatedMap.set(key, qtyAggregatedMap.get(key) + p.qty);
      } else {
        qtyAggregatedMap.set(key, p.qty);
      }
    }
    return (
      <div className="list-qtygroup-part" key={groupName}>
          <span className="list-qtygroup-part-name">{groupName.toUpperCase()}</span>
          <div className="list-qtygroup-part-detail">
              <table className="table table-hover">
                <tbody>
                  <tr>
                      <th>Qty</th>
                      <th>CutHt</th>
                      <th>CutWd</th>
                      <th>Material</th>
                  </tr>
                  {this.getGroupRows(qtyAggregatedMap, groupName)}
                </tbody>
              </table>
          </div>
      </div>
    );
  }
  sortPieces(piece1, piece2) {
    var diff;
    var cutHtDiff = piece1.cutHt - piece2.cutHt;
    if (cutHtDiff == 0) {
      diff = piece1.cutWd - piece2.cutWd;
    } else {
      diff = cutHtDiff;
    }

    return diff;
  }
  getGroupDivs(calcResult) {
    var groupDivs = [];
    var groups = {
      white16: [],
      colorBoard: []
    };
    for (const cab of calcResult) {
      for (const piece of cab.pieces) {
        if (piece.material == 'WHITE16') {
          groups.white16.push(piece);
        } else {
          groups.colorBoard.push(piece);
        }
      }
    }
    groupDivs.push(this.getGroupDiv(groups.white16.sort(this.sortPieces), 'white16'));
    groupDivs.push(this.getGroupDiv(groups.colorBoard.sort(this.sortPieces), 'colorBoard'));
    return groupDivs;
  }
  render () {
    return (
      <div className="list list-qtygroup">
          {this.getGroupDivs(this.props.calcResult)}
      </div>
    )
  }
}
