import React from 'react';
import { Flex, Link, Center, Button, Spacer, Box } from '@chakra-ui/react'
import { Container, Sidebar, Navbar } from '../../shared/components';

type Props = {
  id:
  | 'dashboard'
  | 'resources'
  | 'marketplace'
  | 'hangar'
  | 'galaxy'
  | 'planet'
  | 'alliances',
  children: React.ReactNode,
};

export function Page(props: Props) {
  return (
    <Container>
      <Navbar />
      <Flex
        direction="row"
        width={"100%"}
      >
        <Sidebar page={props.id} />
        <Flex
          basis={1200}
          p={2}
        >
          {props.children}
        </Flex>
      </Flex>
    </Container >
  );
}