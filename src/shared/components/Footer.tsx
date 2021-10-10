import React from 'react';
import { Flex, Link, Center, Spacer, Box, Text, useColorMode } from '@chakra-ui/react'
import { Button } from './Button';

export function Footer() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Flex
    >
      <Spacer />
      <Button
        preset="secondary"
        onClick={toggleColorMode}
      >
        <Text>Toggle Color mode</Text>
      </Button>
    </Flex>
  );
}
