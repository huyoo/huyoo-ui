import React from 'react';
import {Radio} from 'antd';
import Between from './Between';
import CheckBoxEditor from './CheckBoxEditor';
import FromEvery from './FromEvery';
import {getCurrentRegIndex, index} from './reg';
import BaseEditor, {IBaseEditorProps} from './BaseEditor';

const RadioGroup = Radio.Group;

const defaultRadioKeyValue: {
  [key: string]: string;
} = {
  [index.EVERY]: '*',
  [index.BETWEEN]: '0-23',
  [index.FROM_EVERY]: '0/1',
  [index.CHECK_BOX]: '0',
};

class HourEditor extends BaseEditor<{}> {
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
    const {radioStyle, value: defaultValue, locale, ...config} = this.props;
    const {value} = this.state;

    const radio = getCurrentRegIndex(defaultValue);

    return (
      <RadioGroup onChange={e => this.handleRadioChange(e, defaultRadioKeyValue)} value={radio}>
        <Radio style={radioStyle} value={index.EVERY}>
          {locale.everyHour}
        </Radio>
        <Radio style={radioStyle} value={index.BETWEEN}>
          {`${locale.period} `}
          <Between
            locale={locale}
            disabled={radio !== index.BETWEEN}
            max={23}
            value={value?.[index.BETWEEN] || defaultRadioKeyValue[index.BETWEEN]}
            {...config}
            onChange={(value: string) => this.handleValueChange(index.BETWEEN, value)}
          />
        </Radio>
        <Radio style={radioStyle} value={index.FROM_EVERY}>
          <FromEvery
            disabled={radio !== index.FROM_EVERY}
            front={locale.from}
            middle={locale.startFromHour}
            back={locale.howOftenHour}
            fromMax={23}
            everyMax={23}
            value={value?.[index.FROM_EVERY] || defaultRadioKeyValue[index.FROM_EVERY]}
            {...config}
            onChange={(value: string) => this.handleValueChange(index.FROM_EVERY, value)}
          />
        </Radio>
        <Radio style={radioStyle} value={index.CHECK_BOX}>
          {locale.definition}
          <CheckBoxEditor
            disabled={radio !== index.CHECK_BOX}
            max={23}
            value={value?.[index.CHECK_BOX] || defaultRadioKeyValue[index.CHECK_BOX]}
            {...config}
            onChange={(value: string) => this.handleValueChange(index.CHECK_BOX, value)}
          />
        </Radio>
      </RadioGroup>
    );
  }
}

export default HourEditor;
