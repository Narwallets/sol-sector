import React from 'react';
import { Button } from '../../shared/components';
import { Flex, Link, Center } from '@chakra-ui/react'
import { Link as RouterLink } from "react-router-dom"
import { Gap } from '../../shared/components'

export function Footer() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
    >
      <Link
        to="/marketplace"
        as={RouterLink}
      >
        <Button preset="primary" >
          <Center>
            Free Ticket
          </Center>
        </Button>
      </Link>

      <Gap.Horizontal preset="lg" />

      <Link
        to="/incinerator"
        as={RouterLink}
      >
        <Button preset="dark" >
          <Center>
            Incineration
          </Center>
        </Button>
      </Link>
    </Flex>
  );
}
