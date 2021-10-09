import React from 'react';
import { Box } from '@chakra-ui/react';

type Props = {
  preset:
    | 'primary'
    | 'secondary'
    | 'info'
    | 'light'
    | 'dark'
  active?: boolean,
  onClick?: React.MouseEventHandler<HTMLDivElement>,
  children: React.ReactNode,
};

export function Button(props: Props) {
  const className = `button-${props.preset} text-sm ${props.active?'active':''}`;
  return (
    <Box
      className={className}
      onClick={props.onClick}
    >
      {props.children}
    </Box>
  );
}
