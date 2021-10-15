import React, { CSSProperties } from 'react';
import {Input} from 'antd';
import {isUndefined} from 'lodash';

const isNotNone = (v: any) => v !== null && v !== undefined;

export interface IInputNumberProps {
  value: number;
  defaultValue?: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  style?: CSSProperties;
  placeholder?: string;
  disabled?: boolean;
}

class InputNumber extends React.Component<IInputNumberProps, any> {
  constructor(props: IInputNumberProps) {
    super(props);
    const { value, defaultValue } = props;
    this.state = {
      value: isUndefined(value) ? defaultValue : value,
    };
  }

  componentWillReceiveProps(nextProps: any) {
    const { value, min, max } = nextProps;
    const v = this.getValue(value, min, max);
    this.setState({ value: v });
    if (isNotNone(v) && isNotNone(value) && v.toString() !== value.toString()) this.notify();
  }

  getValue = (value: string, min: number, max: number): number => {
    if (/^\d+$/.test(value)) {
      let v = parseInt(value, 0);
      if (v < min) v = min;
      if (v > max) v = max;
      return v;
    }
    return min;
  };

  handleChange = ({ target: { value } }: any) => {
    this.setState({ value });
  };

  handleBlur = () => {
    this.notify();
  };

  handleEnter = () => {
    this.notify();
  };

  notify = () => {
    const { onChange, min, max } = this.props;
    const { value } = this.state;
    if (onChange) {
      onChange(this.getValue(value, min, max));
    }
  };

  render() {
    const { placeholder, style, disabled } = this.props;
    const { value } = this.state;
    return (
      <Input
        disabled={disabled}
        style={{ width: '75px', ...style }}
        placeholder={placeholder}
        onChange={this.handleChange}
        onPressEnter={this.handleEnter}
        onBlur={this.handleBlur}
        value={value}
      />
    );
  }
}

export default InputNumber;
