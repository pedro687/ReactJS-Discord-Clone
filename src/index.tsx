import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalStyleComponent from './globalStyles'

ReactDOM.render(
  <React.StrictMode>
    <App />

    <GlobalStyleComponent />
  </React.StrictMode>,
  document.getElementById('root')
)