import React from 'react';
import {YearPicker} from 'huyoo-ui';
import {Space} from 'antd';

export default () => {
  return (
    <Space direction="vertical">
      <YearPicker placeholder="default size" />
      <YearPicker size='small' placeholder="small size"/>
      <YearPicker size='large' placeholder="large size"/>
      <YearPicker disabled/>
    </Space>
  );
};
