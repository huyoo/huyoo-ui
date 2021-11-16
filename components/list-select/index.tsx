import React, {useEffect, useMemo, useRef, useState} from "react";
import {Input, List} from "antd";
import Container from "./Container";
import Option from "./Option";
import {basePrefixCls} from "../utils/util";

export interface ListSelectProp<T> {
  dataSource: Array<T>;
  showItem?: {
    name: string;
    code?: string;
    extra?: string | ((record: T, index: number) => React.ReactNode);
  }
  renderItem?: (record: T, index: number) => React.ReactNode;
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (value: string | number, record: T) => void;
  style?: React.CSSProperties;
  className?: string;
  rowKey?: string,
}

function ListSelect<T = any>(props: ListSelectProp<T>) {
  const {
    dataSource,
    renderItem,
    showItem,
    className,
    style,
    onChange,
    value,
    defaultValue,
    rowKey = 'id',
  } = props;

  const [selected, setSelected] = useState<string | number | undefined>(value || defaultValue);
  const isMount = useRef(false);
  let containerRef = useRef<any>(null);

  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true
      return;
    }

    if (value !== undefined) {
      setSelected(value);
    }
  }, [value])

  const handleSelect = (newValue: any) => {
    if (value !== undefined) {
      onChange && onChange(newValue[rowKey], newValue)
    } else {
      setSelected(newValue[rowKey])
    }

    if (containerRef?.current?.hidden) {
      containerRef.current.hidden()
    }
  }

  const popupNode = useMemo(() => {
    if (renderItem && renderItem instanceof Function) {
      return dataSource.map(renderItem)
    }

    if (showItem) {
      const {name, code, extra} = showItem || {};

      return dataSource.map((record, index) => {
        const optionProp: any = {
          key: index,
          name: (record as any)?.[name],
          code: code ? (record as any)?.[code] : '',
          record,
          onClick: handleSelect
        }

        if (extra instanceof Function) {
          optionProp.extra = extra(record, index);
        } else if (extra) {
          optionProp.extra = (record as any)?.[extra];
        }

        return (
          <Option<T> {...optionProp}/>
        )
      })
    }

    return dataSource.map(() => null)
  }, [dataSource]);

  return (
    <Container prefixCls={`${basePrefixCls}-list-select`} popupNode={<List>{popupNode}</List>} ref={containerRef}>
      <div className={className} style={style}>
        <Input value={selected}/>
      </div>
    </Container>
  )
}


export const Item = List.Item;
export default ListSelect;
