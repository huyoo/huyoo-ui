/**
 * @DECS: 列表下拉选择
 * @AUTHOR: hy
 * @DATE:       2021-06-06
 * http://developer.rcsit.cn:1024/components/combo-list-cn/
 */
import * as React from "react";
import {useMemo} from "react";
import {Input, List} from "antd";
import Container from "./Container";
import Option from "./Option";

export interface ListSelectProp<T> {
  dataSource: Array<T>;
  showItem?: {
    name: string;
    code?: string;
    extra?: string | ((record: T, index: number) => React.ReactNode);
  }
  renderItem?: (record: T, index: number) => React.ReactNode | React.ReactElement | string | number;
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (value: string | number, record: T) => void;
}

function ListSelect<T>(props: ListSelectProp<T>) {
  const {
    dataSource,
    renderItem,
    showItem
  } = props;

  const popupNode = useMemo(() => {

    if (renderItem && renderItem instanceof Function) {
      return dataSource.map(renderItem)
    }

    if (showItem) {
      const {name, code, extra} = showItem || {};

      return dataSource.map((record, index) => {
        const optionProp = {
          key: index,
          name: record?.[name],
          code: record?.[code],
          extra: undefined,
          record,
        }

        if (extra instanceof Function) {
          optionProp.extra = extra(record, index)
        } else {
          optionProp.extra = record?.[extra];
        }

        return (
          <Option<T> {...optionProp}/>
        )
      })
    }

    return dataSource.map(() => null)
  }, [dataSource]);


  return (
    <Container prefixCls='antd-ext-list-select' popupNode={<List>{popupNode}</List>}>
      <div>
        <Input/>
      </div>
    </Container>
  )
}


export const Item = List.Item;
export default ListSelect;
