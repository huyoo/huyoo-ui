import React from "react";
import type {ListRef} from "rc-virtual-list"
import List from "rc-virtual-list"
import Option, {OptionProp} from "./Option.new";
import classNames from "classnames";
import {OptionData, SelectedValueType} from "./interface";

export interface OptionListProp<T> {
  data: Array<T>;
  prefixCls: string;
  height: number,
  itemKey: string;
  itemHeight: number;
  onSelect: (record: T, index: number) => void;
  open: boolean;
  values: Set<SelectedValueType>;
  virtual: boolean;
}

function OptionList<T extends OptionData>(
  props: OptionListProp<T>
) {
  const {
    prefixCls,
    data,
    onSelect,
    height,
    itemKey,
    itemHeight,
    values,
    open,
    virtual,
  } = props;

  const listRef = React.useRef<ListRef>(null);

  const scrollIntoView = (index: number) => {
    if (listRef.current) {
      listRef.current.scrollTo({index});
    }
  };

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (open && values.size === 1) {
        const value: SelectedValueType = Array.from(values)[0];
        const index = data.findIndex(
          (option) => option?.[itemKey] === value,
        );

        scrollIntoView(index)
      }
    })

    // 强制面板弹出时显示滚动条，优化用户体验
    if (open) {
      listRef.current?.scrollTo(undefined as any);
    }

    return () => clearTimeout(timeout);
  }, [open]);


  return (
    <List<T>
      data={data}
      itemKey={itemKey}
      height={height}
      itemHeight={itemHeight}
      fullHeight={false}
      virtual={virtual}
      ref={listRef}
    >
      {(item, index) => {
        const {
          disabled,
          className,
          style,
          code,
          name,
          extra
        } = item;
        const value = item?.[itemKey];

        const optionPrefixCls = `${prefixCls}-option`;
        const optionCls = classNames(optionPrefixCls, className, {
          [`${optionPrefixCls}-disabled`]: item?.disabled,
          [`${optionPrefixCls}-selected`]: values.has(value),
        })

        const prop: OptionProp = {
          prefixCls: optionPrefixCls,
          className: optionCls,
          code,
          extra,
          name,
          style,
          onClick: () => {
            if (!disabled) {
              onSelect(item, index)
            }
          },
        };

        return (
          <Option {...prop}/>
        )
      }}
    </List>
  )
}

export default OptionList;
