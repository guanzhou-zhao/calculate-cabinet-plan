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
    isCab16: true,
    isDoor16: false,
    isCab1mm: true,
    isDoor1mm: false,
    isRail: true,
    cabType: 'dr',
    doorType: 'two',
    dimension: {
      width: 910,
      height: 710,
      depth: 570
    }
  },
  activeList: 'cabinet',
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
          qty: 9,
          desc: 'back',
          cutHt: 740,
          cutWd: 390,
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
          material: 'DOORS',
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
        {
          qty: 1,
          desc: 'door right',
          cutHt: 706,
          cutWd: 393.5,
          finHt: 710,
          finWd: 397.5,
          material: 'DOORS',
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
        {
          qty: 1,
          desc: 'end',
          cutHt: 740,
          cutWd: 583,
          finHt: 740,
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
          desc: 'end',
          cutHt: 740,
          cutWd: 583,
          finHt: 740,
          finWd: 584,
          material: 'WHITE16',
          edge: {
            L: false,
            R: true,
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
          qty: 2,
          desc: 'rail',
          cutHt: 767,
          cutWd: 99,
          finHt: 767,
          finWd: 100,
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
          desc: 'shelf adjust',
          cutHt: 766,
          cutWd: 563,
          finHt: 766,
          finWd: 564,
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
        }
      ]
    },
    {
      cabNum: '2',
      cabDimension: {
        width: 400,
        height: 740,
        depth: 620
      },
      cabType: 'bin',
      pieces: [
        {
          qty: 1,
          desc: 'back',
          cutHt: 740,
          cutWd: 390,
          finHt: 740,
          finWd: 399,
          material: 'WHITE16',
          edge: {
            L: false,
            R: false,
            T: false,
            B: false
          },
          cabInfo: {
            cabNum: '2',
            cabDimension: {
              width: 400,
              height: 740,
              depth: 620
            },
            cabType: 'bin',
          }
        },
        {
          qty: 1,
          desc: 'end',
          cutHt: 740,
          cutWd: 583,
          finHt: 740,
          finWd: 584,
          material: 'WHITE16',
          edge: {
            L: true,
            R: false,
            T: false,
            B: false
          },
          cabInfo: {
            cabNum: '2',
            cabDimension: {
              width: 400,
              height: 740,
              depth: 620
            },
            cabType: 'bin',
          }
        },
        {
          qty: 1,
          desc: 'end',
          cutHt: 740,
          cutWd: 583,
          finHt: 740,
          finWd: 584,
          material: 'WHITE16',
          edge: {
            L: false,
            R: true,
            T: false,
            B: false
          },
          cabInfo: {
            cabNum: '2',
            cabDimension: {
              width: 400,
              height: 740,
              depth: 620
            },
            cabType: 'bin',
          }
        },
        {
          qty: 1,
          desc: 'drawer front bottom',
          cutHt: 506,
          cutWd: 393,
          finHt: 510,
          finWd: 397,
          material: 'DRAWERS',
          edge: {
            L: true,
            R: true,
            T: true,
            B: true
          },
          cabInfo: {
            cabNum: '2',
            cabDimension: {
              width: 400,
              height: 740,
              depth: 620
            },
            cabType: 'bin',
          }
        }
      ]
    }
  ]
}
export default state;
