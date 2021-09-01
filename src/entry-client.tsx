import './shared/styles/index.scss'

import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { HeadProvider } from 'react-head'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles as BaseStyles } from 'twin.macro'

import App from './App'

ReactDOM.render(
  <StrictMode>
    <BaseStyles />
    <HeadProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HeadProvider>
  </StrictMode>,
  document.getElementById('root')
)
