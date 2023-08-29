import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${cores.cinza};
  padding: 32px 0;
  font-size: 14px;
`
export const Title = styled.h4`
  font-weight: bold;
  font-size: 16px;
  color: ${cores.branco};
  margin-bottom: 16px;
`

export const LinksList = styled.ul`
  display: flex;
`

export const Link = styled.a`
  color: ${cores.cinzaClaro};
  margin-right: 8px;
  text-decoration: none;
`
export const FooterSection = styled.div`
  margin-bottom: 64px;
`
