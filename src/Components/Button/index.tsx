import * as S from './styles'

export type Props = {
  type: 'button' | 'link' | 'submit'
  to?: string
  onClick?: () => void
  children: string
  btnStyle?: 'primary' | 'secondary'
  disabled?: boolean
}

const Button = ({
  type,
  children,
  onClick,
  to,
  btnStyle = 'primary',
  disabled
}: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <S.ButtonContainer
        type={type}
        onClick={onClick}
        btnStyle={btnStyle}
        disabled={disabled}
      >
        {children}
      </S.ButtonContainer>
    )
  }
  return <S.ButtonLink to={to as string}>{children}</S.ButtonLink>
}

export default Button
