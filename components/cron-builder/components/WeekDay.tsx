import React, { CSSProperties } from 'react';
import InputNumber from './InputNumber';
import { LocaleItem } from '../../locale';

const inputNumberStyle: CSSProperties = {
  margin: '0 5px',
};

const WeekDay = ({
  value,
  onChange,
  disabled,
  locale,
}: {
  value: string;
  onChange: (v: string) => void;
  disabled?: boolean;
  locale: LocaleItem;
}) => {
  const splits = value.split('#');
  const week = splits[0];
  const weekDay = splits[1];

  const notifyChange = (weekStr: string, weekDayStr: string) => {
    const s = `${weekStr}#${weekDayStr}`;
    if (onChange) onChange(s);
  };

  const handleWeekChange = (v: number) => {
    notifyChange(`${v}`, weekDay);
  };

  const handleWeekDayChange = (v: number) => {
    notifyChange(week, `${v}`);
  };

  return (
    <span>
      {locale.index}
      <InputNumber
        disabled={disabled}
        min={1}
        max={4}
        style={inputNumberStyle}
        value={parseInt(week, 10)}
        onChange={handleWeekChange}
      />
      {locale.days}
      <InputNumber
        disabled={disabled}
        min={1}
        max={7}
        style={inputNumberStyle}
        value={parseInt(weekDay, 10)}
        onChange={handleWeekDayChange}
      />
    </span>
  );
};

export default WeekDay;
