import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../styles'
import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  color: ${colors.white};
  border: 2px solid
    ${(props) => (props.btnStyle === 'primary' ? colors.green : colors.white)};
  background-color: ${(props) =>
    props.btnStyle === 'primary' ? colors.green : 'transparent'};
  border-radius: 8px;
  cursor: pointer;
`
export const ButtonLink = styled(Link)`
  font-size: 16px;
  padding: 8px 16px;
  color: ${colors.white};
  border: 2px solid ${colors.white};
  border-radius: 8px;
  text-decoration: none;
`
