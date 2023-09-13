import Tag from '../Tag'

import * as S from './styles'

type Props = {
  title: string
  description: string
  category: string
  sistem: string
  img: string
  infos: string[]
  id: number
}

const Product = ({
  category,
  description,
  img,
  sistem,
  title,
  infos,
  id
}: Props) => {
  const getDescription = (title: string) => {
    if (title.length > 157) {
      return title.slice(0, 157) + '...'
    } else {
      return title
    }
  }

  return (
    <S.Card to={`/produto/${id}`}>
      <img src={img} alt={title} />
      <S.Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </S.Infos>
      <S.Title>{title}</S.Title>
      <Tag>{category}</Tag>
      <Tag>{sistem}</Tag>
      <S.Description>{getDescription(description)}</S.Description>
    </S.Card>
  )
}

export default Product
