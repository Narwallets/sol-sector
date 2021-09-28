import React from 'react';
import * as Chakra from "@chakra-ui/react"

type Props = {
  symbol: string,
  name: string,
  rarity: string,
  priceByMt: string,
  mtAvailable: string,
};

export function Row(props: Props) {
  return (
    <Chakra.Tr>
      <Chakra.Td className="text-sm">
        {props.symbol}
      </Chakra.Td>
      <Chakra.Td className="text-sm">
        {props.name}
      </Chakra.Td>
      <Chakra.Td className="text-sm" isNumeric>
        {props.rarity}
      </Chakra.Td>
      <Chakra.Td className="text-sm" isNumeric>
        {props.priceByMt}
      </Chakra.Td>
      <Chakra.Td className="text-sm" isNumeric>
        {props.mtAvailable}
      </Chakra.Td>
    </Chakra.Tr>
  );
}
