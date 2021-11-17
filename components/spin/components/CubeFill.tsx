import React from "react";
import {basePrefixCls} from "../../utils/util";
import BaseContainer,{SpinProps} from "./BaseContainer";

const prefixCls = `${basePrefixCls}-spin-cube-fill`;

const CubeFill: React.FC<SpinProps> = (props) => {
  const {children: content, ...rest} = props;

  return (
    <BaseContainer {...rest} prefixCls="cube-fill" content={content}>
      <div className={`${prefixCls}-inner`}/>
    </BaseContainer>
  )
}

CubeFill.defaultProps = {
  className: '',
  style: {},
  spinning: false
}

export default CubeFill;
