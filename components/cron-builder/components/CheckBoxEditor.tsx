import React, {CSSProperties} from 'react';
import {Checkbox, Row, Col} from 'antd';

export interface ICheckBoxEditorProps {
  onChange?: (value: string) => void;
  min?: number;
  max: number;
  value: string;
  disabled?: boolean;
  style?: CSSProperties;
}

const CheckBoxEditor = ({onChange, min = 0, max, value, disabled, style}: ICheckBoxEditorProps) => {
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

  if (disabled) {
    checked = []
  } else if (!value) {
    checked = [min];
    if (onChange) {
      onChange(checked.join(','));
    }
  } else {
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

  // if (value === 'C') {
  //   checked = [];
  //   // empty
  // } else if (value) {
  //   checked = value
  //     .split(',')
  //     .map((i: any) => parseInt(i, 0))
  //     .filter((v: any) => v >= min && v <= max)
  //     .sort((a: any, b: any) => a - b);
  //
  //   const s = checked.join(',');
  //   if (s !== value && onChange) {
  //     onChange(s);
  //   }
  // }

  return (
    <Checkbox.Group disabled={disabled} onChange={handleChange} value={checked} style={style}>
      <Row>{checkBoxs(min, max)}</Row>
    </Checkbox.Group>
  );
};

export default CheckBoxEditor;
