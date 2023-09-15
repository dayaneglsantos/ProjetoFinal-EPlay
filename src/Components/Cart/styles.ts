import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'
import { TagContainer } from '../Tag/styles'
import close from '../../Assets/Images/fechar.png'

export const CartContainer = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.open {
    display: flex;
  }
`

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
`

export const Sidebar = styled.aside`
  background-color: ${colors.gray};
  max-width: 360px;
  width: 100%;
  z-index: 1;
  padding: 40px 16px 0 16px;
  color: ${colors.white};

  ${ButtonContainer} {
    width: 100%;
  }
`

export const Quantity = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 32px 0 16px;
`
export const Price = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 24px;

  span {
    color: ${colors.lightGray};
    display: block;
  }
`
export const CartItem = styled.li`
  display: flex;
  padding: 8px 0;
  border-bottom: 1px solid ${colors.lightGray};
  position: relative;

  img {
    width: 80px;
    height: 80px;
    margin-right: 24px;
    object-fit: cover;
  }

  h3 {
    font-size: 16px;
    font-weight: bold;
  }

  span {
    display: block;
    font-size: 14px;
    font-weight: bold;
  }

  ${TagContainer} {
    margin: 8px 8px 16px 0;
  }

  button {
    background-image: url(${close});
    position: absolute;
    top: 8px;
    right: 0px;
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
  }
`
export const EmptyCart = styled.p`
  text-align: center;
`
