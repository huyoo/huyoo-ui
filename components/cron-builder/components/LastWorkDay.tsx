import React from 'react';
import InputNumber from './InputNumber';

const LastWorkDay = ({
  onChange,
  value,
  disabled,
}: {
  value: string;
  onChange: (v: string) => void;
  disabled?: boolean;
}) => {
  const handleChange = (v: any) => {
    const s = `${v}W`;
    if (onChange) onChange(s);
  };

  const splits = value.split('W');

  return (
    <InputNumber
      disabled={disabled}
      min={1}
      max={31}
      value={parseInt(splits[0], 10)}
      onChange={handleChange}
    />
  );
};

export default LastWorkDay;
