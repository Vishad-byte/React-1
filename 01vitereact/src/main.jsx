import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const anotherElement = (
  <a href="https://google.com" target='_blank'>Vist google</a>
)

const ReactElement = React.createElement(                         //a specific syntax in which react reads the element so write in specific syntax
  'a',
  { href: 'https://google.com', target:  '_blank'},
  'Click here to enter google browser'
)

ReactDOM.createRoot(document.getElementById('root')).
render(
  <App />
)
