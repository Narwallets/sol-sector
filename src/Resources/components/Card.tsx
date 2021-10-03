import React from 'react';
import { Flex, Link, Center, Spacer, Box, Image, Heading, Text } from '@chakra-ui/react'

export function Card() {
  const [quantity, setQuantity] = React.useState(100);
  const FIVE_SECONDS_IN_MILLISECONDS = 1000*5;
  const productionPerFiveSeconds = 0.00001;

  React.useEffect(() => {
    const idInterval = setInterval(() =>
      setQuantity((q) => q + q * productionPerFiveSeconds),
      FIVE_SECONDS_IN_MILLISECONDS
    );
    return () => clearTimeout(idInterval);
  }, []);

  return (
    <Box
      backgroundColor="gray.300"
      rounded={5}
      width={150}
      overflow="hidden"
    >
      <Image
        src={require('../assets/h.jpg').default}
        width={150}
        height={120}
      />
      <Box
        backgroundColor="gray.600"
        p={1}
      >
        <Heading size="sm">Mina de hidrogeno</Heading>
        <Text fontSize="xs">{quantity} unidades</Text>
        <Text fontSize="xs">{productionPerFiveSeconds} cada 5 segundos</Text>
      </Box>
    </Box>
  );
}
