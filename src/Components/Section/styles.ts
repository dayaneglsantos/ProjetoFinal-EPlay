import styled from 'styled-components'
import { Props } from '.'
import { colors } from '../../styles'
import { Card } from '../Product/styles'

export const SectionContainer = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.bgColor === 'black' ? colors.black : colors.gray};

  ${Card} {
    background-color: ${(props) =>
      props.bgColor === 'black' ? colors.gray : colors.black};
  }

  p {
    font-size: 14px;
    line-height: 22px;
    max-width: 640px;
  }
`
export const Title = styled.h2`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 40px;
`
