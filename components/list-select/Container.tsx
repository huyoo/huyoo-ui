/**
 * @DECS:
 * @AUTH: hy
 * @DATE: 2021-06-08
 */
import * as React from "react";
import {HTMLAttributes, useEffect, useRef, useState} from "react";
import Portal from "rc-util/lib/Portal";
import ResizeObserver from 'rc-resize-observer'
import Popup from "./Popup";

const defaultProps = {
  focusDelay: 0
}

let delayTimer = null;

export interface ContainerProp {
  className?: string;
  prefixCls: string;
  popupNode?: React.ReactNode | React.ReactElement | string
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


  useEffect(() => {
    popupAlign();
  }, []);

  const popupAlign = () => {
    const targetPoint = containerRef.current.getBoundingClientRect();
    setPoint({
      top: targetPoint.top + targetPoint.height + document.documentElement.scrollTop,
      left: targetPoint.left + document.documentElement.scrollLeft
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
    // const { getDocument } = this.props;
    const popupContainer = document.createElement('div');
    document.getElementsByTagName('body')[0].append(popupContainer);

    popupContainer.style.position = 'absolute';
    popupContainer.style.top = '0';
    popupContainer.style.left = '0';
    popupContainer.style.width = '100%';
    popupContainer.style.zIndex = '1060';

    // this.attachParent(popupContainer);
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

  // const handleOnR

  const handleFocus = (ev) => {
    console.log(ev)
    delaySetPopupVisible(true, defaultProps.focusDelay)
  }

  const handleBlur = (ev) => {
    clearTimer();
    delaySetPopupVisible(false, defaultProps.focusDelay)
  }

  const newChildProps: HTMLAttributes<HTMLElement> & { key: string } = {
    key: 'container'
  }

  newChildProps.onFocus = handleFocus;
  newChildProps.onBlur = handleBlur;

  const child = React.cloneElement(React.Children.only(children) as React.ReactElement, newChildProps)

  let portal: React.ReactElement;

  // if (visible) {
  portal = (
    <Portal getContainer={getContainer}>
      <Popup
        prefixCls={prefixCls + '-dropdown'}
        className={prefixCls + '-dropdown'}
        style={{
          ...point,
          position: "relative",
          width: popupWidth,
          textAlign: "left"
        }}
        animation='slide-up'
        visible={visible}
      >
        {popupNode}
      </Popup>
    </Portal>
  )
  // }

  return (
    <div className={className} ref={containerRef}>
      <ResizeObserver onResize={popupAlign}>
        {child}
      </ResizeObserver>
      {portal}
    </div>
  );
}

export default Container;
