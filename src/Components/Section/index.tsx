import { SectionContainer, Title } from './styles'

export type Props = {
  title: string
  bgColor: 'black' | 'gray'
  children: JSX.Element
}

const Section = ({ title, bgColor, children }: Props) => (
  <SectionContainer bgColor={bgColor}>
    <div className="container">
      <Title>{title}</Title>
      {children}
    </div>
  </SectionContainer>
)

export default Section
