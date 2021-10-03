import React from 'react';
import { Thead, Tr, Th, Text } from "@chakra-ui/react"

export function MyThead() {
  return (
    <Thead>
      <Tr>
        <Th backgroundColor="#333">
          <div style={{ width: 30, height: 30 }} />
        </Th>
        <Th backgroundColor="#333">
          <Text fontSize="xs">Element</Text>
        </Th>
        <Th backgroundColor="#333" width="100%">
          <Text fontSize="xs">Name</Text>
        </Th>
        <Th backgroundColor="#333" isNumeric>
          <Text fontSize="xs">Rarity</Text>
        </Th>
        <Th backgroundColor="#333" isNumeric>
          <Text fontSize="xs">Price/MT</Text>
        </Th>
        <Th backgroundColor="#333" isNumeric>
          <Text fontSize="xs">MT Available</Text>
        </Th>
        <Th backgroundColor="#333">
          <Text fontSize="xs">Actions</Text>
        </Th>
      </Tr>
    </Thead>
  );
}