import React from 'react';
import { Box } from '@chakra-ui/react';

type Props = {
  preset:
    | 'primary'
    | 'secondary'
  children: React.ReactNode,
};

export function Button(props: Props) {
  const className = `button-${props.preset} text-sm`;
  return (
    <Box className={className}>
      {props.children}
    </Box>
  );
}
