/**
 * @DECS: 年份选择
 * @AUTH: hy
 * @DATE: 2021-06-01
 */
import * as React from "react";
import * as moment from "moment";
import { Moment } from 'moment';
import Picker from "rc-picker";
import {PickerBaseProps} from "rc-picker/lib/Picker";
import momentGenerateConfig from 'rc-picker/lib/generate/moment';
import SizeContext from 'antd/lib/config-provider/SizeContext';
import LocaleReceiver from "antd/lib/locale-provider/LocaleReceiver";
import {CloseCircleFilled, DoubleLeftOutlined, DoubleRightOutlined} from '@ant-design/icons';
import zhCN from 'rc-picker/lib/locale/zh_CN';

export type PickerProps = PickerBaseProps<string>

export interface YearPickerProp {
  value?: string;
  defaultValue?: string;
  onChange?: (value?: string) => void;
  classNames?: string;
  style?: React.CSSProperties;
  size?: 'large' | 'middle' | 'small';
  disabled?: boolean;
}

const YearPicker: React.FC<YearPickerProp> = (
  {
    classNames,
    value,
    defaultValue,
    onChange,
    ...restProps
  }
) => {
  const overrideProps: any = {};

  if (value) {
    overrideProps.value = moment(value);
  }
  if (defaultValue) {
    overrideProps.defaultValue = moment(defaultValue);
  }

  const renderPicker = () => {
    return (
      <SizeContext.Consumer>
        {size => {
          return (
            <Picker<Moment>
              picker='year'
              allowClear
              transitionName="slide-up"
              clearIcon={<CloseCircleFilled/>}
              prevIcon={<DoubleLeftOutlined/>}
              nextIcon={<DoubleRightOutlined/>}
              generateConfig={momentGenerateConfig}
              locale={zhCN}
              prefixCls='antd-ext-year-picker'
              superPrevIcon={<DoubleLeftOutlined/>}
              superNextIcon={<DoubleRightOutlined/>}
              onChange={(date, dateString) => onChange && onChange(dateString)}
              {...restProps}
              {...overrideProps}
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

export default YearPicker;
