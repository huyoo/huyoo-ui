import {Input, Popover} from "antd";
import * as React from "react";
import {useEffect, useRef, useState} from "react";
import Builder from "./Builder";

export interface CronBuilderProp {
  /**
   * @description 选择器类名
   */
  className?: string;

  /**
   * @description 初始值
   * @default * * * ? * * *
   */
  defaultValue?: string;

  /**
   * @description 是否禁用
   * @default false
   */
  disabled?: boolean;

  /**
   * @description 样式
   */
  style?: React.CSSProperties;

  /**
   * @description 选择器值。如果值不符合要求，将会使用默认值
   */
  value?: string;

  /**
   * @description 值发生变化时的回调
   */
  onChange?: (value: string) => void
}

const CronBuilder: React.FC<CronBuilderProp> = (props) => {
  const {
    className = '',
    defaultValue,
    disabled,
    style,
    value,
    onChange
  } = props;

  let ref = useRef<any>(null);
  const [checked, setChecked] = useState<string>(defaultValue || '* * * ? * * *');

  // useEffect(() => {
  //   if(value){
  //
  //   }
  //
  //   if (defaultValue && !value) {
  //     let newVal: string;
  //
  //     const corn = defaultValue?.split(' ');
  //
  //     if (corn?.length !== 7) {
  //       throw new Error(`[CronBuilder]: defaultValue except be seven chars like '* * * ? * * *', not ${defaultValue}.`)
  //     }
  //
  //     newVal = defaultValue;
  //     setChecked(newVal)
  //   }
  // }, [])

  useEffect(() => {

    if (!value) {
      return;
    }

    let newVal: string;

    const corn = value?.split(' ');

    if (corn?.length !== 7) {
      throw new Error(`[CronBuilder]: value except be seven chars like '* * * ? * * *', not ${value}.`)
    }

    newVal = value;
    setChecked(newVal)
  }, [value]);

  const handleSelect = (v: string) => {

    if (onChange) {
      onChange(v);
    }

    if (value === undefined) {
      setChecked(v);
    }
  }

  return (
    <div
      style={style}
      className={`antd-ext-cron-builder ${className}`}
      ref={ref}
    >
      <Popover
        trigger="click"
        getPopupContainer={() => ref.current}
        content={
          <div style={{width: '600px'}}>
            <Builder value={checked as string} onChange={handleSelect}/>
          </div>
        }
      >
        <Input value={checked} disabled={disabled}/>
      </Popover>
    </div>
  )
}

export default CronBuilder;
