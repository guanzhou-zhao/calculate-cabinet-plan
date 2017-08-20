import React from 'react'
import { render } from 'react-dom'
// import App from './components/App'
import App from './meta/App'


// Try fs in electron
// import fs from 'fs'
// import path from 'path'
// var filePath = path.resolve(__dirname, '..', 'README.md');
// fs.readFile(filePath, 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

var element = document.createElement('div');
document.body.appendChild(element);

render(<App />, element)
