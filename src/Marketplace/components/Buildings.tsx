import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react"

export function Buildings() {
  return (
    <Table variant="simple" size="sm">
      <Thead>
        <Tr>
          <Th>
            Test
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr backgroundColor="#eae0c2">
          <Td>
            Test
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
}
