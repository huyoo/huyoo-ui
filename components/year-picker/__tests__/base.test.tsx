import React from "react";
import YearPicker from "../index";
import mountTest from "../../../tests/mountTest";

describe('year-picker 渲染测试', () => {
  mountTest(() => <YearPicker/>);
  mountTest(() => <YearPicker size='small'/>);
  mountTest(() => <YearPicker size='large'/>);

})

