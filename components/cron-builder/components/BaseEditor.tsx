import React, {CSSProperties} from 'react';
import {LocaleItem} from '../../locale';

export interface ValueInterface {
  [key: string]: string;
}

export interface IBaseEditorProps {
  onChange: (value: string) => void;
  value?: string;
  radioStyle?: CSSProperties;
  locale: LocaleItem;
}

declare interface IBaseEditorState {
  value: ValueInterface;
  radio?: string;
}

class BaseEditor<P> extends React.Component<IBaseEditorProps & P, IBaseEditorState> {
  constructor(props: IBaseEditorProps & P) {
    super(props);
    this.state = {
      value: {},
    };
  }

  notifyChange = (_: any, value: string) => {
    const {onChange} = this.props;
    if (onChange) {
      onChange(value);
    }
  };

  handleRadioChange = ({target: {value: radio}}: any, defaultValue: any) => {
    // const {value} = this.state;

    const value = {
      [radio]: defaultValue[radio]
    }
    this.setState({value});
    this.notifyChange(radio, value[radio]);
  };

  handleValueChange = (radio: string, v: string) => {
    let {value} = this.state;
    if (v === '*') {
      // value[radio];
      value['EVERY'] = v;
    } else {
      value[radio] = v;
    }
    // this.setState({ radio, value });
    this.setState({value});
    this.notifyChange(radio, v);
  };
}

export default BaseEditor;
