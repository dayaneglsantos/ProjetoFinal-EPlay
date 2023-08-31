import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  type: 'button' | 'link'
  to?: string
  onClick?: () => void
  children: string
  btnStyle?: 'primary' | 'secondary'
}

const Botao = ({
  type,
  children,
  onClick,
  to,
  btnStyle = 'primary'
}: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer type="button" onClick={onClick} btnStyle={btnStyle}>
        {children}
      </ButtonContainer>
    )
  }
  return <ButtonLink to={to as string}>{children}</ButtonLink>
}

export default Botao
