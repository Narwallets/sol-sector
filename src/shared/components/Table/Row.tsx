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
  onTrade: (data: Props) => any,
};

export function Row(props: Props) {
  const onModalVisibility = () => props.onTrade(props);
  return (
    <Tr>
      <Td>
        <Text fontSize="xs">{props.symbol}</Text>
      </Td>
      <Td>
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
      <Td>
        <Button
          preset="primary"
          onClick={onModalVisibility}
        >
          <Text fontSize="xs">Trade</Text>
        </Button>
      </Td>
    </Tr>
  );
}
