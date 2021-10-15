import React from 'react';
import { Flex, Text, Heading, Button, Box } from '@chakra-ui/react'
import { Gap } from '../../shared/components';

type Props = {
  name: string,
  asset: string,
};

export function Card(props: Props) {
  return (
    <Box
      backgroundColor="#101010aa"
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
          <Heading fontSize="s">{props.name}</Heading>
          <Text fontSize="xx-small">      </Text>
          <Flex
            direction="row"
            width={100}
          >
            <Button
              size="xs"
              colorScheme="gray"
            >
              Buy
            </Button>

            <Gap.Horizontal preset="xs" />

            <Button
              size="xs"
              colorScheme="gray"
            >
              Sell
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}