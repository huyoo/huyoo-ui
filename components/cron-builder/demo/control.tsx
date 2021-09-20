import {CronBuilder} from 'huyoo-ui';
import React, {useState} from 'react'

const App = () => {
  const [value, setValue] = useState('');

  const handleChange = (v: string | undefined) => {
    console.log(v);
    setValue(v || '')
  }

  return (
    <CronBuilder value={value} onChange={handleChange}/>
  )
}

export default App;
