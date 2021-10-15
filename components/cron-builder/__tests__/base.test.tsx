import React from "react";
import CronBuilder from "../index";
import mountTest from "../../../tests/mountTest";
import {mount} from "enzyme";
import {expect} from "@jest/globals";
import {act} from "react-dom/test-utils";

describe('CronBuilder base render test', () => {
  mountTest(CronBuilder);

  it('should disable component', () => {
    const wrapper  = mount(<CronBuilder disabled/>);
    expect(wrapper.find('input').props().disabled).toBe(true);
  });

  it('change second by value', () => {
    const wrapper = mount(<CronBuilder/>);
    const input = wrapper.find('input');

    wrapper.setProps({
      value: '* * * ? * * *'
    })
    expect((input.getDOMNode() as any).value).toBe('* * * ? * * *');

    wrapper.setProps({
      value: '0,1,2 * * ? * * *'
    })
    expect((input.getDOMNode() as any).value).toBe('0,1,2 * * ? * * *');
  });

  it('mock manual change second radio value', () => {
    const onChange = jest.fn();

    const wrapper = mount(<CronBuilder value="0,1,2 * * ? * * *" onChange={onChange}/>);
    const input = wrapper.find('input');

    act(() => {
      input.simulate('click');
    })
    wrapper.update();
    wrapper.render();

    const dom = (wrapper.getDOMNode() as any).querySelector('.ant-tabs-tabpane label input');
    act(() => {
      dom.click();
    })

    expect(onChange).toHaveBeenCalledWith('* * * ? * * *');
  });

  it('mock manual change hour radio value', () => {
    const onChange = jest.fn();

    const wrapper = mount(<CronBuilder value="* 0,1,2 * ? * * *" onChange={onChange}/>);
    const input = wrapper.find('input');

    act(() => {
      input.simulate('click');
    })
    wrapper.update();
    wrapper.render();

    let dom = (wrapper.getDOMNode() as any).querySelectorAll('.ant-tabs-tab-btn')[1];

    act(() => {
      dom.click();
    })
    wrapper.update();
    wrapper.render();

    dom = (wrapper.getDOMNode() as any)
      .querySelectorAll('.ant-tabs-tabpane')[1]
      .querySelectorAll('label')[1]
      .querySelector('input');

    act(() => {
      dom.click();
    })

    expect(onChange).toHaveBeenCalledWith('* 0-59 * ? * * *')
  });
})


