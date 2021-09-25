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
      >
        <Box
          w="100%"
        >
          <Logo.Image />
        </Box>

        <Link
          to="/dashboard"
          as={RouterLink}
        >
          <Center>
            <Button preset="primary" >
              <Center>
                Play
              </Center>
            </Button>
          </Center>
        </Link>
        <Spacer />
      </Flex>
    </Container>
  );
}
