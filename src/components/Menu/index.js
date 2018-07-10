// @flow

import React from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'
import NavLink from 'react-router-dom/NavLink'

const StyledNav = styled('nav')`
  border-bottom: 1px solid #eee;
  display: block;
  padding: 15px 10%;
`

const StyledLink = styled(NavLink)`
  margin-right: 0.6rem;
  font-size: 1rem;
  color: #000;
  text-decoration: underline;
`

const activeLinkClass = css`
  pointer-events: none;
  text-decoration: none;
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
