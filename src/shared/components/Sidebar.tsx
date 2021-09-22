import React from 'react';
import { Flex, Link, Center, Spacer, Box } from '@chakra-ui/react'
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
          Dashboard
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
          Resources
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
          Marketplace
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
          Hangar
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
          Galaxy
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
          Planet
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
          Alliances
        </Button>
      </Link>
    </Flex>
  );
}
