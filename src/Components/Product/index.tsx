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
}: Props) => {
  const getDescription = (title: string) => {
    if (title.length > 157) {
      return title.slice(0, 157) + '...'
    } else {
      return title
    }
  }

  return (
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
      <Description>{getDescription(description)}</Description>
    </Card>
  )
}

export default Product
