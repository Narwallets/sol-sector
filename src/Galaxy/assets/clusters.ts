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
];
