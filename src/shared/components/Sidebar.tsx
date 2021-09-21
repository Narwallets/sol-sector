import React from 'react';
import { Flex, Link, Center, Button, Spacer, Box } from '@chakra-ui/react'
import { Link as RouterLink } from "react-router-dom"

export function Sidebar() {
  return (
    <Flex
      direction="column"
    >
      <Link
        to="/resources"
        as={RouterLink}
      >
        Resources
      </Link>

      <Link
        to="/marketplace"
        as={RouterLink}
      >
        Marketplace
      </Link>

      <Link
        to="/hangar"
        as={RouterLink}
      >
        Hangar
      </Link>

      <Link
        to="/galaxy"
        as={RouterLink}
      >
        Galaxy
      </Link>

      <Link
        to="/planet"
        as={RouterLink}
      >
        Planet
      </Link>

      <Link
        to="/alliances"
        as={RouterLink}
      >
        Alliances
      </Link>
    </Flex>
  );
}
