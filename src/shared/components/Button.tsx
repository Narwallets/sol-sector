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
  disable?: boolean,
};

export function Button(props: Props) {
  const className = `
    button-${props.preset}
    ${props.active?'active':''}
    ${props.disable?'button disable':''}
  `;

  const onClick = React.useCallback((e) => {
    if (!props.disable && props.onClick) {
      props.onClick(e);
    }
  }, [props.disable, props.onClick]);

  return (
    <Box
      className={className}
      onClick={onClick}
    >
      {props.children}
    </Box>
  );
}
