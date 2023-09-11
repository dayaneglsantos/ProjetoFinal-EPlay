import { CardContainer } from './styled'

type Props = {
  title: string
  children: JSX.Element
}

const Card = ({ title, children }: Props) => (
  <CardContainer>
    <h2>{title}</h2>
    {children}
  </CardContainer>
)

export default Card
