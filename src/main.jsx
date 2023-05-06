import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { BrowserRouter } from 'react-router-dom'
import AxiosErrorHandler from './Services/ErrorHandler'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AxiosErrorHandler />
    <App />
  </BrowserRouter>,
)
