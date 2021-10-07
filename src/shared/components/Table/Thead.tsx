import React from 'react';
import { Thead, Tr, Th, Text } from "@chakra-ui/react"

export function MyThead() {
  return (
    <Thead>
      <Tr>
        <Th>
          <Text fontSize="xs">Element</Text>
        </Th>
        <Th width="100%">
          <Text fontSize="xs">Name</Text>
        </Th>
        <Th>
          <Text fontSize="xs">Sample</Text>
        </Th>
        <Th isNumeric>
          <Text fontSize="xs">Rarity</Text>
        </Th>
        <Th isNumeric>
          <Text fontSize="xs">Weight/MT</Text>
        </Th>
        <Th isNumeric>
          <Text fontSize="xs">Volume/MT</Text>
        </Th>
        <Th isNumeric>
          <Text fontSize="xs">MT Available</Text>
        </Th>
        <Th>
          <Text fontSize="xs">Price/MT</Text>
        </Th>
      </Tr>
    </Thead>
  );
}