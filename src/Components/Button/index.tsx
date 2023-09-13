import * as S from './styles'

export type Props = {
  type: 'button' | 'link'
  to?: string
  onClick?: () => void
  children: string
  btnStyle?: 'primary' | 'secondary'
}

const Button = ({
  type,
  children,
  onClick,
  to,
  btnStyle = 'primary'
}: Props) => {
  if (type === 'button') {
    return (
      <S.ButtonContainer type="button" onClick={onClick} btnStyle={btnStyle}>
        {children}
      </S.ButtonContainer>
    )
  }
  return <S.ButtonLink to={to as string}>{children}</S.ButtonLink>
}

export default Button
