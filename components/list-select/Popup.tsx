/**
 * @DECS:
 * @AUTH: hy
 * @DATE: 2021-06-07
 * https://hub.fastgit.org/react-component/motion
 */
import * as React from "react";
import type { CSSMotionProps, MotionEndEventHandler } from 'rc-motion';
import CSSMotion from 'rc-motion';
import classNames from 'classnames';
import { getMotion } from './legacyUtil';

export interface PopupProp {
  visible?: boolean;

  prefixCls: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  zIndex?: number;

  // Motion
  motion: CSSMotionProps;
  destroyPopupOnHide?: boolean;
  forceRender?: boolean;

  // Legacy Motion
  animation: any; //AnimationType;
  transitionName: any; //TransitionNameType;

}

const Popup: React.FC<PopupProp> = (props) => {
  const {
    visible,

  } = props;

  const motion = { ...getMotion(props) };

  const mergedStyle: React.CSSProperties = {
    ...stretchStyle,
    zIndex,
    opacity:
      status === 'motion' || status === 'stable' || !visible ? undefined : 0,
    pointerEvents: status === 'stable' ? undefined : 'none',
    ...style,
  };

  return (
    <CSSMotion
      visible={visible}
      // ref={elementRef}
      leavedClassName={`${prefixCls}-hidden`}
      {...motion}
      onAppearPrepare={onShowPrepare}
      onEnterPrepare={onShowPrepare}
      removeOnLeave={destroyPopupOnHide}
      // forceRender={forceRender}
    >
      {
        ({ className: motionClassName, style: motionStyle }, motionRef) => {
          const mergedClassName = classNames(
            prefixCls,
            className,
            alignedClassName,
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
              <div>Node</div>
            </div>
          )
        }
      }
      <div>Popup</div>
    </CSSMotion>
  )
}

export default Popup;
