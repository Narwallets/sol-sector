import React from 'react';
import { Container, Navbar, Logo, Button } from '../../shared/components';
import { Flex, Link, Center, Spacer, Box, Text, OrderedList, ListItem } from '@chakra-ui/react'
import { Link as RouterLink } from "react-router-dom"
import { GapHorizontal } from '../../shared/components'

export function Footer() {
  return (
    <Flex
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      <Link
        to="/dashboard"
        as={RouterLink}
      >
        <Center>
          <Button preset="primary" >
            Play
          </Button>
        </Center>
      </Link>

      <GapHorizontal preset="lg" />

      <Link
        to="/#"
        as={RouterLink}
      >
        <Center>
          <Button preset="dark" >
            Incineration
          </Button>
        </Center>
      </Link>
    </Flex>
  );
}
