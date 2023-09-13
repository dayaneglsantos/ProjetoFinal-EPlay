import { Game } from '../../Pages/Home'
import { parseToBrl } from '../../Utils'
import Product from '../Product'

import * as S from './styles'

export type Props = {
  sectionTitle: string
  backgroundColor: 'gray' | 'black'
  games: Game[]
  id?: string
}

const ProductsList = ({ sectionTitle, backgroundColor, games, id }: Props) => {
  const getTags = (game: Game) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }
    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }
    if (game.prices.current) {
      tags.push(parseToBrl(game.prices.current))
    }
    console.log(tags)
    return tags
  }

  return (
    <S.SectionContainer id={id} backgroundColor={backgroundColor}>
      <div className="container">
        <S.Title>{sectionTitle}</S.Title>
        <S.List>
          {games.map((game) => (
            <li key={game.id}>
              <Product
                id={game.id}
                key={game.id}
                title={game.name}
                category={game.details.category}
                description={game.description}
                img={game.media.thumbnail}
                sistem={game.details.system}
                infos={getTags(game)}
              />
            </li>
          ))}
        </S.List>
      </div>
    </S.SectionContainer>
  )
}

export default ProductsList
