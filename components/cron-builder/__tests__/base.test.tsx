import React from "react";
import CronBuilder from "../index";
import mountTest from "../../../tests/mountTest";

describe('CronBuilder render test', () => {
  mountTest(CronBuilder);


  // it('controlled error value render test', () => {
  //   const wrap = mount(<CronBuilder/>);
  //   console.log(wrap);
  //
  //
  //   // expect(() => {
  //   //   wrap.setProps({
  //   //     value: '*'
  //   //   })
  //   // })
  //   //   .toThrow(`[CronBuilder]: value except be seven chars like '* * * ? * * *', not *.`)
  // })
})
