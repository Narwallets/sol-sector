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
          name="Skylab"
        />
 
        <Card
          asset={Assets.spacecraft2}
          name="Galileo"
        />

        <Card
          asset={Assets.spacecraft3}
          name="Proton V"
        />

        <Card
          asset={Assets.spacecraft4}
          name="Zenit"
        />
      </Flex>
    </Page>
  );
}
