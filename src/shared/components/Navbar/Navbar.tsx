import React from 'react';
import { Logo } from '../Logo';
import { Flex, Spacer, Link, Box, Text } from "@chakra-ui/react"
import { Button } from '../Button';
import { Gap } from '../Gap';
import { ActionButtons } from './ActionButtons';

export function Navbar() {
  return (
    <Flex
      paddingY={2}
      borderBottomWidth={1}
      borderBottomColor="#333"
    >
      <Logo.Text />
      
      <Spacer />

      <ActionButtons />

      <Gap.Horizontal preset="sm" />

      <Link to="#">
        <Button preset="secondary">
          <Text fontSize="xs">Account</Text>
        </Button>
      </Link>
    </Flex>
  );
}
