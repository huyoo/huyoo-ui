/**
 * @DECS:
 * @AUTH: hy
 * @DATE: 2021-03-29
 */
import React from "react";
import TimeUnitSelect from "../index";

describe("TimeUnitSelect.type", () => {
  it('should return hour component', function () {
    expect(2 + 2).toBe(4)
  });
})

describe("TimeUnitSelect.dom", () => {
  it('should be a component', function () {
    const dom = (
      <TimeUnitSelect type="default"/>
    );

    expect(dom).toMatchSnapshot()
  });

})
