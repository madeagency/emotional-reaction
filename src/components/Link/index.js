// @flow

import styled from 'react-emotion'
import { colors } from 'styles'

const Link = styled('a')`
  color: ${colors.charcoal};
  text-decoration: none;
  border-bottom: 2px solid ${colors.hotPink};

  :visited {
    color: ${colors.charcoal};
  }
`

export default Link
