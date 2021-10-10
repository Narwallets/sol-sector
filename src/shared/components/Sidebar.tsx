import React from 'react';
import { Flex, Link, Center, Spacer, Box, Text } from '@chakra-ui/react'
import { Link as RouterLink } from "react-router-dom"
import { Button } from './Button';
import { Gap } from './Gap';

type Props = {
  page:
    | 'home'
    | 'marketplace'
    | 'galaxy'
    | 'investigation'
    | 'alliances'
    | 'planet'
    | 'resources'
    | 'hangar'
    | 'production'
    | 'facilities'
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
        to="/home"
        as={RouterLink}
        my={1}
      >
        <Button
          preset="primary"
          active={props.page === 'home'}
        >
          <Text fontSize="xs">Home</Text>
        </Button>
      </Link>

      <Link
        to="/marketplace"
        as={RouterLink}
        my={1}
      >
        <Button
          preset="primary"
          active={props.page === 'marketplace'}
        >
          <Text fontSize="xs">Marketplace</Text>
        </Button>
      </Link>

      <Link
        to="/galaxy"
        as={RouterLink}
        my={1}
      >
        <Button
          preset="primary"
          active={props.page === 'galaxy'}
        >
          <Text fontSize="xs">Galaxy</Text>
        </Button>
      </Link>

      <Link
        to="/investigation"
        as={RouterLink}
        my={1}
      >
        <Button
          preset="primary"
          active={props.page === 'investigation'}
        >
          <Text fontSize="xs">Investigation</Text>
        </Button>
      </Link>

      <Link
        to="/alliances"
        as={RouterLink}
        my={1}
      >
        <Button
          preset="primary"
          active={props.page === 'alliances'}
        >
          <Text fontSize="xs">Alliances</Text>
        </Button>
      </Link>

      <Link
        to="/planet"
        as={RouterLink}
        my={1}
      >
        <Button
          preset="secondary"
          active={props.page === 'planet'}
        >
          <Text fontSize="xs">Planet</Text>
        </Button>
      </Link>

      <Link
        to="/resources"
        as={RouterLink}
        my={1}
      >
        <Button
          preset="secondary"
          active={props.page === 'resources'}
        >
          <Text fontSize="xs">Resources</Text>
        </Button>
      </Link>

      <Link
        to="/hangar"
        as={RouterLink}
        my={1}
      >
        <Button
          preset="secondary"
          active={props.page === 'hangar'}
        >
          <Text fontSize="xs">Hangar</Text>
        </Button>
      </Link>

      <Link
        to="/production"
        as={RouterLink}
        my={1}
      >
        <Button
          preset="secondary"
          active={props.page === 'production'}
        >
          <Text fontSize="xs">Production</Text>
        </Button>
      </Link>

      <Link
        to="/facilities"
        as={RouterLink}
        my={1}
      >
        <Button
          preset="secondary"
          active={props.page === 'facilities'}
        >
          <Text fontSize="xs">Facilities</Text>
        </Button>
      </Link>
    </Flex>
  );
}
