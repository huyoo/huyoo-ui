import React, {MouseEvent} from "react";
import {CloseCircleFilled, DownOutlined, LoadingOutlined} from "@ant-design/icons";
import cls from "classnames";
import {SizeType} from "./interface";

export interface TriggerProp {
  prefixCls: string;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  allowClear?: boolean;
  value?: string | number;
  style?: React.CSSProperties;
  onClean: () => void;
  size: SizeType,
  placeholder?: string
}

const Trigger: React.RefForwardingComponent<any, TriggerProp> = (
  {
    prefixCls,
    className,
    loading,
    disabled,
    allowClear,
    value,
    onClean,
    size,
    placeholder,
    ...rest
  },
  ref
) => {

  const handleClear = React.useCallback((e: MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    onClean();
  }, [])

  let arrowNode: React.ReactNode = <DownOutlined className={`${prefixCls}-arrow`}/>;
  if (loading) {
    arrowNode = <LoadingOutlined className={`${prefixCls}-loading`}/>;
  }

  let clearNode: React.ReactNode;
  const mergeClear = !disabled && allowClear && value;
  if (mergeClear) {
    clearNode = <CloseCircleFilled onClick={handleClear} className={`${prefixCls}-clear`}/>;
  }

  const containerCls = cls(prefixCls, className, {
    [`${prefixCls}-disabled`]: disabled,
    [`${prefixCls}-allow-clear`]: mergeClear,
    [`${prefixCls}-show-loading`]: loading,
    [`${prefixCls}-lg`]: size === 'large',
    [`${prefixCls}-sm`]: size === 'small',
  })

  return (
    <div className={containerCls} ref={ref} {...rest}>
      <input
        className={`${prefixCls}-selector`}
        disabled={disabled}
        value={value || ''}
        readOnly
        onChange={onClean}
        placeholder={placeholder}
      />
      {arrowNode}
      {clearNode}
    </div>
  )
}

export default React.forwardRef<any, TriggerProp>(Trigger);
