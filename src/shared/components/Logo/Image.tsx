import React from 'react';

export function Image() {
  return (
    <img
      src={require('../../assets/logo_big.jpg').default}
      style={{
        width: "auto", height: "auto", objectFit: "cover"
      }}
    >
    </img >
  );
}
