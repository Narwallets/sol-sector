import React from 'react';
import { Container, Navbar, Logo } from '../../shared/components';
import { Flex, Link, Center, Button, Spacer, Box } from '@chakra-ui/react'
import { Link as RouterLink } from "react-router-dom"

export function Welcome() {
  return (
    <Container>
      <Navbar />
      <Flex
        direction="column"
        height={350}
      >
        <Spacer />

        <Center
          w="100%"
          h={300}
          color="white"
        >
          <Logo.Image />
        </Center>

        <Spacer />

        <Link
          to="/dashboard"
          as={RouterLink}
        >
          <Center>
            <Button
              colorScheme="blue"
            >
              Jugar
            </Button>
          </Center>
        </Link>
      </Flex>
    </Container>
  );
}
