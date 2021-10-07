import React from 'react';
import { Tr, Td, Text, Image, Flex, Spacer, Center } from "@chakra-ui/react"
import { Button } from '../Button'

type Props = {
  image: any,
  symbol: string,
  name: string,
  rarity: string,
  volumeByMt: string,
  weightByMt: string,
  mtAvailable: string,
  priceByMt: string,
};

export function Row(props: Props) {
  return (
    <Tr>
      <Td className="text-sm">
      <Text fontSize="xs">{props.symbol}</Text>
      </Td>
      <Td className="text-sm">
      <Text fontSize="xs">{props.name}</Text>
      </Td>
      <Td>
        <Center>
          <Image
            src={require(`../../assets/elements/${props.image}`).default}
            width={30}
            height={30}
          />
        </Center>
      </Td>
      <Td isNumeric>
        <Text fontSize="xs">{props.rarity}</Text>
      </Td>
      <Td isNumeric>
        <Text fontSize="xs">{props.weightByMt}</Text>
      </Td>
      <Td isNumeric>
        <Text fontSize="xs">{props.volumeByMt}</Text>
      </Td>
      <Td isNumeric>
        <Text fontSize="xs">{props.mtAvailable}</Text>
      </Td>
      <Td isNumeric>
        <Text fontSize="xs">{props.priceByMt}</Text>
      </Td>
    </Tr>
  );
}
