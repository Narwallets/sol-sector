import React from 'react';
import { Flex, Link, Center, Button, Spacer, Box } from '@chakra-ui/react'
import { Page } from '../../shared/components';

export function Planet() {
  return (
    <Page id="planet">
      <Flex
        direction="column"
        width={500}
        height={220}
        backgroundColor="#ccc"
      >
        <Flex
          direction="row"
        >
          <Box backgroundColor="#f00" width={100} height={100}>
            <img src="" width={100} height={90}></img>
            <span style={{ fontSize: 10 }}>16</span>
          </Box>
          <Box backgroundColor="#f0f" width={100} height={100} />
          <Box backgroundColor="#0ff" width={100} height={100} />
          <Box backgroundColor="#ff0" width={100} height={100} />
          <Box backgroundColor="#00f" width={100} height={100} />
        </Flex>

        <Spacer />

        <Flex
          direction="row"
        >
          <Box backgroundColor="#f00" width={100} height={100} />
          <Box backgroundColor="#f0f" width={100} height={100} />
          <Spacer />
          <Box backgroundColor="#00f" width={100} height={100} />
        </Flex>
      </Flex>
    </Page>
  );
}
