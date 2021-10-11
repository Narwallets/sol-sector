export type Coords = {
  x: number,
  y: number,
};

export type Galaxy = Coords & {
  text: string,
};

export type Group = Coords & {
  text: string,
  galaxies: Galaxy[];
};
