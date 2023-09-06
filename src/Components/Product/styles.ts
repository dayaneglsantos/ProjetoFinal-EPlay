import styled from 'styled-components'
import { cores } from '../../styles'

import { TagContainer } from '../Tag/styles'
import { Link } from 'react-router-dom'

export const Card = styled(Link)`
  padding: 8px;
  border-radius: 8px;
  background-color: ${cores.cinza};
  position: relative;
  color: ${cores.branco};
  text-decoration: none;
  display: block;

  img {
    width: 100%;
    height: 250px;
    display: block;
    object-fit: cover;
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
