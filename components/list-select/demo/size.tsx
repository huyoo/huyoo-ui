import {ListSelect} from 'huyoo-ui';
import React from 'react'

const list = [
  {code: '京', name: '北京', extra: '华北'},
  {code: '冀', name: '河北', extra: '华北'},
  {code: '粤', name: '广东', extra: '华南'},
  {code: '川', name: '四川', extra: '西南'}
];

export default () => {
  const props = {
    style: {
      width: 150,
      margin: 8
    },
    options: list
  }

  return (
    <>
      <ListSelect {...props} size='small' placeholder='small'/>
      <ListSelect {...props} placeholder='default'/>
      <ListSelect {...props} size='large' placeholder='large'/>
    </>

  )
}
