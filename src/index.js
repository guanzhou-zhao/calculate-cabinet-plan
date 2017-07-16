import React from 'react'
import { render } from 'react-dom'
import App from './components/App'

var element = document.createElement('div');
document.body.appendChild(element);

render(<App />, element)
