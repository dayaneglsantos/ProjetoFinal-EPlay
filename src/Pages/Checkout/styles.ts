import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

type TabButtonProps = {
  isActive: boolean
}

type InputGroupProps = {
  maxWidth?: string
}

export const Row = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`
export const InputGroup = styled.div<InputGroupProps>`
  margin-right: 24px;
  flex: auto;
  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    font-size: 14px;
    display: block;
    margin-bottom: 8px;
  }

  input {
    border: none;
    height: 32px;
    width: 100%;
    border: 1px solid ${colors.white};
    padding: 0 8px;

    &.error {
      border: 1px solid red;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 16px;
  }
`

export const TabButton = styled.button<TabButtonProps>`
  background-color: ${(props) =>
    props.isActive ? colors.green : colors.black};
  color: ${colors.white};
  padding: 0 8px;
  font-size: 14px;
  font-weight: bold;
  margin-right: 16px;
  border: none;
  border-radius: 8px;
  height: 32px;
  cursor: pointer;

  img {
    margin-right: 8px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    margin-top: 8px;
  }
`
export const P = styled.p`
  margin-top: 16px;
`
