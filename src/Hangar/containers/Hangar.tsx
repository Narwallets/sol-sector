import React from 'react';
import { Flex, Link, Center, Button, Spacer, Box } from '@chakra-ui/react'
import { Page } from '../../shared/components';
import { Card } from '../components/Card'
import { Assets } from '../assets'

export function Hangar() {
  return (
    <Page id="hangar">
      <Flex
        direction="row"
        flexWrap="wrap"
      >
        <Card
          asset={Assets.spacecraft1}
          name="VX-110"
        />
        <Spacer />
        <Card
          asset={Assets.spacecraft1}
          name="VX-110"
        />
        <Spacer />
        <Card
          asset={Assets.spacecraft1}
          name="VX-110"
        />
        <Spacer />
        <Card
          asset={Assets.spacecraft1}
          name="VX-110"
        />
      </Flex>
    </Page>
  );
}
