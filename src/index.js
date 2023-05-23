import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import 'bootstrap'
import './@core/scss/global.scss'
import { persistor, store } from '../src/redux/store'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import { PersistGate } from 'redux-persist/integration/react'
import Loading from './@core/components/loading'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <Toaster />
      <App />
    </PersistGate>
  </Provider>
)

reportWebVitals()
