import { renderToString } from 'react-dom/server'
import { HeadProvider } from 'react-head'
import { StaticRouter } from 'react-router-dom'
import { GlobalStyles as BaseStyles } from 'twin.macro'

import App from './App'

import type { ServerRenderer } from 'vite-plugin-ssr-ssg'

const render: ServerRenderer = async (url) => {
  const headTags = [] as any
  const context = {}

  const body = renderToString(
    <HeadProvider headTags={headTags}>
      <BaseStyles />
      <StaticRouter location={url} context={context}>
        <App />
      </StaticRouter>
    </HeadProvider>
  )

  return { bodyTags: body, headTags: renderToString(headTags) }
}

export default render
