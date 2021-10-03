import React from 'react';
import { Flex, Link, Center, Spacer, Box, Text } from '@chakra-ui/react'
import { Link as RouterLink } from "react-router-dom"
import { Button } from './Button';

type Props = {
  page:
    | 'dashboard'
    | 'resources'
    | 'marketplace'
    | 'hangar'
    | 'galaxy'
    | 'planet'
    | 'alliances',
};

export function Sidebar(props: Props) {
  return (
    <Flex
      direction="column"
      borderRightWidth={1}
      borderRightColor="#333"
      paddingRight={2}
      paddingY={10}
    >
      <Link
        to="/dashboard"
        as={RouterLink}
      >
        <Button
          preset="primary"
          active={props.page === 'dashboard'}
        >
          <Text fontSize="xs">Dashboard</Text>
        </Button>
      </Link>

      <Link
        to="/resources"
        as={RouterLink}
      >
        <Button
          preset="primary"
          active={props.page === 'resources'}
        >
          <Text fontSize="xs">Resources</Text>
        </Button>
      </Link>

      <Link
        to="/marketplace"
        as={RouterLink}
      >
        <Button
          preset="primary"
          active={props.page === 'marketplace'}
        >
          <Text fontSize="xs">Marketplace</Text>
        </Button>
      </Link>

      <Link
        to="/hangar"
        as={RouterLink}
      >
        <Button
          preset="primary"
          active={props.page === 'hangar'}
        >
          <Text fontSize="xs">Hangar</Text>
        </Button>
      </Link>

      <Link
        to="/galaxy"
        as={RouterLink}
      >
        <Button
          preset="primary"
          active={props.page === 'galaxy'}
        >
          <Text fontSize="xs">Galaxy</Text>
        </Button>
      </Link>

      <Link
        to="/planet"
        as={RouterLink}
      >
        <Button
          preset="primary"
          active={props.page === 'planet'}
        >
          <Text fontSize="xs">Planet</Text>
        </Button>
      </Link>

      <Link
        to="/alliances"
        as={RouterLink}
      >
        <Button
          preset="primary"
          active={props.page === 'alliances'}
        >
          <Text fontSize="xs">Alliances</Text>
        </Button>
      </Link>
    </Flex>
  );
}
