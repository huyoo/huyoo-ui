/**
 * @DECS:
 * @AUTH: hy
 * @DATE: 2021-04-06
 */
import React from "react";
import Group from '../Group'

const list = [
  {
    id: '1',
    title: 'test',
    owner: '121'
  }
];

describe("CustomizeDropdown.type", () => {
  it('should return group dom', function () {
    const dom = <Group onRemove={(id:string)=>{console.log(id)}} selectedGroups={list}/>
    expect(dom).toMatchSnapshot();
  });
})
