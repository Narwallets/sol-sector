import React from 'react';
import { Table } from '../../shared/components';

export function Elements() {
  return (
  <Table.Table>
    <Table.Thead />
    <Table.Tbody>
      <Table.Row
        symbol="H"
        name="Hydrogen"
        rarity="105"
        priceByMt="1"
        mtAvailable="354"
      />
      <Table.Row
        symbol="Li"
        name="Lithium"
        rarity="18"
        priceByMt="32.54"
        mtAvailable="16"
      />
      <Table.Row
        symbol="Fe"
        name="Iron"
        rarity="60"
        priceByMt="5.53"
        mtAvailable="84"
      />
      <Table.Row
        symbol="Co"
        name="Cobalt"
        rarity="31"
        priceByMt="9.53"
        mtAvailable="3"
      />  
      <Table.Row
        symbol="Cd"
        name="Palladium"
        rarity="0.014"
        priceByMt="9251.26"
        mtAvailable="0.2"
      />  
      <Table.Row
        symbol="Cd"
        name="Palladium"
        rarity="0.014"
        priceByMt="9251.26"
        mtAvailable="0.2"
      />
    </Table.Tbody>
  </Table.Table>
  );
}
