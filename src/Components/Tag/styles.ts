import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  font-size: ${(props) => (props.size === 'big' ? '16px' : '10px')};
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '4px 6px')};
  color: ${cores.branco};
  background-color: ${cores.verde};
  font-weight: bold;
  display: inline-block;
  border-radius: 8px;
`
