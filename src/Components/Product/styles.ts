import styled from 'styled-components'
import { cores } from '../../styles'

import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  padding: 8px;
  border-radius: 8px;
  background-color: ${cores.cinza};
  position: relative;

  img {
    width: 222px;
    height: 250px;
    display: block;
  }

  ${TagContainer} {
    position: static;
    margin-right: 8px;
  }
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-top: 16px;
  margin-bottom: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-top: 16px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
