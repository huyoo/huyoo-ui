import {ListSelect} from 'huyoo-ui';
import React, {useState} from 'react'

const list = [
  {code: '京', name: '北京', extra: '华北'},
  {code: '冀', name: '河北', extra: '华北'},
  {code: '粤', name: '广东', extra: '华南'},
  {code: '川', name: '四川', extra: '西南'}
];

const App = () => {
  const [value, setValue] = useState('广东');

  const onChange = (value: string | number, record: any) => {
    console.log(value, record)
    setValue(value as string);
  }

  return (
    <ListSelect
      style={{width: 150}}
      options={list}
      value={value}
      onChange={onChange}
    />
  )
}

export default App;
