import styled from 'styled-components'
import banner from '../../Assets/Images/banner-homem-aranha.png'
import { TagContainer } from '../Tag/styles'

export const BannerContaier = styled.div`
  width: 100%;
  height: 560px;
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  padding-top: 340px;
  position: relative;

  .container {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }
`
export const Titulo = styled.h2`
  font-size: 36px;
  max-width: 450px;
`

export const Preco = styled.p`
  font-size: 24px;
  margin-top: 24px;

  span {
    text-decoration: line-through;
  }
`
