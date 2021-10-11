import React from 'react';
import { ActionButton } from './ActionButton';
import { Popover } from '../Popover';

type Props = {
  id: string,
  label: string,
};

export const ActionButtonHoc = (PopoverContentComponent: React.FunctionComponent) => function Component(props: Props) {
  const [coords, setCoords] = React.useState({ x: 0, y: 0 });
  const [isPopoverVisible, setPopoverVisibility] = React.useState(false);
  const onShowPopover = (
    coords: Parameters<React.ComponentProps<typeof ActionButton>['onClick']>[0]
  ) => {
    setCoords(coords);
    setPopoverVisibility(true);
  };
  const onHidePopover = () => {
    setPopoverVisibility(false);
  };
  return (
    <>
      <ActionButton
        label={props.label}
        onClick={onShowPopover}
      />
      <Popover
        {...coords}
        id={props.id}
        visibility={isPopoverVisible}
        onHide={onHidePopover}
      >
        <PopoverContentComponent />
      </Popover>
    </>
  );
}
