import React, { CSSProperties } from 'react';
import Input from 'antd/es/input';
import InputNumber from './InputNumber';
import { LocaleItem } from '../../locale';

const style: CSSProperties = {
  width: 70,
  textAlign: 'center',
  paddingRight: '0px',
  paddingLeft: '0px',
};
const InputGroup = Input.Group;

export interface IBetweenProps {
  value: string;
  min?: number;
  max: number;
  onChange: (value: string) => void;
  disabled?: boolean;
  locale: LocaleItem;
}

const Between = ({ value, onChange, min = 0, max, disabled, locale }: IBetweenProps) => {
  const splits = value.split('-');
  const minValue = parseInt(splits[0], 0);
  const maxValue = parseInt(splits[1], 0);

  const notifyChange = (minV: number, maxV: number) => {
    const s = `${minV}-${maxV}`;
    if (onChange) {
      onChange(s);
    }
  };

  const handleMinChange = (v: number) => {
    notifyChange(v, maxValue);
  };

  const handleMaxChange = (v: number) => {
    notifyChange(minValue, v);
  };

  return (
    <InputGroup
      compact
      style={{
        display: 'inline-block',
        verticalAlign: 'middle',
        marginLeft: '5px',
      }}
    >
      <InputNumber
        disabled={disabled}
        style={style}
        placeholder={locale.minimum}
        min={min}
        max={maxValue}
        value={minValue}
        onChange={handleMinChange}
        defaultValue={min}
      />
      <Input
        style={{
          width: 30,
          borderLeft: 0,
          pointerEvents: 'none',
          backgroundColor: disabled ? '#e9e9e9' : '#fff',
        }}
        placeholder="~"
        disabled
      />
      <InputNumber
        disabled={disabled}
        style={{ ...style, borderLeft: 0 }}
        placeholder={locale.maximum}
        min={minValue}
        max={max}
        value={maxValue}
        onChange={handleMaxChange}
        defaultValue={max}
      />
    </InputGroup>
  );
};

export default Between;
