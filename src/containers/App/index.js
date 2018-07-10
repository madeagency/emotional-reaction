// @flow

import React from 'react'
import { injectGlobal } from 'emotion'
import styled from 'react-emotion'
import Switch from 'react-router-dom/Switch'
import Route from 'react-router-dom/Route'
import Helmet from 'react-helmet'

import Home from 'containers/Home'
import Examples from 'containers/Examples'
import NotFound from 'containers/NotFound'
import Hero from 'containers/Hero'

import Menu from 'components/Menu'
import Loading from 'components/Loading'
import RedirectWithStatus from 'components/RouterStatus/RedirectWithStatus'

import config from '../../config'

injectGlobal([
  `
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
  }

  a {
    color: darken(#61dafb, 40);
  }
`
])

const Container = styled('div')`
  max-width: 80%;
  margin: 2.5rem auto;
`

const App = () => (
  <div>
    <Helmet {...config.head} />
    <Hero />

    <Menu />
    <Container>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/examples" component={Examples} exact />
        <RedirectWithStatus status={302} from="/home" to="/" />
        <Route path="/shell" component={Loading} exact />
        <Route component={NotFound} />
      </Switch>
    </Container>
  </div>
)

export default App
