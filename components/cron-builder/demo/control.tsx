import {CronBuilder} from 'huyoo-ui';
import React, {useState} from 'react'

const style = {
  display: 'inline-block',
  margin: 8
}

const App = () => {
  const [value, setValue] = useState('0,5,10 * 0,1 ? * * *');

  const handleChange = (v: string | undefined) => {
    console.log(v);
    setValue(v || '')
  }

  return (
    <>
      <CronBuilder style={style} value={value} onChange={handleChange}/>
    </>
  )
}

export default App;
