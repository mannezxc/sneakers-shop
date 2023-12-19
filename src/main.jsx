import Router from './router/Router.jsx'
import ReactDOM from 'react-dom/client'
import React from 'react'
import './styles/reset.scss'
import './styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router/>
  </React.StrictMode>,
)
