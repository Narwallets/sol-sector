import React from 'react';
import { Flex, Link, Center, Spacer, Box } from '@chakra-ui/react'
import { Button } from './Button';
import { Item } from './Item';

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
        <Button
          onClick={() => setCurrentTab(id)}
          active={id === currentTab}
        >
          {name}
        </Button>
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
