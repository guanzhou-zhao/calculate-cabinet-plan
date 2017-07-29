export default {
  cabinet: {
    name: 'cabinet',
    pieces: [
      {
        desc: 'back',
        qty: 1,
        cutHt: 'height',
        cutWd: 'width-1'
      },
      {
        desc: 'end',
        qty: 2,
        cutHt: 'height',
        cutWd: 'depth-b-e'
      },
      {
        desc: 'bottom',
        qty: 1,
        cutHt: 'width-b*2',
        cutWd: 'depth-b-e'
      }
    ]
  },
  rail: {
    name: 'rail',
    pieces: [
      {
        desc: 'rail',
        qty: 2,
        cutHt: 'width-b*2',
        cutWd: '100'
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
        cutWd: '442'
      },
      {
        desc: 'drawer bottom',
        qty: 2,
        cutHt: 'width-108',
        cutWd: '492'
      },
      {
        desc: 'drawer back top',
        qty: 1,
        cutHt: '70',
        cutWd: 'width-120'
      },
      {
        desc: 'drawer back',
        qty: 2,
        cutHt: '145',
        cutWd: 'width-120'
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
        cutWd: 'width-e*2-2'
      },
      {
        desc: 'drawer front',
        qty: 2,
        cutHt: '262',
        cutWd: 'width-e*2-2'
      }
    ]
  }
}
