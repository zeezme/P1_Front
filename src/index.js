import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import 'bootstrap'
import './@core/scss/global.scss'
import { store } from '../src/redux/store'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <Toaster />
    <App />
  </Provider>
)

reportWebVitals()
