import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root.jsx'
import './index.css'
import AuthenticationContextProvider from './Contexts/AuthenticationContext.jsx'
import { RouterProvider } from 'react-router-dom'
import routes from './Routes/Routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthenticationContextProvider>
      <RouterProvider router={routes}></RouterProvider>
    </AuthenticationContextProvider>
  </React.StrictMode>,
)
