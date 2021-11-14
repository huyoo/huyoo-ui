import React from "react";
import BaseContainer, {SpinProps} from "./BaseContainer";

const Roll: React.FC<SpinProps> = (props) => {
  const {children: content, ...rest} = props;

  return (
    <BaseContainer {...rest} prefixCls="roll" content={content}/>
  )
}

Roll.defaultProps = {
  className: '',
  style: {},
  spinning: false
}

export default Roll;
