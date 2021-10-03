import React from 'react';
import { Flex, Link, Center, Button, Spacer, Box, Image, Heading } from '@chakra-ui/react'
import { Link as RouterLink } from "react-router-dom"

import logo from '../../assets/logo_iso.png';

export function Text() {
  return (
    <Flex
      direction="row"
      alignItems="center"
    >
      <Link
        to="/"
        as={RouterLink}
      >
        <Image
          src={logo}
          width={30}
          height={30}
        />
      </Link>
      <Box paddingLeft={2}>
        <Heading size="xs">Sol Sector</Heading>
      </Box>
    </Flex>
  );
}
