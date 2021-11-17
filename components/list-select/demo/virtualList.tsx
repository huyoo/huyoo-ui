import React from "react";
import {ListSelect} from "huyoo-ui";

const options: any[] = [];
let selected: string | undefined = undefined;

for (let i = 0; i < 100000; i++) {
  const value = `${i.toString(36)}${i}`;
  if (i === 11) {
    selected = value
  }
  options.push({
    value,
    name: value,
    code: Math.floor(i / 10) + 1 + '阶梯',
    disabled: i === 10,
  });
}

const App = () => {
  return (
    <ListSelect
      style={{width: 150}}
      options={options}
      value={selected}
    />
  )
}

export default App;
