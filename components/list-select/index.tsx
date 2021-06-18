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
  renderItem?: (record: T, index: number) => React.ReactNode;
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (value: string | number, record: T) => void;
  style?: React.CSSProperties;
  className?: string;
}

function ListSelect<T>(props: ListSelectProp<T>) {
  const {
    dataSource,
    renderItem,
    showItem,
    className,
    style,
  } = props;

  const popupNode = useMemo(() => {

    if (renderItem && renderItem instanceof Function) {
      return dataSource.map(renderItem)
    }

    if (showItem) {
      const {name, code, extra} = showItem || {};

      return dataSource.map((record, index) => {
        const optionProp:any = {
          key: index,
          name: (record as any)?.[name],
          code: code ? (record as any)?.[code] : '',
          record,
        }

        if (extra instanceof Function) {
          optionProp.extra = extra(record, index);
        } else if(extra){
          optionProp.extra = (record as any)?.[extra];
        }

        return (
          <Option<T> {...optionProp}/>
        )
      })
    }

    return dataSource.map(() => null)
  }, [dataSource]);

  console.log(style)

  return (
    <Container prefixCls='antd-ext-list-select' popupNode={<List>{popupNode}</List>}>
      <div className={className} style={style}>
        <Input/>
      </div>
    </Container>
  )
}


export const Item = List.Item;
export default ListSelect;
