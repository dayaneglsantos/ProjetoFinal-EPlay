import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  font-size: 16px;
  padding: 8px 16px;
  color: ${cores.branco};
  border: 2px solid ${cores.branco};
  border-radius: 8px;
`
export const ButtonLink = styled(Link)`
  font-size: 16px;
  padding: 8px 16px;
  color: ${cores.branco};
  border: 2px solid ${cores.branco};
  border-radius: 8px;
  text-decoration: none;
`
