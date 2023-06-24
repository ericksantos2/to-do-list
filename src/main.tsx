import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'reset.css'
import GlobalStyle from './styles/globalStyle.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)
