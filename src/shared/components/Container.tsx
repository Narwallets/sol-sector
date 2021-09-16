import React from 'react';
import * as Chakra from "@chakra-ui/react"

type Props = {
  children: React.ReactNode,
};

export function Container(props: Props) {
  return (
    <Chakra.Flex
      backgroundColor="#ccc"
      minHeight="100vh"
      p={1}
    >
      <Chakra.Container
        borderWidth={1}
        p={1}
        height="max-content"
      >
        {props.children}
      </Chakra.Container>
    </Chakra.Flex>
  );
}
