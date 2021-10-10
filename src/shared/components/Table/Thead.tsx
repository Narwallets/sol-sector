import React from 'react';
import { Thead, Tr, Th, Text } from "@chakra-ui/react"

export function MyThead() {
  return (
    <Thead>
      <Tr>
        <Th>
          <Text fontSize="xx-small">Element</Text>
        </Th>
        <Th width="100%">
          <Text fontSize="xx-small">Name</Text>
        </Th>
        <Th>
          <Text fontSize="xx-small">Sample</Text>
        </Th>
        <Th isNumeric>
          <Text fontSize="xx-small">Rarity</Text>
        </Th>
        <Th isNumeric>
          <Text fontSize="xx-small">Weight/MT</Text>
        </Th>
        <Th isNumeric>
          <Text fontSize="xx-small">Volume/MT</Text>
        </Th>
        <Th isNumeric>
          <Text fontSize="xx-small">MT Available</Text>
        </Th>
        <Th>
          <Text fontSize="xx-small">Price/MT</Text>
        </Th>
        <Th>
          <Text fontSize="xx-small">Actions</Text>
        </Th>
      </Tr>
    </Thead>
  );
}