import rules from '../../data/rules'

export default function getCab(state) {
  var cab = {};
  cab.cabNum = state.calcResult.length;
  cab.cabDimension = state.calcInfo.dimension;
  cab.cabType = state.calcInfo.cabType;
  cab.pieces = [];

  var cabRules = [...rules.cabinet.pieces, ...rules.rail.pieces, ...rules.drawer3.pieces, ...rules.drawerfront3.pieces];

  var width = state.calcInfo.dimension.width;
  var height = state.calcInfo.dimension.height;
  var depth = state.calcInfo.dimension.depth;
  var cabBoard = state.calcInfo.isCab16 ? 16 : 18;
  var doorBoard = state.calcInfo.isDoor16 ? 16 : 18;
  var cabEdge = state.calcInfo.isCab1mm ? 1 : 2;
  var doorEdge = state.calcInfo.isDoor1mm ? 1 : 2;
  for (let pieceRule of cabRules) {
    var piece = {};
    piece.qty = pieceRule.qty;
    piece.desc = pieceRule.desc;
    piece.cutHt = eval(pieceRule.cutHt);
    piece.cutWd = eval(pieceRule.cutWd);
    piece.material = pieceRule.isDoorOrDrawer ? (state.calcInfo.isDoor16 ? 'WHITE16' : 'COLOUR18') : (state.calcInfo.isCab16 ? 'WHITE16' : 'COLOUR18');
    piece.cabInfo = {
      cabNum: cab.cabNum,
      cabDimension: cab.cabDimension,
      cabType: cab.cabType
    }
    piece.edge = pieceRule.edge;
    piece.edge.thk = pieceRule.isDoorOrDrawer ? (state.calcInfo.isDoor1mm ? '1mm' : '2mm') : (state.calcInfo.isCab1mm ? '1mm' : '2mm');
    cab.pieces.push(piece);
  }

  return cab;
}
