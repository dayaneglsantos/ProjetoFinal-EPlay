import styled from 'styled-components'
import { cores } from '../../styles'

export const CardContainer = styled.div`
  padding: 24px;
  background-color: ${cores.cinza};
  border-radius: 8px;
  margin-bottom: 40px;

  h2 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 24px;
  }

  h3 {
    margin: 24px 0;
  }
`
