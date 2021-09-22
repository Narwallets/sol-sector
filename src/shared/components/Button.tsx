import React from 'react';
import { Box } from '@chakra-ui/react';

type Props = {
  preset:
    | 'primary'
    | 'secondary',
  active?: boolean,
  children: React.ReactNode,
};

export function Button(props: Props) {
  const className = `button-${props.preset} text-sm ${props.active?'active':''}`;
  return (
    <Box className={className}>
      {props.children}
    </Box>
  );
}
