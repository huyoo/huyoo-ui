/**
 * @DECS:
 * @AUTH: hy
 * @DATE: 2021-06-07
 * https://hub.fastgit.org/react-component/motion
 */
import * as React from "react";
import CSSMotion from 'rc-motion';
import { CSSMotionProps, MotionEndEventHandler} from 'rc-motion';
import classNames from 'classnames';
import {getMotion} from './legacyUtil';

export interface PopupProp {
  visible?: boolean;

  prefixCls: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  zIndex?: number;

  // Motion
  // motion: CSSMotionProps;
  destroyPopupOnHide?: boolean;
  forceRender?: boolean;

  // Legacy Motion
  animation: string;
  // transitionName: any; //TransitionNameType;

}

const Popup: React.FC<PopupProp> = (props) => {
  const {
    prefixCls,
    className,
    children,
    visible,
    zIndex,
    style
  } = props;

  const motion = {...getMotion(props)};

  const mergedStyle: React.CSSProperties = {
    // ...stretchStyle,
    zIndex,
    opacity: visible ? undefined : 0,
    // pointerEvents: status === 'stable' ? undefined : 'none',
    ...style,
  };

  return (
    <CSSMotion
      visible={visible}
      // ref={elementRef}
      leavedClassName={`${prefixCls}-hidden`}
      {...motion}
      // onAppearPrepare={onShowPrepare}
      // onEnterPrepare={onShowPrepare}
      // removeOnLeave={destroyPopupOnHide}
      // forceRender={forceRender}
    >
      {
        ({className: motionClassName, style: motionStyle}, motionRef) => {
          // console.log(motionRef, motionStyle)
          const mergedClassName = classNames(
            // prefixCls,
            className,
            // alignedClassName,
            motionClassName,
          );

          return (
            <div
              ref={motionRef}
              className={mergedClassName}
              // onMouseEnter={onMouseEnter}
              // onMouseLeave={onMouseLeave}
              // onMouseDownCapture={onMouseDown}
              // onTouchStartCapture={onTouchStart}
              style={{
                ...motionStyle,
                ...mergedStyle,
              }}
            >
              {children}
            </div>
          )
        }
      }
    </CSSMotion>
  )
}

export default Popup;
