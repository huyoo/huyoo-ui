import React from "react";
import ListSelect from "../index";
import mountTest from "../../../tests/mountTest";

describe('year-picker 渲染测试', () => {

  const data = [
    {id: '京', value: '北京', level: '华北'},
    {id: '冀', value: '河北', level: '华北'},
  ]

  mountTest(() => <ListSelect dataSource={data}/>);

  mountTest(() => <ListSelect dataSource={data} value='冀'/>);
})
