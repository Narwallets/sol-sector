import React from 'react';
import { Flex, Link, Center, Button, Spacer, Box } from '@chakra-ui/react'
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
        <img
          src={logo}
          width={30}
          height={30}
        >
        </img>
      </Link>
      <Box paddingLeft={2}>
        <span className="text-xs text-bold">Sol Sector</span>
      </Box>
    </Flex>
  );
}
