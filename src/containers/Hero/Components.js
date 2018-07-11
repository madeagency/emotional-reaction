// @flow

import styled, { keyframes } from 'react-emotion'
import { colors, pxtorem } from 'styles'

const appLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Logo = styled('img')`
  animation: ${appLogoSpin} infinite 20s linear;
  height: 200px;
`

export const Container = styled('div')`
  text-align: center;
`

export const Header = styled('div')`
  background-color: ${colors.hotPink};
  padding: ${pxtorem(20)}rem;
  color: ${colors.charcoal};
`

export const Heading = styled('h1')`
  font-size: 3rem;
  margin-top: 0.6rem;
  margin-bottom: 0;
  text-decoration: ${({ strikethrough }) => strikethrough && 'line-through'};
  opacity: ${({ strikethrough }) => strikethrough && '0.25'};
`

export const Paragraph = styled('p')`
  color: ${colors.charcoal};
  font-size: 0.75rem;
`

export const Link = styled('a')`
  color: ${colors.alto};
  text-decoration: none;
  border-bottom: 1px solid ${colors.dustyGray};

  &:hover {
    color: ${colors.malibu};
  }
`

export const GithubLink = styled(Link)`
  display: inline-block;
  font-size: 1.25rem;
  color: ${colors.alto};
`

export const GithubLogo = styled('img')`
  height: 20px;
  vertical-align: top;
`
