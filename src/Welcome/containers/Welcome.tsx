import React from 'react';
import { Container, Navbar, Logo } from '../../shared/components';
import { Flex } from '@chakra-ui/react'
import { Footer } from '../components/Footer';
import { WelcomeMessage } from '../components/WelcomeMessage';

export function Welcome() {
  return (
    <Container>
      <Navbar />
      <Flex
        direction="column"
        paddingY={3}
      >
        <Logo.Image />

        <WelcomeMessage />

        <Footer />
      </Flex>
    </Container>
  );
}
