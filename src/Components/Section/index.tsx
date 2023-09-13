import * as S from './styles'

export type Props = {
  title: string
  bgColor: 'black' | 'gray'
  children: JSX.Element
}

const Section = ({ title, bgColor, children }: Props) => (
  <S.SectionContainer bgColor={bgColor}>
    <div className="container">
      <S.Title>{title}</S.Title>
      {children}
    </div>
  </S.SectionContainer>
)

export default Section
