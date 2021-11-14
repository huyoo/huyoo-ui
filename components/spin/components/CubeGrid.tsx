import React, {useMemo} from "react";
import {basePrefixCls} from "../../utils/util";
import BaseContainer, {SpinProps} from "./BaseContainer";

const prefixCls = `${basePrefixCls}-spin-cube-gird`;

const CubeGrid: React.FC<SpinProps> = (props) => {
  const {children: content, ...rest} = props;

  const cubeList = useMemo(() => {
    return new Array(9).fill(undefined).map((item, index) => {
      return <div className={`${prefixCls}-cube-item`} key={`${prefixCls}-item-${index}`}/>
    })
  }, [])

  return (
    <BaseContainer {...rest} prefixCls="cube-gird" content={content}>
      {cubeList}
    </BaseContainer>
  )
}

CubeGrid.defaultProps = {
  className: '',
  style: {},
  spinning: false
}

export default CubeGrid;
