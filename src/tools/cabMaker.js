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
  var b = state.calcInfo.is16 ? 16 : 18;
  var e = state.calcInfo.is1mm ? 1 : 2;
  for (let pieceRule of cabRules) {
    var piece = {};
    piece.qty = pieceRule.qty;
    piece.desc = pieceRule.desc;
    piece.cutHt = eval(pieceRule.cutHt);
    piece.cutWd = eval(pieceRule.cutWd);
    piece.material = state.calcInfo.is16 ? 'WHITE16' : 'COLOUR18';
    piece.cabInfo = {
      cabNum: cab.cabNum,
      cabDimension: cab.cabDimension,
      cabType: cab.cabType
    }
    piece.edge = {
      L: false,
      R: false,
      T: false,
      B: false
    }
    cab.pieces.push(piece);
  }

  return cab;
}
