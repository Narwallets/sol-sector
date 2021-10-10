import React from 'react';
import { Flex, Box, Center, Text, Link } from '@chakra-ui/react'
import { Link as RouterLink } from "react-router-dom"
import { Container, Navbar, Logo, Button, Gap } from '../../shared/components';
import { Footer } from '../components/Footer';
import { WelcomeMessage } from '../components/WelcomeMessage';

export function Welcome() {
  return (
    <Container>
      <Flex
        direction="column"
        paddingY={3}
      >
        <Logo.Image />

        <Gap.Vertical preset="xs" />
        
        <WelcomeMessage />

        <Gap.Vertical preset="xs" />
  
        <Footer />
      </Flex >
    </Container >
  );
}
