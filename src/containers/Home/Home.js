// @flow

import React from 'react'
import Helmet from 'react-helmet'
import Link from 'react-router-dom/Link'
import Anchor from 'components/Link'

const StyledLink = Anchor.withComponent(Link)

const Home = () => (
  <div>
    <Helmet
      title="Home"
      meta={[{ name: 'description', content: 'Welcome to Reactivity' }]}
    />
    <h1>What is it really?</h1>
    <p>
      A <b>universally rendered PWA</b> with <b>code-splitting</b> that uses:
    </p>
    <ul>
      <li>React</li>
      <li>React Router 4</li>
      <li>Redux</li>
      <li>Webpack</li>
      <li>Express</li>
      <li>Eslint</li>
      <li>Redux Form</li>
      <li>Styled Components</li>
      <li>RXJS</li>
      <li>Service Worker</li>
    </ul>

    <p>
      Take a look at our <StyledLink to="/examples">Examples Page</StyledLink>{' '}
      to see parts of this in action.
    </p>
  </div>
)

export default Home
