import React from 'react';
import * as Chakra from "@chakra-ui/react"
import { Button } from '../Button'

type Props = {
  image: any,
  symbol: string,
  name: string,
  rarity: string,
  priceByMt: string,
  mtAvailable: string,
};

export function Row(props: Props) {
  return (
    <Chakra.Tr>
      <Chakra.Td>
        <img
          src={require(`../../assets/elements/${props.image}`).default}
          style={{ width: 30, height: 30 }}
        ></img>
      </Chakra.Td>
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
      <Chakra.Td className="text-sm">
        <Chakra.Flex
          direction="row"
          width={100}
        >
          <Button
            preset="secondary"
          >
            Buy
          </Button>
          <Chakra.Spacer />
          <Button
            preset="secondary"
          >
            Sell
          </Button>
        </Chakra.Flex>
      </Chakra.Td>
    </Chakra.Tr>
  );
}
