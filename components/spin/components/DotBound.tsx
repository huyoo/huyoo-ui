import React from "react";
import BaseContainer, {spinPrefixCls, SpinProps} from "./BaseContainer";

const dotCls = `${spinPrefixCls}-dot-bound-dot`

const DotBound: React.FC<SpinProps> = (props) => {
  const {children: content, ...rest} = props;

  return (
    <BaseContainer
      {...rest}
      prefixCls='dot-bound'
      content={content}
    >
      <div className={dotCls}/>
      <div className={dotCls}/>
      <div className={dotCls}/>
      <div className={dotCls}/>
    </BaseContainer>
  )
}

DotBound.defaultProps = {
  className: '',
  style: {},
  spinning: false
}

export default DotBound;
