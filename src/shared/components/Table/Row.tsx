import React from 'react';
import { Tr, Td, Text, Image, Flex, Spacer } from "@chakra-ui/react"
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
    <Tr>
      <Td>
        <Image
          src={require(`../../assets/elements/${props.image}`).default}
          width={30}
          height={30}
        />
      </Td>
      <Td className="text-sm">
      <Text fontSize="xs">{props.symbol}</Text>
      </Td>
      <Td className="text-sm">
      <Text fontSize="xs">{props.name}</Text>
      </Td>
      <Td className="text-sm" isNumeric>
      <Text fontSize="xs">{props.rarity}</Text>
      </Td>
      <Td className="text-sm" isNumeric>
      <Text fontSize="xs">{props.priceByMt}</Text>
      </Td>
      <Td className="text-sm" isNumeric>
        <Text fontSize="xs">{props.mtAvailable}</Text>
      </Td>
      <Td className="text-sm">
        <Flex
          direction="row"
          width={100}
        >
          <Button
            preset="secondary"
          >
            <Text fontSize="xs">Buy</Text>
          </Button>
          <Spacer />
          <Button
            preset="secondary"
          >
            <Text fontSize="xs">Sell</Text>
          </Button>
        </Flex>
      </Td>
    </Tr>
  );
}
