import React, {useMemo} from "react";
import SizeContext from "antd/lib/config-provider/SizeContext";
import cls from "classnames";
import {basePrefixCls} from "../../utils/util";

const prefixCls = `${basePrefixCls}-spin-cube-gird`;

export interface CubeGridProp {
  className?: string
  size?: 'small' | 'default' | 'large';
  style?: React.CSSProperties;
  spinning?: boolean;
}

const CubeGrid: React.FC<CubeGridProp> = (props) => {
  const {className, style, spinning, children, size: customSize} = props;

  const cubeList = useMemo(() => {
    return new Array(9).fill(undefined).map((item, index)=> {
      return <div className={`${prefixCls}-cube-item`} key={`${prefixCls}-item-${index}`}/>
    })
  }, [])

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
                    {cubeList}
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

CubeGrid.defaultProps = {
  className: '',
  style: {},
  spinning: false
}

export default CubeGrid;
