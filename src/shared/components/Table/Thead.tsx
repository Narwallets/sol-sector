import React from 'react';
import * as Chakra from "@chakra-ui/react"

export function Thead() {
  return (
    <Chakra.Thead>
      <Chakra.Tr>
        <Chakra.Th backgroundColor="#333">
          <div style={{ width: 30, height: 30 }} />
        </Chakra.Th>
        <Chakra.Th backgroundColor="#333">
          <span className="text-sm">Element</span>
        </Chakra.Th>
        <Chakra.Th backgroundColor="#333" width="100%">
          <span className="text-sm">Name</span>
        </Chakra.Th>
        <Chakra.Th backgroundColor="#333" isNumeric>
          <span className="text-sm">Rarity</span>
        </Chakra.Th>
        <Chakra.Th backgroundColor="#333" isNumeric>
          <span className="text-sm">Price/MT</span>
        </Chakra.Th>
        <Chakra.Th backgroundColor="#333" isNumeric>
          <span className="text-sm">MT Available</span>
        </Chakra.Th>
        <Chakra.Th backgroundColor="#333">
          <span className="text-sm">Actions</span>
        </Chakra.Th>
      </Chakra.Tr>
    </Chakra.Thead>
  );
}