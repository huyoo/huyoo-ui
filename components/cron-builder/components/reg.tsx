import React, { ReactNode } from 'react';

const EVERY = /^\*$/;
const ANY = /^\?$/;
const BETWEEN = /^\d+-\d+$/;
const FROM_EVERY = /^\d+\/\d+$/;
const CHECK_BOX = /^(C|((\d+,)*\d+))$/;
const LAST_WORK_DAY = /^\d+W$/;
const LAST_MONTH_DAY = /^L$/;
const LAST_WEEK_DAY = /^\d+L$/;
const WEEK_DAY = /^\d+#\d+$/;

const index: {
  [key: string]: string;
} = {
  EVERY: 'EVERY',
  ANY: 'ANY',
  BETWEEN: 'BETWEEN',
  FROM_EVERY: 'FROM_EVERY',
  CHECK_BOX: 'CHECK_BOX',
  LAST_WORK_DAY: 'LAST_WORK_DAY',
  LAST_MONTH_DAY: 'LAST_MONTH_DAY',
  LAST_WEEK_DAY: 'LAST_WEEK_DAY',
  WEEK_DAY: 'WEEK_DAY',
};

const REG: {
  [key: string]: RegExp;
} = {
  [index.EVERY]: EVERY,
  [index.ANY]: ANY,
  [index.BETWEEN]: BETWEEN,
  [index.FROM_EVERY]: FROM_EVERY,
  [index.CHECK_BOX]: CHECK_BOX,
  [index.LAST_WORK_DAY]: LAST_WORK_DAY,
  [index.LAST_MONTH_DAY]: LAST_MONTH_DAY,
  [index.LAST_WEEK_DAY]: LAST_WEEK_DAY,
  [index.WEEK_DAY]: WEEK_DAY,
};

export interface IRegProps {
  value?: string;
  currentIndex: string;
  onChange: (currentIndex: string, value?: string) => void;
}

export const getCurrentRegIndex = (
  cronText?: string,
  currentIndex?: string,
): string | undefined => {
  if (currentIndex && cronText && REG[currentIndex].test(cronText)) {
    return currentIndex;
  }
  if (cronText) {
    for (const key of Object.keys(REG)) {
      const reg = REG[key];
      if (reg.test(cronText)) {
        return key;
      }
    }
  }
  return undefined;
};

class Reg extends React.Component<IRegProps, any> {
  value: undefined | string;

  constructor(props: IRegProps) {
    super(props);
    const { value } = props;
    this.value = value;
    // this.updateCron(value, currentIndex, onChange);
  }

  componentWillReceiveProps(nextProps: IRegProps) {
    const { value, currentIndex, onChange } = nextProps;
    if (this.value !== value) {
      this.value = value;
      this.updateCron(value, currentIndex, onChange);
    }
  }

  updateCron = (
    cronText: string | undefined,
    currentIndex: string,
    onChange: (key: string, value?: string) => void,
  ) => {
    if (cronText === undefined) {
      if (onChange) {
        onChange(currentIndex, cronText);
      }
      return;
    }
    if (currentIndex && REG[currentIndex].test(cronText)) {
      if (onChange) onChange(currentIndex, cronText);
      return;
    }
    for (const key of Object.keys(REG)) {
      const reg = REG[key];
      if (reg.test(cronText)) {
        if (onChange) onChange(key, cronText);
        return;
      }
    }
    if (onChange) onChange(index.EVERY, '*');
  };

  render(): ReactNode {
    return <div />;
  }
}

export default Reg;

export { index };
