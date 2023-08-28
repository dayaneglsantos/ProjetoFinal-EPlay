import styled from 'styled-components'
import { cores } from '../../styles'

export const Cabecalho = styled.header`
  background-color: ${cores.cinza};
  padding: 24px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 80px;

  a {
    text-decoration: none;
    color: ${cores.branco};
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`

export const LinkItem = styled.li`
  margin-right: 16px;
`

export const LinkCart = styled.a`
  display: flex;

  img {
    margin-left: 16px;
  }
`
