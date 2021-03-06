// https://hub.fastgit.org/react-component/motion
import React from "react";
import CSSMotion, {CSSMotionProps} from 'rc-motion';
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
  motion?: CSSMotionProps;
  destroyPopupOnHide?: boolean;
  forceRender?: boolean;

  // Legacy Motion
  animation?: string;
  transitionName: string;

  // Events
  // onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  // onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
  // onMouseDown?: React.MouseEventHandler<HTMLDivElement>;
  // onTouchStart?: React.TouchEventHandler<HTMLDivElement>;
}

const Popup = React.forwardRef<any, PopupProp>(
  (props: PopupProp, ref) => {
    const {
      prefixCls,
      className,
      children,
      visible,
      zIndex,
      style,

      // onMouseEnter,
      // onMouseLeave,
      // onMouseDown,
      // onTouchStart,
    } = props;

    const motion = {...getMotion(props)};

    const mergedStyle: React.CSSProperties = {
      // ...stretchStyle,
      zIndex,
      // opacity: visible ? undefined : 0,
      // pointerEvents: status === 'stable' ? undefined : 'none',
      ...style,
    };

    return (
      <CSSMotion
        visible={visible}
        ref={ref}
        leavedClassName={`${prefixCls}-hidden`}
        {...motion}
        motionName='ant-slide-up'
        // onAppearPrepare={onShowPrepare}
        // onEnterPrepare={onShowPrepare}
        // removeOnLeave={destroyPopupOnHide}
        forceRender
      >
        {
          ({className: motionClassName, style: motionStyle}, motionRef) => {
            const mergedClassName = classNames(
              // prefixCls,
              className,
              // alignedClassName,
              motionClassName,
              {
                [`${prefixCls}-hidden`]: !visible
              }
            );

            // console.log(children)

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
)

export default Popup;
