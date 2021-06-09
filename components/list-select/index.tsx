/**
 * @DECS: 列表下拉选择
 * @AUTHOR: hy
 * @DATE:       2021-06-06
 */
import *  as React from "react";
import {Input} from "antd";
import Container from "./Container";


export interface ListSelectProp {

}

const ListSelect: React.FC<ListSelectProp> = (props) => {
  const {} = props;


  return (
    <Container prefixCls='antd-ext-list-select'>
      <div>
        <Input/>
      </div>
    </Container>
  )
}

export default ListSelect;
