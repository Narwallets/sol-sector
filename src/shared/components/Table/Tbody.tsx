import React from 'react';
import * as Chakra from "@chakra-ui/react"

type Props = {
  children: React.ReactNode,
};

export function Tbody(props: Props) {
  return (
    <Chakra.Tbody backgroundColor="#ccc2a6">
      {props.children}
    </Chakra.Tbody>
  );
}
