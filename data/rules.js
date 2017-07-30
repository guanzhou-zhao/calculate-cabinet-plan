export default {
  cabinet: {
    name: 'cabinet',
    pieces: [
      {
        desc: 'back',
        qty: 1,
        cutHt: 'height',
        cutWd: 'width-1',
        edge: {
          L: false,
          R: false,
          T: false,
          B: false
        }
      },
      {
        desc: 'end',
        qty: 2,
        cutHt: 'height',
        cutWd: 'depth-cabBoard-cabEdge',
        edge: {
          L: true,
          R: false,
          T: false,
          B: false
        }
      },
      {
        desc: 'bottom',
        qty: 1,
        cutHt: 'width-cabBoard*2',
        cutWd: 'depth-cabBoard-cabEdge',
        edge: {
          L: true,
          R: false,
          T: false,
          B: false
        }
      }
    ]
  },
  rail: {
    name: 'rail',
    pieces: [
      {
        desc: 'rail',
        qty: 2,
        cutHt: 'width-cabBoard*2',
        cutWd: '100',
        edge: {
          L: true,
          R: false,
          T: false,
          B: false
        }
      }
    ]
  },
  drawer3: {
    name: 'drawer',
    pieces: [
      {
        desc: 'drawer bottom top',
        qty: 1,
        cutHt: 'width-108',
        cutWd: '442',
        edge: {
          L: false,
          R: false,
          T: false,
          B: false
        }
      },
      {
        desc: 'drawer bottom',
        qty: 2,
        cutHt: 'width-108',
        cutWd: '492',
        edge: {
          L: false,
          R: false,
          T: false,
          B: false
        }
      },
      {
        desc: 'drawer back top',
        qty: 1,
        cutHt: '70',
        cutWd: 'width-120',
        edge: {
          L: false,
          R: false,
          T: true,
          B: false
        }
      },
      {
        desc: 'drawer back',
        qty: 2,
        cutHt: '145',
        cutWd: 'width-120',
        edge: {
          L: false,
          R: false,
          T: true,
          B: false
        }
      }
    ]
  },
  drawerfront3: {
    name: 'drawer front',
    pieces: [
      {
        desc: 'drawer front top',
        qty: 1,
        cutHt: '168',
        cutWd: 'width-doorEdge*2-2',
        isDoorOrDrawer: true,
        edge: {
          L: true,
          R: true,
          T: true,
          B: true
        }
      },
      {
        desc: 'drawer front',
        qty: 2,
        cutHt: '262',
        cutWd: 'width-doorEdge*2-2',
        isDoorOrDrawer: true,
        edge: {
          L: true,
          R: true,
          T: true,
          B: true
        }
      }
    ]
  }
}
