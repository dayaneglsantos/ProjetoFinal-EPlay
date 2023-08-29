import styled from 'styled-components'
import { Props } from '.'
import { cores } from '../../styles'
import { Card } from '../Product/styles'

export const SectionContainer = styled.section<
  Omit<Props, 'sectionTitle' | 'games'>
>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.backgroundColor === 'black' ? cores.preto : cores.cinza};

  ${Card} {
    background-color: ${(props) =>
      props.backgroundColor === 'black' ? cores.cinza : cores.preto};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 24px;
`
export const Title = styled.h2`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 40px;
`
