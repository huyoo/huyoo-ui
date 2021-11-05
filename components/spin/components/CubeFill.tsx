import React from "react";
import {basePrefixCls} from "../../utils/util";
import cls from "classnames";
import SizeContext from "antd/lib/config-provider/SizeContext";
import {SpinProps} from "../interface";

const prefixCls = `${basePrefixCls}-spin-cube-fill`;

const CubeFill: React.FC<SpinProps> = (props) => {
  const {className, style, spinning, children, size: customSize} = props;

  return (
    <SizeContext.Consumer>
      {
        size => {
          const mergeSize = customSize || size;
          const classNames = cls(prefixCls, {[`${prefixCls}-${mergeSize}`]: mergeSize}, className);

          return (
            <div className={classNames} style={style}>
              {spinning && (
                <div className={`${prefixCls}-mask`}>
                  <div className={`${prefixCls}-item`}>
                    <div className={`${prefixCls}-item-inner`}/>
                  </div>
                </div>
              )}
              <div className={cls(`${prefixCls}-container`, {[`${prefixCls}-spin-blur`]: spinning})}>
                {children}
              </div>
            </div>
          )
        }
      }
    </SizeContext.Consumer>
  )
}

CubeFill.defaultProps = {
  className: '',
  style: {},
  spinning: false
}

export default CubeFill;
