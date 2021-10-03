import React from 'react';
import { Flex, Link, Center, Spacer, Box } from '@chakra-ui/react'

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
      style={{
        backgroundColor: '#333',
        borderRadius: 5,
        width: 150,
        overflow: 'hidden',
      }}
    >
      <img
        src={require('../assets/h.jpg').default}
        style={{ width: 150, height: 120 }}
      />
      <Box
        backgroundColor="#555"
        p={1}
      >
        <h3 className="text-lg">Mina de hidrogeno</h3>
        <p className="text-xs">{quantity} unidades</p>
        <p className="text-xs">{productionPerFiveSeconds} cada 5 segundos</p>
      </Box>
    </Box>
  );
}
