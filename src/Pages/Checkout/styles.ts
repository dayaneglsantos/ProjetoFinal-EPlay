import styled from 'styled-components'
import { ButtonContainer } from '../../Components/Button/styles'

export const Row = styled.div`
  display: flex;
`
export const InputGroup = styled.div`
  margin-right: 24px;
  flex: auto;

  label {
    font-size: 14px;
    display: block;
    margin-bottom: 8px;
  }

  input {
    border: none;
    height: 32px;
    width: 100%;
  }
`
