import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  color: ${cores.branco};
  border: 2px solid
    ${(props) => (props.btnStyle === 'primary' ? cores.verde : cores.branco)};
  background-color: ${(props) =>
    props.btnStyle === 'primary' ? cores.verde : 'transparent'};
  border-radius: 8px;
  cursor: pointer;
`
export const ButtonLink = styled(Link)`
  font-size: 16px;
  padding: 8px 16px;
  color: ${cores.branco};
  border: 2px solid ${cores.branco};
  border-radius: 8px;
  text-decoration: none;
`
