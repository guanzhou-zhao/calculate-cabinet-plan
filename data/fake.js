var state = {
  customer: {
    code: 'B300',
    lotNum: 'lot 80',
    name: 'Greenland Ltd.',
    colorBoard: [
      {
        finish: 'Melmine',
        color: 'Melteca Bullet Pearl'
      },
      {
        finish: 'Melmine',
        color: 'Cinnamon Ash Naturale'
      }
    ]
  },
  calcInfo: {
    isGround: true,
    cabType: 'dr',
    doorType: '',
    dimension: {
      width: 650,
      height: 710,
      depth: 553
    }
  },
  activeList: 'cab',
  calcResult: [
    {
      cabNum: '1',
      cabDimension: {
        width: 800,
        height: 740,
        depth: 620
      },
      cabType: 'open-shelf',
      pieces: [
        {
          qty: 1,
          desc: 'back',
          cutHt: 740,
          cutWd: 799,
          finHt: 740,
          finWd: 740,
          material: 'WHITE16',
          edge: {
            L: false,
            R: false,
            T: false,
            B: false
          },
          cabInfo: {
            cabNum: '1',
            cabDimension: {
              width: 800,
              height: 740,
              depth: 620
            },
            cabType: 'open-shelf'
          }
        },
        {
          qty: 1,
          desc: 'bottom',
          cutHt: 767,
          cutWd: 583,
          finHt: 767,
          finWd: 584,
          material: 'WHITE16',
          edge: {
            L: true,
            R: false,
            T: false,
            B: false
          },
          cabInfo: {
            cabNum: '1',
            cabDimension: {
              width: 800,
              height: 740,
              depth: 620
            },
            cabType: 'open-shelf'
          }
        },
        {
          qty: 1,
          desc: 'door left',
          cutHt: 706,
          cutWd: 393.5,
          finHt: 710,
          finWd: 397.5,
          material: 'Doors',
          edge: {
            L: true,
            R: true,
            T: true,
            B: true
          },
          cabInfo: {
            cabNum: '1',
            cabDimension: {
              width: 800,
              height: 740,
              depth: 620
            },
            cabType: 'open-shelf'
          }
        },
      ]
    }

  ]
}
export default state;