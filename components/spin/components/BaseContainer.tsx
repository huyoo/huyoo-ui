import SizeContext from "antd/lib/config-provider/SizeContext";
import React, {useMemo} from "react";
import cls from "classnames";
import {basePrefixCls} from "../../utils/util";

export const spinPrefixCls = `${basePrefixCls}-spin`;

export interface SpinProps {
  className?: string
  size?: 'small' | 'default' | 'large';
  style?: React.CSSProperties;
  spinning?: boolean;
}

export interface BaseContainerProp extends SpinProps {
  prefixCls: string;
  content: React.ReactNode;
}

const BaseContainer: React.FC<BaseContainerProp> = (props) => {
  const {size: customSize, style, prefixCls, className, spinning, children, content} = props;

  const newCls = useMemo(() => `${spinPrefixCls}-${prefixCls}`, [prefixCls]);

  return (
    <SizeContext.Consumer>
      {
        size => {
          const mergeSize = customSize || size;
          const classNames = cls(spinPrefixCls, {[`${newCls}-${mergeSize}`]: mergeSize}, newCls, className);

          return (
            <div className={classNames} style={style}>
              {spinning && (
                <div className={`${spinPrefixCls}-mask`}>
                  <div className={`${newCls}-box`}>
                    {children}
                  </div>
                </div>
              )}
              <div className={cls(`${spinPrefixCls}-container`, {[`${spinPrefixCls}-spin-blur`]: spinning})}>
                {content}
              </div>
            </div>
          )
        }
      }
    </SizeContext.Consumer>
  )
}

export default BaseContainer;
