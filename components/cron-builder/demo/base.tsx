import {CronBuilder} from 'huyoo-ui';
import React from 'react'

const style = {
  display: 'inline-block',
  margin: 8
}

const App = () => {
  const handleChange = (value: string) => {
    console.log(value)
  }

  return (
    <>
      <CronBuilder style={style} onChange={handleChange}/>
      <CronBuilder style={style} onChange={handleChange} disabled/>
      <CronBuilder style={style} onChange={handleChange} defaultValue='0,10,20 * * ? * * *'/>
    </>
  )
}

export default App;
