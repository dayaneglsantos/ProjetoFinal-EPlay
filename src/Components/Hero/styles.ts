import styled from 'styled-components'

import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Banner = styled.div`
  width: 100%;
  height: 480px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  padding-top: 20px;

  &::after {
    width: 100%;
    height: 100%;
    background-color: #000;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.56;
  }

  .container {
    z-index: 1;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`
export const Infos = styled.div`
  background-color: ${cores.preto};
  padding: 16px;
  font-weight: bold;
  position: relative;
  max-width: 283px;

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
    margin: 16px 0;

    span {
      text-decoration: line-through;
      display: block;
    }
  }
`
