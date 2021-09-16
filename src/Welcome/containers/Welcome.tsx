import React from 'react';
import { Container, Navbar } from '../../shared/components';
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
          bg="#444"
          w="100%"
          h={300}
          p={4}
          color="white"
        >
          <h1>Logo</h1>
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
