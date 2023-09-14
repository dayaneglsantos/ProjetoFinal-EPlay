import styled from 'styled-components'
import { Props } from '.'
import { breakpoints, colors } from '../../styles'
import { Card } from '../Product/styles'

export const SectionContainer = styled.section<
  Omit<Props, 'sectionTitle' | 'games' | 'loading'>
>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.backgroundColor === 'black' ? colors.black : colors.gray};

  ${Card} {
    background-color: ${(props) =>
      props.backgroundColor === 'black' ? colors.gray : colors.black};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
export const Title = styled.h2`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 40px;
`
