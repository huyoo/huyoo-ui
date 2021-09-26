/**
 * @DECS: Cron 表达式构造器
 * @AUTH: hy
 * @DATE: 2021-06-06
 */
import {Input, Popover } from "antd";
import * as React from "react";
import {useEffect, useRef, useState} from "react";
import Builder from "./Builder";

export interface CronBuilderProp {
  /**
   * @description 选择器类名
   */
  className?: string;

  /**
   * @description 样式
   */
  style?: React.CSSProperties;

  /**
   * @description 选择器值
   * @default '* * * ? * * *'
   */
  value?: string;

  /**
   * @description 值发生变化时的回调
   */
  onChange?: (value?: string) => void
}

const CronBuilder: React.FC<CronBuilderProp> = (props) => {
  const {
    style,
    className,
    value,
    onChange
  } = props;

  let ref = useRef<any>(null);
  const [checked, setChecked] = useState<string>('');

  useEffect(() => {
    setChecked(value || '* * * ? * * *')
  }, [value]);

  const handleSelect = (v:string) => {
    if (onChange) {
      onChange(v);
    }else {
      setChecked(v);
    }
  }

  const onInputChange = () => {
    if (onChange) {
      onChange();
    }else {
      setChecked('')
    }
  }

  return (
    <div
      style={style}
      className={'antd-ext-cron-builder '+ className}
      ref={ref}
    >
      <Popover
        trigger="click"
        getPopupContainer={() => ref.current}
        content={
          <div style={{ width: '600px' }}>
            <Builder value={checked as string} onChange={handleSelect} />
          </div>
        }
      >
        <Input value={checked} allowClear onChange={onInputChange} />
      </Popover>
    </div>
  )
}

export default CronBuilder;
