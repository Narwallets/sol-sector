import React from 'react';
import * as Chakra from "@chakra-ui/react"
import backgroundImage from '../assets/background_image.jpg';

type Props = {
  children: React.ReactNode,
};

export function Container(props: Props) {
  return (
    <Chakra.Flex
      backgroundImage={backgroundImage}
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom"
      backgroundSize="cover"
      backgroundColor="#000"
      minHeight="100vh"
      p={5}
    >
      <Chakra.Container
        borderWidth={1}
        borderColor="#274168"
        borderRadius={3}
        height="max-content"
        backgroundColor="#192a43"
      >
        {props.children}
      </Chakra.Container>
    </Chakra.Flex>
  );
}
