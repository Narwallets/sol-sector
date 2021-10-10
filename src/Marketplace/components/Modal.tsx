import React from 'react';
import ReactDOM from 'react-dom';

import { ModalContent } from './ModalContent';

type Props = {
  onHide: () => any;
};

export function Modal(props: Props) {
  return ReactDOM.createPortal(
    <ModalContent onHide={props.onHide} />,
    document.getElementById('modal')!
  );
}
