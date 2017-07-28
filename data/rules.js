export default {
  cabinet: {
    name: 'cabinet',
    pieces: [
      {
        desc: 'back',
        qty: 1,
        cutHt: 'h',
        cutWd: 'w-1'
      },
      {
        desc: 'end',
        qty: 2,
        cutHt: 'h',
        cutWd: 'd-b-e'
      },
      {
        desc: 'bottom',
        qty: 1,
        cutHt: 'w-b*2',
        cutWd: 'd-b-e'
      }
    ]
  },
  rail: {
    name: 'rail',
    pieces: [
      {
        desc: 'rail',
        qty: 2,
        cutHt: 'w-b*2',
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
        cutHt: 'w-108',
        cutWd: '442'
      },
      {
        desc: 'drawer bottom',
        qty: 2,
        cutHt: 'w-108',
        cutWd: '492'
      },
      {
        desc: 'drawer back top',
        qty: 1,
        cutHt: '70',
        cutWd: 'w-120'
      },
      {
        desc: 'drawer back',
        qty: 2,
        cutHt: '145',
        cutWd: 'w-120'
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
        cutWd: 'w-e*2-2'
      },
      {
        desc: 'drawer front',
        qty: 2,
        cutHt: '262',
        cutWd: 'w-e*2-2'
      }
    ]
  }
}
