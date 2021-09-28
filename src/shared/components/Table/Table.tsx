import React from 'react';
import * as Chakra from "@chakra-ui/react"

type Props = {
  children: React.ReactNode,
};

export function Table(props: Props) {
  return (
    <Chakra.Table size="sm">
      {props.children}
    </Chakra.Table>
  );
}
