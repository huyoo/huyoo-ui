import React from 'react';
import {Radio} from 'antd';
import moment from 'moment';
import Between from './Between';
import {getCurrentRegIndex, index} from './reg';
import BaseEditor, {IBaseEditorProps} from './BaseEditor';

const RadioGroup = Radio.Group;
const MIN_YEAR = moment().year();
const MAX_YEAR = 2099;

const defaultRadioKeyValue: {
  [key: string]: string;
} = {
  [index.EVERY]: '*',
  [index.BETWEEN]: `${MIN_YEAR}-${MAX_YEAR}`,
};

class YearEditor extends BaseEditor<{}> {
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
          {locale.everyYear}
        </Radio>
        <Radio style={radioStyle} value={index.BETWEEN}>
          {locale.period}
          <Between
            locale={locale}
            disabled={radio !== index.BETWEEN}
            min={MIN_YEAR}
            max={MAX_YEAR}
            value={value?.[index.BETWEEN] || defaultRadioKeyValue[index.BETWEEN]}
            onChange={(value: string) => this.handleValueChange(index.BETWEEN, value)}
          />
        </Radio>
      </RadioGroup>
    );
  }
}

export default YearEditor;
