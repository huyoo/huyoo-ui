
import React, {useState} from "react";
import {Spin} from "huyoo-ui";
import {Button, Card, Space} from "antd";

export default () => {
  const [spinning, setSpinning] = useState(true);

  return (
    <Space size={20}>
      <Button onClick={() => setSpinning(!spinning)}>Switch</Button>
      <Spin.CubeGrid spinning={spinning} size='small'>
        <Card>size: small</Card>
      </Spin.CubeGrid>
      <Spin.CubeGrid spinning={spinning}>
        <Card>size: default</Card>
      </Spin.CubeGrid>
      <Spin.CubeGrid spinning={spinning} size='large'>
        <Card>size: large</Card>
      </Spin.CubeGrid>
    </Space>
  )
}
