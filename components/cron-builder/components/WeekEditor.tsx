import React from 'react';
import {Radio} from 'antd';
import Between from './Between';
import CheckBoxEditor from './CheckBoxEditor';
import WeekDay from './WeekDay';
import LastWeekDay from './LastWeekDay';
import { getCurrentRegIndex, index } from './reg';
import BaseEditor, { IBaseEditorProps } from './BaseEditor';

const RadioGroup = Radio.Group;

const defaultRadioKeyValue: {
  [key: string]: string;
} = {
  [index.EVERY]: '*',
  [index.ANY]: '?',
  [index.BETWEEN]: '1-2',
  [index.WEEK_DAY]: '1#1',
  [index.LAST_WEEK_DAY]: '1L',
  [index.CHECK_BOX]: '1',
};

class WeekEditor extends BaseEditor<{}> {
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
    const { radioStyle, value: defaultValue, locale } = this.props;
    const {value} = this.state;
    const radio = getCurrentRegIndex(defaultValue);

    return (
      <RadioGroup onChange={e => this.handleRadioChange(e, defaultRadioKeyValue)} value={radio}>
        <Radio style={radioStyle} value={index.EVERY}>
          {locale.everyWeek}
        </Radio>
        <Radio style={radioStyle} value={index.ANY}>
          {locale.indefinite}
        </Radio>
        <Radio style={radioStyle} value={index.BETWEEN}>
          {`${locale.period} `}
          <Between
            locale={locale}
            disabled={radio !== index.BETWEEN}
            min={1}
            max={7}
            value={value?.[index.BETWEEN] || defaultRadioKeyValue[index.BETWEEN]}
            onChange={(value: string) => this.handleValueChange(index.BETWEEN, value)}
          />
        </Radio>
        <Radio style={radioStyle} value={index.WEEK_DAY}>
          <WeekDay
            locale={locale}
            disabled={radio !== index.WEEK_DAY}
            onChange={(value: string) => this.handleValueChange(index.WEEK_DAY, value)}
            value={value?.[index.WEEK_DAY] || defaultRadioKeyValue[index.WEEK_DAY]}
          />
        </Radio>
        <Radio style={radioStyle} value={index.LAST_WEEK_DAY}>
          {`${locale.lastWeek} `}
          <LastWeekDay
            disabled={radio !== index.LAST_WEEK_DAY}
            value={value?.[index.LAST_WEEK_DAY] || defaultRadioKeyValue[index.LAST_WEEK_DAY]}
            onChange={(value: string) => this.handleValueChange(index.LAST_WEEK_DAY, value)}
          />
        </Radio>
        <Radio style={radioStyle} value={index.CHECK_BOX}>
          {locale.definition}
          <CheckBoxEditor
            style={{width: 500, marginLeft: 3}}
            disabled={radio !== index.CHECK_BOX}
            min={1}
            max={7}
            value={value?.[index.CHECK_BOX] || defaultRadioKeyValue[index.CHECK_BOX]}
            onChange={(value: string) => this.handleValueChange(index.CHECK_BOX, value)}
          />
        </Radio>
      </RadioGroup>
    );
  }
}

export default WeekEditor;
