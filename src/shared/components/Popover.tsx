import React from 'react';
import ReactDOM from "react-dom";

type Props = {
  id: string,
  x: number,
  y: number,
  visibility: boolean,
  onHide: () => any,
  children: React.ReactNode,
};

export function Popover(props: Props) {
  const wrapper = React.useRef<HTMLElement>(
    document.getElementById(props.id)!
  );

  React.useEffect(() => {
    wrapper.current.style.left = `${props.x.toFixed(2)}px`;
    wrapper.current.style.top = `${props.y.toFixed(2)}px`;
  }, [props.x, props.y]);

  React.useEffect(() => {
    if (props.visibility) {
      wrapper.current.classList.add('active');
    } else {
      wrapper.current.classList.remove('active');
    }
  }, [props.visibility]);

  React.useEffect(() => {
    function checkIfNeedToHidePopover(e: MouseEvent) {
      if (!e.target) {
        return;
      }
      const startTarget = e.target as HTMLElement;
      let insidePopover = startTarget.id === 'popover';
      for (
        let target = startTarget.parentElement;
        !insidePopover && target;
        target = target.parentElement
      ) {
        if (target.parentElement?.id === 'popover') {
          insidePopover = true;
        }
      }
      if (!insidePopover) {
        props.onHide();
      }
    }
    if (props.visibility) {
      document.body.addEventListener('click', checkIfNeedToHidePopover);
      return () => {
        document.body.removeEventListener('click', checkIfNeedToHidePopover); 
      };
    }
  }, [props.visibility]);

  return ReactDOM.createPortal(
    props.children,
    wrapper.current
  );
}
