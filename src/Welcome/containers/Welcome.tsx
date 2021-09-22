import React from 'react';
import { Container, Navbar, Logo, Button } from '../../shared/components';
import { Flex, Link, Center, Spacer, Box } from '@chakra-ui/react'
import { Link as RouterLink } from "react-router-dom"

export function Welcome() {
  return (
    <Container>
      <Navbar />
      <Flex
        direction="column"
        paddingY={3}
        height={600}
      >
        <Spacer />

        <Box
          w="100%"
          h={500}
        >
          <Logo.Image />
        </Box>

        <Spacer />

        <Link
          to="/dashboard"
          as={RouterLink}
        >
          <Center>
            <Button preset="primary">
              Jugar
            </Button>
          </Center>
        </Link>
      </Flex>
    </Container>
  );
}
