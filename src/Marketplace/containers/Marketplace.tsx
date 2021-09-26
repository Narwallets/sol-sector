import React from 'react';
import { Flex, Link, Center, Button, Spacer, Box } from '@chakra-ui/react'
import { Page } from '../../shared/components';
import { Elements } from '../components/Elements';
import { Buildings } from '../components/Buildings';
import { Machinery } from '../components/Machinery';
import { Spacecraft } from '../components/Spacecraft';
import { Tab } from '../../shared/components';

export function Marketplace() {
  return (
    <Page id="marketplace">
      <Tab.Group
        initialTab="elements"
        tabs={[
          ['elements', 'Elements'],
          ['buildings', 'Buildings'],
          ['machinery', 'Machinery'],
          ['spacecraft', 'Spacecraft'],
        ]}
      >
        <Tab.Item
          id="elements"
        >
          <Elements />
        </Tab.Item>

        <Tab.Item
          id="buildings"
        >
          <Buildings />
        </Tab.Item>

        <Tab.Item
          id="machinery"
        >
          <Machinery />
        </Tab.Item>

        <Tab.Item
          id="spacecraft"
        >
          <Spacecraft />
        </Tab.Item>
      </Tab.Group>
    </Page>
  );
}

