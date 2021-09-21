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
      <span>Sol-sector</span>
    </Flex>
  );
}
