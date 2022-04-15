import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'
import { BrowserRouter as RouterProvider } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { ConfigProvider as AntProvider } from 'antd'
import store from './redux/store'
import fa_IR from 'antd/lib/locale/fa_IR'
import 'antd/dist/antd.css'
import './assets/css/general.css'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <RouterProvider>
      <AntProvider direction='rtl' locale={fa_IR}>
        <ReduxProvider store={store}>
          <App />
        </ReduxProvider>
      </AntProvider>
    </RouterProvider>
  </React.StrictMode>
)
