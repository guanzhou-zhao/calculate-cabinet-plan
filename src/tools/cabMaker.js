import rules from '../../data/rules'

export default function getCab(state) {
  var cab = {};
  cab.cabNum = state.calcResult.length;
  cab.cabDimension = state.calcInfo.dimension;
  cab.cabType = state.calcInfo.cabType;
  cab.pieces = [];

  var cabRules = [];
  if (state.calcInfo.cabType == 'corner') {

  } else {
    cabRules.push(...rules.cabinet.pieces);
  }
  if (!state.calcInfo.isRail || state.calcInfo.cabType == 'plain') {
    cabRules.push(...rules.top.pieces);
  }
  if (state.calcInfo.isRail && state.calcInfo.cabType != 'plain') {
    if (state.calcInfo.isUnderSink) {
      cabRules.push(...rules.underSinkRail.pieces);
    } else {
      cabRules.push(...rules.rail.pieces);
    }
  }
  switch (state.calcInfo.cabType) {
    case 'dr':
      cabRules.push(...rules.drawer3.pieces, ...rules.drawerfront3.pieces);
      break;
    case 'fixed-shelf':
      cabRules.push(...rules.fixedShelf.pieces);
      break;
    case 'open-shelf':
      cabRules.push(...rules.openShelf.pieces);
      break;
    case 'bin':
      cabRules.push(...rules.binDrawer.pieces, ...rules.fixedShelf.pieces);
      break;
    default:
      break;
  }

  switch (state.calcInfo.doorType) {
    case 'two':
      cabRules.push(...rules.twoDoorHorizontal.pieces);
      break;
    case 'single':
      cabRules.push(...rules.singleDoor.pieces);
      break;
    case 'two2':
     cabRules.push(...rules.twoDoorVertical.pieces);
     break;
    default:
      break;
  }
  var width = state.calcInfo.dimension.width;
  var height = state.calcInfo.dimension.height;
  var depth = state.calcInfo.dimension.depth;
  var cabBoard = state.calcInfo.isCab16 ? 16 : 18;
  var doorBoard = state.calcInfo.isDoor16 ? 16 : 18;
  var cabEdge = state.calcInfo.isCab1mm ? 1 : 2;
  var doorEdge = state.calcInfo.isDoor1mm ? 1 : 2;
  var horizontalGap = state.calcInfo.horizontalGap;
  var verticalGap = state.calcInfo.verticalGap;
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
