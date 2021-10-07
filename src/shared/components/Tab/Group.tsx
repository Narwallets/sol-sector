import React from 'react';
import { Flex, Link, Center, Spacer, Box, Text } from '@chakra-ui/react'
import { Button } from './Button';
import { Item } from './Item';
import { GapHorizontal } from '../GapHorizontal';

type Props = {
  initialTab: string,
  tabs: [string, string][],
  children: React.ReactElement<React.ComponentProps<typeof Item>>[],
};

export function Group(props: Props) {
  const [currentTab, setCurrentTab] = React.useState(props.initialTab);
  return (
    <div>
      <Flex
        direction="row"
      >
        {props.tabs.map(([id, name]) =>
        <>
          <Button
            onClick={() => setCurrentTab(id)}
            active={id === currentTab}
          >
            <Text fontSize="xs">{name}</Text>
          </Button>
          <GapHorizontal />
        </>
        )}
      </Flex>
      <div>
        {React.Children.map(props.children, (child) =>
          React.cloneElement(child, { currentTab })
        )}
      </div>
    </div>
  );
}
