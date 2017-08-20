import React from 'react'
import { render } from 'react-dom'
import App from './components/App'

import fs from 'fs'
import path from 'path'

var element = document.createElement('div');
document.body.appendChild(element);

render(<App />, element)


var filePath = path.resolve(__dirname, '..', 'README.md');
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
