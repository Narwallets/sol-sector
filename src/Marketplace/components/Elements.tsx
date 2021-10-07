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
					"weightByMt": "1",
					"volumeByMt": "1",
					"mtAvailable": "354",
					"priceByMt": "1"
        },
        {
          "image": "au.jpg",
					"symbol": "Li",
					"name": "Lithium",
					"rarity": "18",
					"weightByMt": "1",
					"volumeByMt": "1",
					"mtAvailable": "16",
					"priceByMt": "1"
        },
        {
          "image": "ga.jpg",
					"symbol": "Fe",
					"name": "Iron",
					"rarity": "60",
					"weightByMt": "1",
					"volumeByMt": "1",
					"mtAvailable": "84",
					"priceByMt": "1"
        },
        {
          "image": "cu.jpg",
					"symbol": "Co",
					"name": "Cobalt",
					"rarity": "31",
					"weightByMt": "1",
					"volumeByMt": "1",
					"mtAvailable": "3",
					"priceByMt": "1"
        },
        {
          "image": "cd.jpg",
					"symbol": "Cd",
					"name": "Palladium",
					"rarity": "0.014",
					"weightByMt": "1",
					"volumeByMt": "1",
					"mtAvailable": "0.2",
					"priceByMt": "1"
        },
      ]}
    />
  </Table.Table>
  );
}
