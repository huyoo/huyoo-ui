/**
 * @DECS:
 * @AUTH: hy
 * @DATE: 2021-06-11
 */
import * as React from "react";
import {List} from 'antd'

const {Item} = List;

export interface OptionProp<T> {
  name: string;
  code: string;
  extra?: string | number | React.ReactNode;
  onClick?: (record: any, event: Event) => void;
  record: T;
}

function Option<T>(
  props: OptionProp<T>
) {

  const prefixCls = 'antd-ext-list-select';
  const prefixClsItem = prefixCls + '-item';

  const {
    name, code, extra, onClick, record
  } = props;

  const handleClick = (event) => {
    onClick && onClick(record, event)
  }


  return (
    <Item prefixCls={prefixCls} onClick={handleClick}>
      <div className={prefixClsItem + '-label'}>
        <div>{name}</div>
        <span className={prefixClsItem + '-code'}>{code}</span>
      </div>
      {
        extra ? <div className={prefixClsItem + '-extra'}>{extra}</div> : null
      }
    </Item>
  )
}

export default Option;
