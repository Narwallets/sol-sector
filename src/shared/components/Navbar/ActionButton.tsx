import React from 'react';
import { Flex, Spacer, Link, Box, Text } from "@chakra-ui/react"

type Props = {
  label: string,
  onClick: (coords: { x: number, y: number }) => any,
};

export function ActionButton(props: Props) {
  const onClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const coords = {
      x: rect.x,
      y: rect.y + rect.height,
    };
    props.onClick(coords);
  };
  return (
    <Box
      cursor="pointer"
      onClick={onClick}
    >
      <Flex
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Text fontSize="xs" color="white">
          {props.label}
        </Text>
        <Text fontSize="lg" color="white">
          ⌄
        </Text>
      </Flex>
    </Box>
  );
}
