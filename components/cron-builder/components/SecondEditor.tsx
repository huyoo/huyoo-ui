import React, {CSSProperties} from 'react';
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
  [index.BETWEEN]: '0-59',
  [index.FROM_EVERY]: '0/1',
  [index.CHECK_BOX]: '0',
};

export interface ISecondEditorProps {
  value?: string;
  radioStyle?: CSSProperties;
}

class SecondEditor extends BaseEditor<ISecondEditorProps> {
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
    const {radioStyle, value: defaultValue, locale} = this.props;
    const {value} = this.state;

    const radio = getCurrentRegIndex(defaultValue);

    return (
      <RadioGroup onChange={e => this.handleRadioChange(e, defaultRadioKeyValue)} value={radio}>
        <Radio style={radioStyle} value={index.EVERY}>
          {locale.everySecond}
        </Radio>
        <Radio style={radioStyle} value={index.BETWEEN}>
          {`${locale.period} `}
          <Between
            locale={locale}
            disabled={radio !== index.BETWEEN}
            max={59}
            value={value?.[index.BETWEEN] || defaultRadioKeyValue[index.BETWEEN]}
            onChange={(value: string) => this.handleValueChange(index.BETWEEN, value)}
          />
        </Radio>
        <Radio style={radioStyle} value={index.FROM_EVERY}>
          <FromEvery
            disabled={radio !== index.FROM_EVERY}
            front={locale.from}
            middle={locale.startFromSecond}
            back={locale.howOftenSecond}
            onChange={(value: string) => this.handleValueChange(index.FROM_EVERY, value)}
            value={value?.[index.FROM_EVERY] || defaultRadioKeyValue[index.FROM_EVERY]}
          />
        </Radio>
        <Radio style={radioStyle} value={index.CHECK_BOX}>
          {locale.definition}
          <CheckBoxEditor
            disabled={radio !== index.CHECK_BOX}
            max={59}
            value={value?.[index.CHECK_BOX] || defaultRadioKeyValue[index.CHECK_BOX]}
            onChange={(value: string) => this.handleValueChange(index.CHECK_BOX, value)}
          />
        </Radio>
      </RadioGroup>
    );
  }
}

export default SecondEditor;
