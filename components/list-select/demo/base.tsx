import React from 'react'
import {ListSelect} from 'huyoo-ui';
import {SelectedValueType} from 'huyoo-ui/lib/list-select/interface';

const list = [
  {code: '京', name: '北京', extra: '华北'},
  {code: '冀', name: '河北', extra: '华北'},
  {code: '粤', name: '广东', extra: '华南'},
  {code: '川', name: '四川', extra: '西南'}
];

const App = () => {
  const handleSelect = (value?: SelectedValueType, record?: any) => {
    console.log(value, record)
  }

  const props = {
    style: {width: 150, margin: 8},
    options: list,
    onChange: handleSelect
  }

  return (
    <>
      <ListSelect {...props}/>
      <ListSelect {...props} disabled/>
      <ListSelect {...props} loading/>
      <ListSelect {...props} defaultValue='北京' allowClear/>
    </>

  )
}

export default App;
