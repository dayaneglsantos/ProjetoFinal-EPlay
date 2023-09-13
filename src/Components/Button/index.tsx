import * as S from './styles'

export type Props = {
  type: 'button' | 'link' | 'submit'
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
  if (type === 'button' || type === 'submit') {
    return (
      <S.ButtonContainer type={type} onClick={onClick} btnStyle={btnStyle}>
        {children}
      </S.ButtonContainer>
    )
  }
  return <S.ButtonLink to={to as string}>{children}</S.ButtonLink>
}

export default Button
