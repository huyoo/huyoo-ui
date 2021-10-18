/**
 * @DECS: 年份选择
 * @AUTH: hy
 * @DATE: 2021-06-01
 */
import React, {useMemo} from "react";
import moment, {Moment} from 'moment';
import Picker from "rc-picker";
import cls from "classnames";
import momentGenerateConfig from 'rc-picker/lib/generate/moment';
import SizeContext from 'antd/lib/config-provider/SizeContext';
import LocaleReceiver from "antd/lib/locale-provider/LocaleReceiver";
import {CloseCircleFilled, DoubleLeftOutlined, DoubleRightOutlined} from '@ant-design/icons';
import zhCN from 'rc-picker/lib/locale/zh_CN';

const prefixCls = 'antd-ext-year-picker';

export interface YearPickerProp {
  /**
   * @description 选择器 className
   */
  classNames?: string;

  /**
   * @description 默认年度
   */
  defaultValue?: string;

  /**
   * @description 禁用
   * @default false
   */
  disabled?: boolean;

  /**
   * @description 输入框大小，large 高度为 40px，small 为 24px，默认是 32px
   */
  size?: 'large' | 'middle' | 'small';

  /**
   * @description 自定义输入框样式
   * @default {}
   */
  style?: React.CSSProperties;

  /**
   * @description 年度
   */
  value?: string;

  /**
   * @description 年度发生变化时的回调
   */
  onChange?: (value?: string) => void;

  /**
   * @description 输入框提示文字
   */
  placeholder?: string;
}

const YearPicker: React.FC<YearPickerProp> = (
  {
    classNames,
    value,
    defaultValue,
    onChange,
    size: customSize,
    ...restProps
  }
) => {
  const overrideProps: any = useMemo(() => {
    const obj:any = {};
    if (value) {
      obj.value = moment(value);
    }
    if (defaultValue) {
      obj.defaultValue = moment(defaultValue);
    }
    return obj;
  }, [value, defaultValue]);



  const renderPicker = () => {
    return (
      <SizeContext.Consumer>
        {size => {
          const mergedSize = customSize || size;

          return (
            <Picker<Moment>
              picker='year'
              allowClear
              transitionName="ant-slide-up"
              clearIcon={<CloseCircleFilled/>}
              prevIcon={<DoubleLeftOutlined/>}
              nextIcon={<DoubleRightOutlined/>}
              generateConfig={momentGenerateConfig}
              locale={zhCN}
              prefixCls={prefixCls}
              superPrevIcon={<DoubleLeftOutlined/>}
              superNextIcon={<DoubleRightOutlined/>}
              onChange={(date, dateString) => onChange && onChange(dateString)}
              {...restProps}
              {...overrideProps}
              className={cls({
                [`${prefixCls}-${mergedSize}`]: mergedSize,
              }, classNames)}
            />
          )
        }}
      </SizeContext.Consumer>
    )
  }

  return (
    <LocaleReceiver componentName='YearPicker'>
      {renderPicker}
    </LocaleReceiver>
  )
}

YearPicker.defaultProps = {
  style: {}
}

export default YearPicker;
