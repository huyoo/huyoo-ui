/**
 * @DECS: 年份选择
 * @AUTH: hy
 * @DATE: 2021-06-01
 */
import * as React from "react";
import {Moment} from "moment";
import Picker from "rc-picker";
import {PickerBaseProps} from "rc-picker/lib/Picker";
import momentGenerateConfig from 'rc-picker/lib/generate/moment';
import SizeContext from 'antd/lib/config-provider/SizeContext';
import LocaleReceiver from "antd/lib/locale-provider/LocaleReceiver";
import DoubleLeftOutlined from '@ant-design/icons/DoubleLeftOutlined';
import DoubleRightOutlined from '@ant-design/icons/DoubleRightOutlined';
import zhCN from 'rc-picker/lib/locale/zh_CN';

export type PickerProps = PickerBaseProps<string>

export interface YearPickerProp {

}

const YearPicker: React.FC<YearPickerProp> = (props) => {

  const renderPicker = () => {
    return (
      <SizeContext.Consumer>
        {size => {
          return (
            <Picker<Moment>
              picker='year'
              // clearIcon={<CloseCircleFilled/>}
              allowClear
              // transitionName="slide-up"
              prevIcon={<DoubleLeftOutlined/>}
              nextIcon={<DoubleRightOutlined/>}
              generateConfig={momentGenerateConfig}
              locale={zhCN}
              // className=
              // value={moment('2010')}
              // onSelect={}
              prefixCls='antd-ext-year-picker'
              // superPrevIcon={<span className={`${prefixCls}-super-prev-icon`} />}
              // superNextIcon={<span className={`${prefixCls}-super-next-icon`} />}
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
