import React from 'react';

type Props = {
  id: string,
  currentTab?: string,
  children: React.ReactNode,
};

export function Item(props: Props) {
  return (
    <>
      {props.currentTab === props.id ? props.children : null}
    </>
  );
}
