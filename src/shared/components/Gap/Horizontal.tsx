import React from 'react';
import { Box } from '@chakra-ui/react'

type Props = {
  preset: 'lg' | 'md' | 'sm' | 'xs'
};

export function Horizontal(props: Props) {
  const size: Record<Props['preset'], number> = {
    lg: 10,
    md: 5,
    sm: 3,
    xs: 1,
  };

  return (
    <Box mx={size[props.preset]} />
  );
}
