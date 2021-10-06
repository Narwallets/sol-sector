import React from 'react';
import { Flex, Link, Center, Button, Spacer, Box } from '@chakra-ui/react'
import { Container, Sidebar, Navbar } from '../../shared/components';
import { Footer } from './Footer';

type Props = {
  id:
    | 'home'
    | 'marketplace'
    | 'galaxy'
    | 'investigation'
    | 'alliances'
    | 'planet'
    | 'resources'
    | 'hangar'
    | 'production'
    | 'facilities'
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
          p={5}
          flexDirection="column"
        >
          {props.children}
        </Flex>
      </Flex>
      {/*<Footer />*/}
    </Container >
  );
}