import React from 'react';
import InputNumber from './InputNumber';

const LastWeekDay = ({
  value,
  onChange,
  disabled,
}: {
  value: string;
  onChange: (v: string) => void;
  disabled?: boolean;
}) => {
  const splits = value.split('L');

  const notifyChange = (v: number) => {
    const s = `${v}L`;
    if (onChange) onChange(s);
  };

  return (
    <InputNumber
      disabled={disabled}
      min={1}
      max={7}
      value={parseInt(splits[0], 10)}
      onChange={notifyChange}
    />
  );
};

export default LastWeekDay;
