import React, { Component } from 'react'

export default class DimensionList extends Component {
  getGroupRows(pieces) {
    var rows = [];
    for (const p of pieces) {
      rows.push(
        <tr>
            <td>{p.qty}</td>
            <td>{p.desc}</td>
            <td>{p.cabInfo.cabNum}</td>
            <td>{p.cutHt}</td>
            <td>{p.cutWd}</td>
            <td>{p.finHt}</td>
            <td>{p.finWd}</td>
            <td>{p.edge.L ? 'Y' : ''}</td>
            <td>{p.edge.R ? 'Y' : ''}</td>
            <td>{p.edge.T ? 'Y' : ''}</td>
            <td>{p.edge.B ? 'Y' : ''}</td>
            <td> </td>
            <td> </td>
            <td>1.0</td>
        </tr>
      );
    }
    return rows;
  }
  getGroupDiv(group, groupName) {
    return (
      <div className={`list-dimension-group list-dimension-group-${groupName}`}>
          <span className="list-dimension-group-name">{groupName.toUpperCase()}</span>
          <div className="list-dimension-group-detail">
              <table className="table table-hover">
                <tbody>
                  <tr>
                      <th>Qty</th>
                      <th>Description</th>
                      <th>Cab#</th>
                      <th>CutHt</th>
                      <th>CutWd</th>
                      <th>FinHt</th>
                      <th>FinWd</th>
                      <th>L</th>
                      <th>R</th>
                      <th>T</th>
                      <th>B</th>
                      <th>HL</th>
                      <th>HR</th>
                      <th>Thk</th>
                  </tr>
                  {this.getGroupRows(group)}
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
      doors: [],
      drawers: []
    };
    for (const cab of calcResult) {
      for (const piece of cab.pieces) {
        if (piece.material == 'WHITE16') {
          groups.white16.push(piece);
        } else if (piece.material == 'DOORS') {
          groups.doors.push(piece);
        } else if (piece.material == 'DRAWERS') {
          groups.drawers.push(piece);
        }
      }
    }
    groupDivs.push(this.getGroupDiv(groups.white16.sort(this.sortPieces), 'white16'));
    groupDivs.push(this.getGroupDiv(groups.doors.sort(this.sortPieces), 'doors'));
    groupDivs.push(this.getGroupDiv(groups.drawers.sort(this.sortPieces), 'drawers'));
    return groupDivs;
  }
  render () {
    return (
      <div className="list list-dimensions">
          {this.getGroupDivs(this.props.calcResult)}
      </div>
    )
  }
}
