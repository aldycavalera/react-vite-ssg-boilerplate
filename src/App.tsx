import './shared/styles/index.scss'

import { FC } from 'react'
import { Route, Switch } from 'react-router-dom'
import { getRoutes } from 'vite-plugin-ssr-ssg'

const pages = import.meta.globEager('./pages/**/*.tsx')
const routes = getRoutes<'react'>(pages)

const App: FC = () => {
  return (
    <Switch>
      {routes.map(({ path, name, Component }) => {
        return (
          <Route exact path={path} key={name}>
            <Component />
          </Route>
        )
      })}
    </Switch>
  )
}

export default App
