import React from 'react';

import logoBigImage from "../../assets/logo_big.jpg"

export function Image() {
  return (
    <img
      src={logoBigImage}
      style={{
        width: "auto", height: "auto", objectFit: "cover"
      }}
    >
    </img >
  );
}
