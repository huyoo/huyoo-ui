import React, { CSSProperties, ReactNode } from 'react';
import InputNumber from './InputNumber';

const inputNumberStyle: CSSProperties = {
  margin: '0 5px',
};

export interface IFromEveryProps {
  value?: string;
  onChange?: (v: string) => void;
  front: ReactNode;
  middle: ReactNode;
  back: ReactNode;
  fromMin?: number;
  fromMax?: number;
  everyMin?: number;
  everyMax?: number;
  disabled?: boolean;
}

const FromEvery = ({
  value,
  onChange,
  front,
  middle,
  back,
  fromMin = 0,
  fromMax = 59,
  everyMin = 1,
  everyMax = 59,
  disabled,
}: IFromEveryProps) => {
  const splits = (value || '').split('/');
  const from = parseInt(splits[0], 10);
  const every = parseInt(splits[1], 10);

  const notifyChange = (fromStr: string, everyStr: string) => {
    const s = `${fromStr}/${everyStr}`;
    if (onChange) onChange(s);
  };

  const handleFromChange = (v: number) => {
    notifyChange(`${v}`, `${every}`);
  };

  const handleEveryChange = (v: number) => {
    notifyChange(`${from}`, `${v}`);
  };

  return (
    <span>
      {front}
      <InputNumber
        disabled={disabled}
        min={fromMin}
        max={fromMax}
        value={from}
        style={{ ...inputNumberStyle }}
        onChange={handleFromChange}
      />
      {middle}
      <InputNumber
        disabled={disabled}
        min={everyMin}
        max={everyMax}
        value={every}
        style={{ ...inputNumberStyle }}
        onChange={handleEveryChange}
      />
      {back}
    </span>
  );
};

export default FromEvery;
