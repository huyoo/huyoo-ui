import {ListSelect} from 'huyoo-ui';
import React from 'react'

const list = [
  {id: '京', value: '北京', level: '华北'},
  {id: '冀', value: '河北', level: '华北'},
  {id: '粤', value: '广东', level: '华南'},
  {id: '川', value: '四川', level: '西南'}
];

const itemConfig = {
  name: 'value',
  code: 'id',
  extra: 'level'
}

const App = () => {
  return (
    <ListSelect
      style={{width: 150}}
      dataSource={list}
      showItem={itemConfig}
    />
  )
}

export default App;