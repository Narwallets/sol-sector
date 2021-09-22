import React from 'react';
import { Flex, Link, Center, Button, Spacer, Box } from '@chakra-ui/react'

import logoIsoImage from '../../assets/logo_iso.jpg';

export function Text() {
  return (
    <Flex
      direction="row"
      alignItems="center"
    >
      <img
        src={logoIsoImage}
        width={30}
        height={30}
      >
      </img>
      <Box paddingLeft={2}>
        <span className="text-xs text-bold">Sol-sector</span>
      </Box>
    </Flex>
  );
}
