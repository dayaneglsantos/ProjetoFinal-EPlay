import styled from 'styled-components'
import { colors } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  font-size: ${(props) => (props.size === 'big' ? '16px' : '10px')};
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '4px 6px')};
  color: ${colors.white};
  background-color: ${colors.green};
  font-weight: bold;
  display: inline-block;
  border-radius: 8px;
`
