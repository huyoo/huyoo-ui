/**
 * @DECS:
 * @AUTH: hy
 * @DATE: 2021-03-18
 */
import {Select, SelectProps} from "antd";
import React from "react";

export const TIME_UNITS: { [name: string]: string } = {
  // esriTimeUnitsUnknown: '',
  esriTimeUnitsMilliseconds: '毫秒',
  esriTimeUnitsSeconds: '秒',
  esriTimeUnitsMinutes: '分钟',
  esriTimeUnitsHours: '小时',
  esriTimeUnitsDays: '天',
  esriTimeUnitsWeeks: '周',
  esriTimeUnitsMonths: '月',
  esriTimeUnitsYears: '年',
  esriTimeUnitsDecades: '纪',
  esriTimeUnitsCenturies: '世纪',
};


export interface TimeUnitSelectProp extends SelectProps<string> {
  type: 'default' | 'hour',
  a?: string
}

const TimeUnitSelect: React.FC<TimeUnitSelectProp> = (
  {
    type, a = 'default', ...prop
  }
) => {
  let units;

  switch (type) {
    case 'hour':
      units = ['esriTimeUnitsSeconds', 'esriTimeUnitsMinutes', 'esriTimeUnitsHours']
      break;
    default:
      units = Object.keys(TIME_UNITS);
  }

  return (
    <Select style={{width: 70}} {...prop}>
      {
        units.map((unit: string) => {
          return <Select.Option value={unit} key={unit}>{TIME_UNITS[unit]}</Select.Option>
        })
      }
    </Select>
  )
}

export default TimeUnitSelect;

