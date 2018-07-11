// @flow

import React from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'
import { colors } from 'styles'
import NavLink from 'react-router-dom/NavLink'

const StyledNav = styled('nav')`
  border-bottom: 1px solid ${colors.gallery};
  display: block;
  padding: 0.9rem 10%;
`

const StyledLink = styled(NavLink)`
  margin-right: 0.6rem;
  font-size: 1rem;
  color: ${colors.charcoal};
  text-decoration: none;
`

const activeLinkClass = css`
  pointer-events: none;
  border-bottom: 2px solid ${colors.hotPink};
`

const Menu = () => (
  <StyledNav>
    <StyledLink to="/" activeClassName={activeLinkClass} exact>
      Home
    </StyledLink>
    <StyledLink to="/examples" activeClassName={activeLinkClass} exact>
      Examples
    </StyledLink>
  </StyledNav>
)

export default Menu
