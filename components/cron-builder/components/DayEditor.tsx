import React from 'react';
import {Radio} from 'antd';
import Between from './Between';
import CheckBoxEditor from './CheckBoxEditor';
import FromEvery from './FromEvery';
import LastWorkDay from './LastWorkDay';
import { getCurrentRegIndex, index } from './reg';
import BaseEditor, { IBaseEditorProps } from './BaseEditor';

const RadioGroup = Radio.Group;

const defaultRadioKeyValue: {
  [key: string]: string;
} = {
  [index.EVERY]: '*',
  [index.ANY]: '?',
  [index.BETWEEN]: '1-2',
  [index.FROM_EVERY]: '1/1',
  [index.LAST_WORK_DAY]: '1W',
  [index.LAST_MONTH_DAY]: 'L',
  [index.CHECK_BOX]: '1',
};

class DayEditor extends BaseEditor<{}> {
  constructor(props: IBaseEditorProps) {
    super(props);

    const radio = getCurrentRegIndex(props.value);

    if (radio && props.value) {
      this.state = {
        value: {
          [radio]: props.value,
        },
      };
    } else {
      this.state = {
        value: defaultRadioKeyValue
      };
    }
  }

  render() {
    const { radioStyle, value: defaultValue, locale, onChange,...config } = this.props;
    const {value} = this.state;

    const radio = getCurrentRegIndex(defaultValue);

    return (
      <RadioGroup onChange={e => this.handleRadioChange(e, defaultRadioKeyValue)} value={radio}>
        <Radio style={radioStyle} value={index.EVERY}>
          {locale.everyDay}
        </Radio>
        <Radio style={radioStyle} value={index.ANY}>
          {locale.indefinite}
        </Radio>
        <Radio style={radioStyle} value={index.BETWEEN}>
          {locale.period}
          <Between
            locale={locale}
            disabled={radio !== index.BETWEEN}
            min={1}
            max={31}
            value={value?.[index.BETWEEN] || defaultRadioKeyValue[index.BETWEEN]}
            {...config}
            onChange={(value: string) => this.handleValueChange(index.BETWEEN, value)}
          />
        </Radio>
        <Radio style={radioStyle} value={index.FROM_EVERY}>
          <FromEvery
            disabled={radio !== index.FROM_EVERY}
            front={locale.from}
            middle={locale.startFromDay}
            back={locale.howOftenDay}
            onChange={(value: string) => this.handleValueChange(index.FROM_EVERY, value)}
            value={value?.[index.FROM_EVERY] ||defaultRadioKeyValue[index.FROM_EVERY]}
            {...config}
          />
        </Radio>
        <Radio style={radioStyle} value={index.LAST_WORK_DAY}>
          {`${locale.everyMouth} `}
          <LastWorkDay
            disabled={radio !== index.LAST_WORK_DAY}
            value={value?.[index.LAST_WORK_DAY] || defaultRadioKeyValue[index.LAST_WORK_DAY]}
            {...config}
            onChange={(value: string) => this.handleValueChange(index.LAST_WORK_DAY, value)}
          />
          {` ${locale.nearFromWorkDate}`}
        </Radio>
        <Radio style={radioStyle} value={index.LAST_MONTH_DAY}>
          {locale.lastDay}
        </Radio>
        <Radio style={radioStyle} value={index.CHECK_BOX}>
          {locale.definition}
          <CheckBoxEditor
            disabled={radio !== index.CHECK_BOX}
            min={1}
            max={31}
            value={value?.[index.CHECK_BOX] || defaultRadioKeyValue[index.CHECK_BOX]}
            {...config}
            onChange={(value: string) => this.handleValueChange(index.CHECK_BOX, value)}
          />
        </Radio>
      </RadioGroup>
    );
  }
}

export default DayEditor;
