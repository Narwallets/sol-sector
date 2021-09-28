import React from 'react';
import { Flex, Link, Center, Spacer, Box } from '@chakra-ui/react'
import { Button } from '../../shared/components';

type Props = {
  name: string,
  asset: string,
};

export function Card(props: Props) {
  return (
    <Box
      backgroundColor="#333"
      p={2}
      m={2}
      borderRadius={2}
    >
      <Flex
        direction="row"
        alignItems="center"
      >
        <Box p={2}>
          <img src={props.asset} style={{width:60,height:60}}></img>
        </Box>
        <Flex
          direction="column"
        >
          <span className="text-lg">{props.name}</span>
          <span className="text-sm">Quantity: 1</span>
          <Flex
            direction="row"
            width={100}
          >
            <Button
              preset="secondary"
            >
              Buy
            </Button>
            <Spacer />
            <Button
              preset="secondary"
            >
              Sell
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}