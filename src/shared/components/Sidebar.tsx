import React from 'react';
import { Flex, Link, Center, Spacer, Box, Text } from '@chakra-ui/react'
import { Link as RouterLink } from "react-router-dom"
import { Button } from './Button';
import { GapVertical } from './GapVertical';

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
      >
        <Button
          preset="primary"
          active={props.page === 'home'}
        >
          <Text fontSize="xs">Home</Text>
        </Button>
      </Link>

      <GapVertical />

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

      <GapVertical />

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

      <GapVertical />

      <Link
        to="/investigation"
        as={RouterLink}
      >
        <Button
          preset="primary"
          active={props.page === 'investigation'}
        >
          <Text fontSize="xs">Investigation</Text>
        </Button>
      </Link>

      <GapVertical />

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

      <GapVertical />

      <Link
        to="/planet"
        as={RouterLink}
      >
        <Button
          preset="secondary"
          active={props.page === 'planet'}
        >
          <Text fontSize="xs">Planet</Text>
        </Button>
      </Link>

      <GapVertical />

      <Link
        to="/resources"
        as={RouterLink}
      >
        <Button
          preset="secondary"
          active={props.page === 'resources'}
        >
          <Text fontSize="xs">Resources</Text>
        </Button>
      </Link>

      <GapVertical />

      <Link
        to="/hangar"
        as={RouterLink}
      >
        <Button
          preset="secondary"
          active={props.page === 'hangar'}
        >
          <Text fontSize="xs">Hangar</Text>
        </Button>
      </Link>

      <GapVertical />

      <Link
        to="/production"
        as={RouterLink}
      >
        <Button
          preset="secondary"
          active={props.page === 'production'}
        >
          <Text fontSize="xs">Production</Text>
        </Button>
      </Link>

      <GapVertical />

      <Link
        to="/facilities"
        as={RouterLink}
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
