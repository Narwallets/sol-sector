import React from 'react';
import { Flex, Link, Center, Button, Spacer, Box } from '@chakra-ui/react'
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
import { Page } from '../../shared/components'

export function Marketplace() {
  return (
    <Page id="marketplace">
      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th>Element</Th>
            <Th width="100%">Name</Th>
            <Th isNumeric>Rarity</Th>
            <Th isNumeric>Price/MT</Th>
            <Th isNumeric>MT Available</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>H</Td>
            <Td>Hydrogen</Td>
            <Td isNumeric>105</Td>
            <Td isNumeric>1</Td>
            <Td isNumeric>354</Td>
          </Tr>
          <Tr>
            <Td>Li</Td>
            <Td>Lithium</Td>
            <Td isNumeric>18</Td>
            <Td isNumeric>32.54</Td>
            <Td isNumeric>16</Td>
          </Tr>
          <Tr>
            <Td>Fe</Td>
            <Td>Iron</Td>
            <Td isNumeric>60</Td>
            <Td isNumeric>5.53</Td>
            <Td isNumeric>84</Td>
          </Tr>
          <Tr>
            <Td>Co</Td>
            <Td>Cobalt</Td>
            <Td isNumeric>31</Td>
            <Td isNumeric>9.53</Td>
            <Td isNumeric>3</Td>
          </Tr>
          <Tr>
            <Td>Cd</Td>
            <Td>Palladium</Td>
            <Td isNumeric>0.014</Td>
            <Td isNumeric>9251.26</Td>
            <Td isNumeric>0.2</Td>
          </Tr>
          <Tr>
            <Td>H</Td>
            <Td>Hydrogen</Td>
            <Td isNumeric>105</Td>
            <Td isNumeric>1</Td>
            <Td isNumeric>354</Td>
          </Tr>
          <Tr>
            <Td>Li</Td>
            <Td>Lithium</Td>
            <Td isNumeric>18</Td>
            <Td isNumeric>32.54</Td>
            <Td isNumeric>16</Td>
          </Tr>
          <Tr>
            <Td>Fe</Td>
            <Td>Iron</Td>
            <Td isNumeric>60</Td>
            <Td isNumeric>5.53</Td>
            <Td isNumeric>84</Td>
          </Tr>
          <Tr>
            <Td>Co</Td>
            <Td>Cobalt</Td>
            <Td isNumeric>31</Td>
            <Td isNumeric>9.53</Td>
            <Td isNumeric>3</Td>
          </Tr>
          <Tr>
            <Td>Cd</Td>
            <Td>Palladium</Td>
            <Td isNumeric>0.014</Td>
            <Td isNumeric>9251.26</Td>
            <Td isNumeric>0.2</Td>
          </Tr>
          <Tr>
            <Td>H</Td>
            <Td>Hydrogen</Td>
            <Td isNumeric>105</Td>
            <Td isNumeric>1</Td>
            <Td isNumeric>354</Td>
          </Tr>
          <Tr>
            <Td>Li</Td>
            <Td>Lithium</Td>
            <Td isNumeric>18</Td>
            <Td isNumeric>32.54</Td>
            <Td isNumeric>16</Td>
          </Tr>
          <Tr>
            <Td>Fe</Td>
            <Td>Iron</Td>
            <Td isNumeric>60</Td>
            <Td isNumeric>5.53</Td>
            <Td isNumeric>84</Td>
          </Tr>
          <Tr>
            <Td>Co</Td>
            <Td>Cobalt</Td>
            <Td isNumeric>31</Td>
            <Td isNumeric>9.53</Td>
            <Td isNumeric>3</Td>
          </Tr>
          <Tr>
            <Td>Cd</Td>
            <Td>Palladium</Td>
            <Td isNumeric>0.014</Td>
            <Td isNumeric>9251.26</Td>
            <Td isNumeric>0.2</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Th>Element</Th>
          <Th width="100%">Name</Th>
          <Th isNumeric>Rarity</Th>
          <Th isNumeric>Price/MT</Th>
          <Th isNumeric>MT Available</Th>
        </Tfoot>
      </Table>
    </Page>
  );
}

