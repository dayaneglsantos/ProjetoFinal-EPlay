import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  type: 'button' | 'link'
  to?: string
  onClick: () => void
  children: string
}

const Botao = ({ type, children, onClick, to }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer type="button" onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }
  return <ButtonLink to={to as string}>{children}</ButtonLink>
}

export default Botao
