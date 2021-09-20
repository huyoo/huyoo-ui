import React from 'react';
import Checkbox from 'antd/es/checkbox';
import Row from 'antd/es/row';
import Col from 'antd/es/col';

export interface ICheckBoxEditorProps {
  onChange?: (value: string) => void;
  min?: number;
  max: number;
  value: string;
  disabled?: boolean;
}

const CheckBoxEditor = ({ onChange, min = 0, max, value, disabled }: ICheckBoxEditorProps) => {
  let checked: number[] = [];
  const checkBoxs = (minValue: any, maxValue: any) => {
    const items = [];
    for (let i = minValue; i <= maxValue; i += 1) {
      items.push(
        <Col span={2} key={i}>
          <Checkbox value={i}>{i}</Checkbox>
        </Col>,
      );
    }
    return items;
  };

  const handleChange = (values: any) => {
    if (values.length === 0 && onChange) onChange('*');
    else if (onChange) onChange(values.sort((a: any, b: any) => a - b).join(','));
  };

  if (value === 'C') {
    // empty
  } else if (value) {
    checked = value
      .split(',')
      .map((i: any) => parseInt(i, 0))
      .filter((v: any) => v >= min && v <= max)
      .sort((a: any, b: any) => a - b);

    const s = checked.join(',');
    if (s !== value && onChange) {
      onChange(s);
    }
  }

  return (
    <Checkbox.Group disabled={disabled} onChange={handleChange} value={checked}>
      <Row>{checkBoxs(min, max)}</Row>
    </Checkbox.Group>
  );
};

export default CheckBoxEditor;
