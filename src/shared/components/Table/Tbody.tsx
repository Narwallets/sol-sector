import React from 'react';
import * as Chakra from "@chakra-ui/react"
import { Row } from './Row';

type Props = {
  data: React.ComponentProps<typeof Row>[],
};

export function Tbody(props: Props) {
  return (
    <Chakra.Tbody backgroundColor="#ccc2a6">
      {props.data.map((item) =>
      <Row {...item} />
      )}
    </Chakra.Tbody>
  );
}
