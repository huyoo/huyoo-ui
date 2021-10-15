import React, {useMemo} from "react"
import locale from './locale';
import {Tabs} from "antd";
import SecondEditor from "./components/SecondEditor";
import MinuteEditor from "./components/MinuteEditor";
import HourEditor from "./components/HourEditor";
import MonthEditor from "./components/MonthEditor";
import WeekEditor from "./components/WeekEditor";
import YearEditor from "./components/YearEditor";
import DayEditor from "./components/DayEditor";

const {TabPane} = Tabs;
const radioStyle = {
  display: 'block',
  lineHeight: '30px',
  padding: '5px',
};


export interface CronBuilder {
  /**
   * @description 选择器类名
   */
  className?: string;

  /**
   * @description 样式
   */
  style?: React.CSSProperties;

  /**
   * @description 选择器值，需要满足规范。
   */
  value: string;

  /**
   * @description 值发生变化时的回调
   */
  onChange: (value: string) => void;
}

const Builder: React.FC<CronBuilder> = (props) => {
  const {style, className = '', value, onChange} = props;

  const cron = useMemo(() => {
    return value.split(' ')
  }, [value])

  const cronChange = (value: string, index: number) => {
    if (!cron.length) {
      cron.push(...['*', '*', '*', '?', '*', '*', '*']);
    }
    cron[index] = value;
    if (index === 3) {
      if (value === '?') {
        if (cron[5] === '?') cron[5] = '*';
      } else {
        cron[5] = '?';
      }
    } else if (index === 5) {
      if (value === '?') {
        if (cron[3] === '?') cron[3] = '*';
      } else {
        cron[3] = '?';
      }
    }
    // this.setState({ cron });
    const cronText = cron.join(' ').trim();
    if (onChange) {
      onChange(cronText);
    }
  };

  const secondChange = (value: string) => {
    cronChange(value, 0);
  };

  const minuteChange = (value: string) => {
    cronChange(value, 1);
  };

  const hourChange = (value: string) => {
    cronChange(value, 2);
  };

  const dayChange = (value: string) => {
    cronChange(value, 3);
  };

  const monthChange = (value: string) => {
    cronChange(value, 4);
  };

  const weekChange = (value: string) => {
    cronChange(value, 5);
  };

  const yearChange = (value: string) => {
    cronChange(value, 6);
  };

  return (
    <Tabs className={className} defaultActiveKey="second" style={style}>
      <TabPane tab={locale.second} key="second">
        <SecondEditor
          locale={locale}
          onChange={secondChange}
          value={cron[0]}
          radioStyle={radioStyle}
        />
      </TabPane>
      <TabPane tab={locale.minute} key="minute">
        <MinuteEditor
          locale={locale}
          onChange={minuteChange}
          value={cron[1]}
          radioStyle={radioStyle}
        />
      </TabPane>
      <TabPane tab={locale.hour} key="hour">
        <HourEditor
          locale={locale}
          onChange={hourChange}
          value={cron[2]}
          radioStyle={radioStyle}
        />
      </TabPane>
      <TabPane tab={locale.day} key="day">
        <DayEditor
          locale={locale}
          onChange={dayChange}
          value={cron[3]}
          radioStyle={radioStyle}
        />
      </TabPane>
      <TabPane tab={locale.month} key="month">
        <MonthEditor
          locale={locale}
          onChange={monthChange}
          value={cron[4]}
          radioStyle={radioStyle}
        />
      </TabPane>
      <TabPane tab={locale.week} key="week">
        <WeekEditor
          locale={locale}
          onChange={weekChange}
          value={cron[5]}
          radioStyle={radioStyle}
        />
      </TabPane>
      <TabPane tab={locale.year} key="year">
        <YearEditor
          locale={locale}
          onChange={yearChange}
          value={cron[6]}
          radioStyle={radioStyle}
        />
      </TabPane>
    </Tabs>
  )
}

export default Builder;
