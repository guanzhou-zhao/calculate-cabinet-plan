import React, { Component } from 'react'

export default class QuantityList extends Component {
  render () {
    return (
      <div className="list list-qtygroup">
          <div className="list-qtygroup-part">
              <span className="list-qtygroup-part-name">White16</span>
              <div className="list-qtygroup-part-detail">
                  <table className="table table-hover">
                      <tr>
                          <th>Qty</th>
                          <th>CutHt</th>
                          <th>CutWd</th>
                          <th>Material</th>
                      </tr>
                      <tr>
                          <td>8</td>
                          <td>710</td>
                          <td>553</td>
                          <td>white 16</td>
                      </tr>
                  </table>
              </div>
          </div>
          <div className="list-qtygroup-part">
              <span className="list-qtygroup-part-name">sublime teak</span>
              <div className="list-qtygroup-part-detail">
                  <table className="table table-hover">
                      <tr>
                          <th>Qty</th>
                          <th>CutHt</th>
                          <th>CutWd</th>
                          <th>Material</th>
                      </tr>
                      <tr>
                          <td>8</td>
                          <td>702</td>
                          <td>288</td>
                          <td>sublime teak</td>
                      </tr>
                  </table>
              </div>
          </div>
          <div className="list-qtygroup-part">
              <span className="list-qtygroup-part-name">snowdrift</span>
              <div className="list-qtygroup-part-detail">
                  <table className="table table-hover">
                      <tr>
                          <th>Qty</th>
                          <th>CutHt</th>
                          <th>CutWd</th>
                          <th>Material</th>
                      </tr>
                      <tr>
                          <td>8</td>
                          <td>702</td>
                          <td>288</td>
                          <td>snowdrift</td>
                      </tr>
                  </table>
              </div>
          </div>
      </div>
    )
  }
}
