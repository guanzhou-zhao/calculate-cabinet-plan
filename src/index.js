import React from 'react'
import { render } from 'react-dom'
import App from './components/App'

const fs = require('fs');

var element = document.createElement('div');
document.body.appendChild(element);

render(<App />, element)

fs.readFile('../README.md', (err, data) => {
  if (err) throw err;
  console.log(data);
});
