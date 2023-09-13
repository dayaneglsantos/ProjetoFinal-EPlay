import styled from 'styled-components'
import { colors } from '../../styles'

export const Items = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`
export const Actions = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.73);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.5s ease;
`

export const Item = styled.li`
  position: relative;
  cursor: zoom-in;

  &:hover {
    ${Actions} {
      opacity: 1;
      transition: opacity 0.5s ease;
    }
  }

  > img {
    border: 2px solid ${colors.white};
    border-radius: 8px;
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
`
export const Modal = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  .overlay {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.73);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  &.visible {
    display: flex;
  }
`

export const ModalContent = styled.div`
  max-width: 960px;
  position: relative;
  z-index: 1;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
  }

  h4 {
    font-size: 18px;
    font-weight: bold;
  }

  > img {
    width: 100%;
  }

  img,
  iframe {
    display: block;
    max-width: 100%;
  }

  iframe {
    width: 100%;
    height: 480px;
  }
`
