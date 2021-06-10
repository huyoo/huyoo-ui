/**
 * @DECS: 列表下拉选择
 * @AUTHOR: hy
 * @DATE:       2021-06-06
 */
import * as React from "react";
import {useMemo} from "react";
import {Input, List} from "antd";
import Container from "./Container";

export interface ListSelectProp<T> {
  dataSource: Array<T>;
  renderItem: (record: T, index: number) => React.ReactNode | React.ReactElement | string | number;
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (value: string | number, record: T) => void;
}

function ListSelect<T extends object = any>(props: ListSelectProp<T>) {
  const {
    dataSource,
    renderItem
  } = props;

  const popupNode = useMemo(() => {
    return dataSource.map(renderItem)
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
