export default {
  cabinet: {
    name: 'cabinet',
    pieces: [
      {
        desc: 'back',
        qty: 1,
        cutHt: 'width-1',
        cutWd: 'height',
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
        cutHt: 'depth-cabBoard-cabEdge',
        cutWd: 'height',
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
        cutHt: 'width-doorEdge*2-2',
        cutWd: '168',
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
        cutHt: 'width-doorEdge*2-2',
        cutWd: '262',
        isDoorOrDrawer: true,
        edge: {
          L: true,
          R: true,
          T: true,
          B: true
        }
      }
    ]
  },
  openShelf: {
    pieces: [
      {
        desc: 'open shelf',
        qty: 1,
        cutHt: 'width-cabBoard*2-1',
        cutWd: 'depth-40',
        edge: {
          L: false,
          R: true,
          T: false,
          B: false
        }
      }
    ]
  },
  binDrawer: {
    pieces: [
      {
        desc: 'drawer bottom',
        qty: 1,
        cutHt: 'width - 108',
        cutWd: '492',
        edge: {
          L: false,
          R: false,
          T: false,
          B: false
        }
      },
      {
        desc: 'drawer back',
        qty: 1,
        cutHt: 'width - 120',
        cutWd: '70',
        edge: {
          L: false,
          R: false,
          T: true,
          B: false
        }
      },
      {
        desc: 'bin drawer front top',
        qty: 1,
        cutHt: 'width-doorEdge*2-2',
        cutWd: '168',
        isDoorOrDrawer: true,
        edge: {
          L: true,
          R: true,
          T: true,
          B: true
        }
      },
      {
        desc: 'bin drawer front',
        qty: 1,
        cutHt: 'width-doorEdge*2-2',
        cutWd: '530',
        isDoorOrDrawer: true,
        edge: {
          L: true,
          R: true,
          T: true,
          B: true
        }
      }
    ]
  },
  underSinkRail: {
    pieces: [
      {
        desc: 'rail',
        qty: 1,
        cutHt: 'width-cabBoard*2',
        cutWd: '50',
        edge: {
          L: true,
          R: false,
          T: false,
          B: false
        }
      }
    ]
  },
  top: {
    pieces: [
      {
        desc: 'top',
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
  fixedShelf: {
    pieces: [
      {
        desc: 'fixed shelf',
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
  singleDoor: {
    pieces: [
      {
        desc: 'Door',
        qty: 1,
        cutHt: 'width-horizontalGap-doorEdge*2',
        cutWd: 'height-verticalGap-doorEdge*2',
        edge: {
          L: true,
          R: true,
          T: true,
          B: true
        }
      }
    ]
  },
  twoDoorHorizontal: {
    pieces: [
      {
        desc: 'Door',
        qty: 2,
        cutHt: '(width-horizontalGap-doorEdge*4)/2',
        cutWd: 'height-verticalGap-doorEdge*2',
        edge: {
          L: true,
          R: true,
          T: true,
          B: true
        }
      }
    ]
  },
  twoDoorVertical: {
    pieces: [
      {
        desc: 'Door',
        qty: 2,
        cutHt: 'width-horizontalGap-doorEdge*2',
        cutWd: '(height-verticalGap-doorEdge*4)/2',
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
