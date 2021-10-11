import { Galaxy, Group } from '../interfaces'

export const localGroup: Galaxy[] = [
  {
    x: 250,
    y: 250,
    text: 'Milky way'
  },
  {
    x: 240,
    y: 240,
    text: 'LMC'
  },
  {
    x: 230,
    y: 270,
    text: 'M31'
  },
  {
    x: 220,
    y: 260,
    text: 'M33'
  },
  {
    x: 220,
    y: 220,
    text: 'N55'
  },
  {
    x: 280,
    y: 230,
    text: 'N3019'
  }
];

export const maffeiGroup: Galaxy[] = [
  {
    x: 230 - 50,
    y: 230,
    text: 'N30'
  },
  {
    x: 220 - 50,
    y: 200,
    text: 'IC4620'
  },
  {
    x: 240 - 50,
    y: 265,
    text: 'N247'
  },
  {
    x: 260 + 50,
    y: 270,
    text: 'N1569'
  },
  {
    x: 240 + 50,
    y: 290,
    text: 'IC342'
  },
];

export const m81Group: Galaxy[] = [
  {
    x: 220 + 150,
    y: 300,
    text: 'N3738'
  },
  {
    x: 240 + 150,
    y: 320,
    text: 'N4395'
  },
  {
    x: 200 + 150,
    y: 330,
    text: 'N4214'
  },
  {
    x: 245 + 150,
    y: 280,
    text: 'N5204'
  },
  {
    x: 190 + 150,
    y: 350,
    text: 'M81'
  },
  {
    x: 180 + 150,
    y: 345,
    text: 'M82'
  },
  {
    x: 150 + 150,
    y: 360,
    text: 'N2366'
  },
  {
    x: 145 + 150,
    y: 370,
    text: 'N1560'
  },
];

const sparseGroup: Galaxy[] = [
  {
    x: 260,
    y: 50,
    text: 'E274-01'
  },
  {
    x: 240,
    y: 450,
    text: 'Dwingeloo 1'
  },
  {
    x: 10,
    y: 260,
    text: 'N45'
  },
];

export const groups: Group[] = [
  {
    text: 'Local group',
    x: 240,
    y: 210,
    galaxies: localGroup,
  },
  {
    text: 'Maffei Group',
    x: 240,
    y: 160,
    galaxies: maffeiGroup,
  },
  {
    text: 'M81 Group',
    x: 400,
    y: 300,
    galaxies: m81Group,
  },
  {
    text: 'Sparse group',
    x: 250,
    y: 10,
    galaxies: sparseGroup,
  }
];
