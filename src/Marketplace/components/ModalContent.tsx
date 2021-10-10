import React from 'react';
import { Box, Td, Text, Image, Flex, Spacer, Center } from "@chakra-ui/react"

type Props = {
  onHide: () => any,
};

export function ModalContent(props: Props) {
  React.useEffect(() => {
    document.getElementById('modal-container')!.classList.add('revealing');
  }, []);

  const onHide = (e: React.MouseEvent<HTMLElement>) => {
    if ((e.target as HTMLElement).id === 'modal-content-container') {
      document.getElementById('modal-container')!.classList.remove('revealing');
      props.onHide();
    }
  };

  return (
    <Flex
      id="modal-content-container"
      onClick={onHide}
      h="100vh"
      flex={1}
      backgroundColor="rgba(0,0,0,0.5)"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        backgroundColor="#fff"
        width={500}
        height={500}
        p={1}
        borderRadius={3}
      >
        <Text color="black">
          TODO: contenido
        </Text>
      </Flex>
    </Flex>
  );
}
