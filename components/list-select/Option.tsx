import React from "react";
import {List} from 'antd'
import {basePrefixCls} from "../utils/util";

const {Item} = List;

export interface OptionProp<T> {
  name: string;
  code: string;
  extra?: React.ReactNode;
  onClick?: (record: T, event: Event) => void;
  record: T;
}

function Option<T>(
  props: OptionProp<T>
) {

  const prefixCls = `${basePrefixCls}-list-select`;
  const prefixClsItem = prefixCls + '-item';

  const {
    name, code, extra, onClick, record
  } = props;

  const handleClick = (event: any) => {
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
