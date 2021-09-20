import React from 'react';
import Radio from 'antd/es/radio';
import Between from './Between';
import CheckBoxEditor from './CheckBoxEditor';
import FromEvery from './FromEvery';
import { getCurrentRegIndex, index } from './reg';
import BaseEditor, { IBaseEditorProps } from './BaseEditor';

const RadioGroup = Radio.Group;

const defaultRadioKeyValue: {
  [key: string]: string;
} = {
  [index.EVERY]: '*',
  [index.BETWEEN]: '1-2',
  [index.FROM_EVERY]: '1/1',
  [index.CHECK_BOX]: 'C',
};

class MonthEditor extends BaseEditor<{}> {
  constructor(props: IBaseEditorProps) {
    super(props);
    this.state = {
      value: defaultRadioKeyValue,
    };
  }

  render() {
    const { radioStyle, value: defaultValue, locale } = this.props;
    const radio = getCurrentRegIndex(defaultValue);

    return (
      <RadioGroup onChange={this.handleRadioChange} value={radio}>
        <Radio style={radioStyle} value={index.EVERY}>
          {locale.everyMouth}
        </Radio>
        <Radio style={radioStyle} value={index.BETWEEN}>
          {`${locale.period} `}
          <Between
            locale={locale}
            disabled={radio !== index.BETWEEN}
            min={1}
            max={12}
            value={defaultRadioKeyValue[index.BETWEEN]}
            onChange={(value: string) => this.handleValueChange(index.BETWEEN, value)}
          />
        </Radio>
        <Radio style={radioStyle} value={index.FROM_EVERY}>
          <FromEvery
            disabled={radio !== index.FROM_EVERY}
            front={locale.from}
            middle={locale.startFromMonth}
            back={locale.howOftenMonth}
            fromMax={12}
            everyMax={12}
            onChange={(value: string) => this.handleValueChange(index.FROM_EVERY, value)}
            value={defaultRadioKeyValue[index.FROM_EVERY]}
          />
        </Radio>
        <Radio style={radioStyle} value={index.CHECK_BOX}>
          {locale.definition}
          <CheckBoxEditor
            disabled={radio !== index.CHECK_BOX}
            min={1}
            max={12}
            value={defaultRadioKeyValue[index.CHECK_BOX]}
            onChange={(value: string) => this.handleValueChange(index.CHECK_BOX, value)}
          />
        </Radio>
      </RadioGroup>
    );
  }
}

export default MonthEditor;
