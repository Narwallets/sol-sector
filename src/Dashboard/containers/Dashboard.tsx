import React from 'react';
import { Flex, Link, Center, Button, Spacer, Box } from '@chakra-ui/react'
import { Container, Sidebar } from '../../shared/components';

export function Dashboard() {
  return (
    <Container>
      <Flex
        direction="row"
        width={500}
      >
        <Sidebar />
        <Flex
          flex={1}
        >
          
        </Flex>
      </Flex>
    </Container>
  );
}
