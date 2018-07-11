// @flow

import React from 'react'
import GithubButton from 'components/GithubButton'
import logo from './logo.svg'
import github from './github.svg'

import {
  Container,
  Logo,
  Header,
  Heading,
  GithubLink,
  GithubLogo,
  Paragraph,
  Link
} from './Components'

const Hero = () => (
  <Container>
    <Header>
      <Logo src={logo} alt="logo" />
      <Heading strikethrough>Reactivity</Heading>
      <Heading>Emotional Reaction</Heading>
      <h2>Boilerplate for Power Users — with Emotion.</h2>
      <p>
        <GithubLink
          href="https://github.com/madeagency/emotional-reaction"
          rel="noopener noreferrer"
          target="_blank"
        >
          <GithubLogo src={github} alt="github" /> View on Github
        </GithubLink>
      </p>
      <GithubButton
        title="Star this project on github"
        user="madeagency"
        repo="emotional-reaction"
        type="star"
        width={160}
        height={30}
        count
        large
      />
      <GithubButton
        title="Fork this project on github"
        user="madeagency"
        repo="emotional-reaction"
        type="fork"
        width={160}
        height={30}
        count
        large
      />
      <Paragraph>
        <span>Created with love from the team at </span>
        <Link
          href="https://www.madecode.co.za/"
          rel="noopener noreferrer"
          target="_blank"
        >
          MADE Code
        </Link>
      </Paragraph>
    </Header>
  </Container>
)

export default Hero
