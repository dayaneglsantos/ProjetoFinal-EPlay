import styled from 'styled-components'
import { colors } from '../../styles'
import { HashLink } from 'react-router-hash-link'

export const FooterContainer = styled.footer`
  background-color: ${colors.gray};
  padding: 32px 0;
  font-size: 14px;
  margin-top: 40px;
`
export const Title = styled.h4`
  font-weight: bold;
  font-size: 16px;
  color: ${colors.white};
  margin-bottom: 16px;
`

export const LinksList = styled.ul`
  display: flex;
`

export const Link = styled(HashLink)`
  color: ${colors.lightGray};
  margin-right: 8px;
  text-decoration: none;
`
export const FooterSection = styled.div`
  margin-bottom: 64px;
`
