import React, { Component } from 'react'
import _ from 'lodash'

export default class CabinetList extends Component {
  getPieceRows(pieces) {
    var rows = [];
      var key = 0;
      for (const p of pieces) {
        rows.push(<tr key={`pieceRow${key++}`}>
            <td>{p.qty}</td>
            <td>{p.desc}</td>
            <td>{p.cutHt}</td>
            <td>{p.cutWd}</td>
            <td>{p.finHt}</td>
            <td>{p.finWd}</td>
            <td>{p.material}</td>
            <td>{p.edge.L ? 'Y' : ''}</td>
            <td>{p.edge.R ? 'Y' : ''}</td>
            <td>{p.edge.T ? 'Y' : ''}</td>
            <td>{p.edge.B ? 'Y' : ''}</td>
            <td> </td>
            <td> </td>
            <td></td>
        </tr>)
      }
    return rows;
  }
  getCabinetDivs(calcResult) {
      var cabinetDivs = [];
      for (var i = 0; !_.isEmpty(calcResult) && i < calcResult.length; i++ ) {
        cabinetDivs.push(

            <div className="list-cabinet" key={`cabDiv${i}`}>
                <span className="list-cabinet-num"> Cab#: {calcResult[i].cabNum} </span>
                <div className="list-cabinet-detail">
                    <div className="list-cabinet-dimension">
                        <span>Width: {calcResult[i].cabDimension.width}</span>
                        <span>Height: {calcResult[i].cabDimension.height}</span>
                        <span>Depth: {calcResult[i].cabDimension.depth}</span>
                    </div>
                    <div className="list-cabinet-image">
                        <img src="http://via.placeholder.com/150x150" alt="cabinet" /> </div>
                    <div className="list-cabinet-detail">
                        <table className="table table-hover">
                          <tbody>
                            <tr>
                                <th>Qty</th>
                                <th>Description</th>
                                <th>CutHt</th>
                                <th>CutWd</th>
                                <th>FinHt</th>
                                <th>FinWd</th>
                                <th>Material</th>
                                <th>L</th>
                                <th>R</th>
                                <th>T</th>
                                <th>B</th>
                                <th>HL</th>
                                <th>HR</th>
                                <th>Thk</th>
                            </tr>
                            {this.getPieceRows(calcResult[i].pieces)}
                          </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
      }
    return cabinetDivs;
  }
  render () {
    var calcResult = this.props.calcResult;
    return (
      <div className="list list-cabinets">
          {this.getCabinetDivs(calcResult)}
      </div>
    )
  }
}
