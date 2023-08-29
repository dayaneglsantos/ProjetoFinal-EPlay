import { Card, Description, Infos, Title } from './styles'
import Tag from '../Tag'

type Props = {
  title: string
  description: string
  category: string
  sistem: string
  img: string
  infos: string[]
}

const Product = ({
  category,
  description,
  img,
  sistem,
  title,
  infos
}: Props) => (
  <Card>
    <img src={img} alt="" />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Title>{title}</Title>
    <Tag>{category}</Tag>
    <Tag>{sistem}</Tag>
    <Description>{description}</Description>
  </Card>
)

export default Product
