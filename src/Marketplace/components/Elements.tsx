import React from 'react';
import { Table } from '../../shared/components';

export function Elements() {
  return (
  <Table.Table>
    <Table.Thead />
    <Table.Tbody
      data={[
        {
          "image": "ag.jpg",
					"symbol": "H",
					"name": "Hydrogen",
					"rarity": "105",
					"priceByMt": "1",
					"mtAvailable": "354",
        },
        {
          "image": "au.jpg",
					"symbol": "Li",
					"name": "Lithium",
					"rarity": "18",
					"priceByMt": "32.54",
					"mtAvailable": "16",
        },
        {
          "image": "ga.jpg",
					"symbol": "Fe",
					"name": "Iron",
					"rarity": "60",
					"priceByMt": "5.53",
					"mtAvailable": "84",
        },
        {
          "image": "cu.jpg",
					"symbol": "Co",
					"name": "Cobalt",
					"rarity": "31",
					"priceByMt": "9.53",
					"mtAvailable": "3",
        },
        {
          "image": "cd.jpg",
					"symbol": "Cd",
					"name": "Palladium",
					"rarity": "0.014",
					"priceByMt": "9251.26",
					"mtAvailable": "0.2",
        },
      ]}
    />
  </Table.Table>
  );
}
