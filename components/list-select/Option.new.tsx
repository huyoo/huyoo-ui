import React from "react";

export interface OptionProp {
  className: string
  name: string;
  code: string;
  extra?: React.ReactNode;
  onClick?: () => void;
  prefixCls?: string;
  style?: React.CSSProperties;
}

const Option: React.RefForwardingComponent<any, OptionProp> = (
  {
    code,
    extra,
    name,
    prefixCls,
    ...restProp
  },
  ref
) => {

  return (
    <div {...restProp} ref={ref}>
      <div className={`${prefixCls}-label`}>
        <div>{name}</div>
        <span className={`${prefixCls}-code`}>{code}</span>
      </div>
      {
        extra ? <div className={`${prefixCls}-extra`}>{extra}</div> : null
      }
    </div>
  )
}

const RefOption = React.forwardRef<any, OptionProp>(Option);
RefOption.displayName = "Option";

export default RefOption;
