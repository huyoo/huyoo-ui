/**
 * @DECS:
 * @AUTH: hy
 * @DATE: 2021-06-08
 */
import * as React from "react";
import {HTMLAttributes, useEffect, useRef, useState} from "react";
import Portal from "rc-util/lib/Portal";
import {composeRef, supportRef} from 'rc-util/lib/ref';
import ResizeObserver from 'rc-resize-observer';
import contains from 'rc-util/lib/Dom/contains';
import Popup from "./Popup";

const defaultProps = {
  focusDelay: 0
}

let delayTimer = null;

export interface ContainerProp {
  className?: string;
  prefixCls: string;
  popupNode?: React.ReactNode
}

const Container: React.FC<ContainerProp> = (props) => {
  const {
    children,
    className,
    prefixCls,
    popupNode,
    ...rest
  } = props;

  const [visible, setVisible] = useState(false);
  const [point, setPoint] = useState({left: 0, top: 0});
  const [popupWidth, setPopupWidth] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    popupAlign();
  }, []);

  useEffect(() => {
    const dom = document.getElementsByTagName('body')[0];

    dom.addEventListener('click', handleDocumentClick);
    return clearOutsideHandler;
  })


  const clearOutsideHandler = () => {
    const dom = document.getElementsByTagName('body')[0];

    dom.removeEventListener('click', handleDocumentClick)
  };

  const popupAlign = () => {
    const targetPoint = triggerRef.current.getBoundingClientRect();
    const {scrollLeft, scrollTop} = document.documentElement;

    setPoint({
      top: targetPoint.top + targetPoint.height + scrollTop,
      left: targetPoint.left + scrollLeft
    });

    setPopupWidth(targetPoint.width);
  }

  const clearTimer = () => {
    if (delayTimer) {
      clearTimeout(delayTimer);
      delayTimer = null;
    }
  }

  const getContainer = () => {
    const popupContainer = document.createElement('div');
    document.getElementsByTagName('body')[0].append(popupContainer);

    popupContainer.style.position = 'absolute';
    popupContainer.style.top = '0';
    popupContainer.style.left = '0';
    popupContainer.style.width = '100%';
    popupContainer.style.zIndex = '1060';

    return popupContainer;
  };

  const setPopupVisible = (
    popupVisible: boolean,
    event?: { pageX: number; pageY: number },
  ) => {
    clearTimer();
    popupAlign()
    setVisible(popupVisible);
  }

  const delaySetPopupVisible = (popupVisible: boolean, delayS: number, ev?: MouseEvent) => {
    const delay = delayS * 1000;
    clearTimer();

    if (delay) {
      delayTimer = setTimeout(() => {

      }, delay)
    } else {
      setPopupVisible(popupVisible)
    }
  }

  const handleClick = (ev) => {
    delaySetPopupVisible(true, defaultProps.focusDelay)
  }

  const handleDocumentClick = (ev) => {
    const {target} = ev;
    const containerNode = containerRef.current;
    const triggerNode = triggerRef.current;

    if (visible && (contains(containerNode, target) || contains(triggerNode, target))) {
      return;
    }

    delaySetPopupVisible(false, defaultProps.focusDelay)
  }

  // const handleBlur = (ev) => {
  //   clearTimer();
  //   delaySetPopupVisible(false, defaultProps.focusDelay)
  // }

  const newChildProps: HTMLAttributes<HTMLElement> & { key: string } = {
    key: 'container'
  }

  newChildProps.onClick = handleClick;

  if (supportRef(children)) {
    (newChildProps as any).ref = composeRef(triggerRef, (children as any).ref)
  }

  const child = React.cloneElement(React.Children.only(children) as React.ReactElement, newChildProps)

  let portal: React.ReactElement;

  portal = (
    <Portal getContainer={getContainer}>
      <Popup
        prefixCls={prefixCls + '-dropdown'}
        className={prefixCls + '-dropdown'}
        style={{
          ...point,
          width: popupWidth,
        }}
        transitionName='slide-up'
        visible={visible}
        ref={containerRef}
      >
        {popupNode}
      </Popup>
    </Portal>
  )

  return (
    <>
      <ResizeObserver onResize={popupAlign}>
        {child}
      </ResizeObserver>
      {portal}
    </>
  );
}

export default Container;
