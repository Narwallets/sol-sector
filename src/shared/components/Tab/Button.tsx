import React from 'react';
import { Box } from '@chakra-ui/react';

type Props = {
  active?: boolean,
  onClick?: React.MouseEventHandler<HTMLDivElement>,
  children: React.ReactNode,
};

export function Button(props: Props) {
  const className = `tab text-sm ${props.active?'active':''}`;
  return (
    <Box
      className={className}
      onClick={props.onClick}
    >
      {props.children}
    </Box>
  );
}
