import React from 'react';
import * as Chakra from "@chakra-ui/react"

type Props = {
  children: React.ReactNode,
};

export function Container(props: Props) {
  return (
    <Chakra.Flex
      backgroundImage={require('../assets/background_image.jpg').default}
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom"
      backgroundSize="cover"
      backgroundColor="#000"
      minHeight="100vh"
    >
      <Chakra.Container
        borderRadius={1}
        maxWidth={960}
        height="max-content"
        backgroundColor="#18222bbb"
        // backgroundImage="linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(33,33,33,1) 100%)"
        boxShadow="1px 1px 10px #000"
      >
        {props.children}
      </Chakra.Container>
    </Chakra.Flex>
  );
}
