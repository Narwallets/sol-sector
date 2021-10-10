import React from 'react';
import { Table } from '../../shared/components';
import { Row } from '../../shared/components/Table/Row';
import { Modal } from './Modal';

export function Elements() {
	const [isModalVisible, toogleModalVisibility] = React.useState(false);
	const onModalVisibility = (item: React.ComponentProps<typeof Row>) => {
		toogleModalVisibility((v) => !v);
	};
	const onHideModal = () => {
		toogleModalVisibility(false);
	};
  return (
<>
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
					"priceByMt": "1",
					onTrade: onModalVisibility,
        },
        {
          "image": "au.jpg",
					"symbol": "Li",
					"name": "Lithium",
					"rarity": "18",
					"weightByMt": "1",
					"volumeByMt": "1",
					"mtAvailable": "16",
					"priceByMt": "1",
					onTrade: onModalVisibility,
        },
        {
          "image": "ga.jpg",
					"symbol": "Fe",
					"name": "Iron",
					"rarity": "60",
					"weightByMt": "1",
					"volumeByMt": "1",
					"mtAvailable": "84",
					"priceByMt": "1",
					onTrade: onModalVisibility,
        },
        {
          "image": "cu.jpg",
					"symbol": "Co",
					"name": "Cobalt",
					"rarity": "31",
					"weightByMt": "1",
					"volumeByMt": "1",
					"mtAvailable": "3",
					"priceByMt": "1",
					onTrade: onModalVisibility,
        },
        {
          "image": "cd.jpg",
					"symbol": "Cd",
					"name": "Palladium",
					"rarity": "0.014",
					"weightByMt": "1",
					"volumeByMt": "1",
					"mtAvailable": "0.2",
					"priceByMt": "1",
					onTrade: onModalVisibility,
        },
      ]}
    />
  </Table.Table>
	{isModalVisible && <Modal onHide={onHideModal} />}
</>
  );
}
