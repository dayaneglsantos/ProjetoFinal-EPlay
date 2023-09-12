import { Game } from '../../Pages/Home'
import Product from '../Product'

import { List, SectionContainer, Title } from './styles'

export type Props = {
  sectionTitle: string
  backgroundColor: 'gray' | 'black'
  games: Game[]
  id?: string
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
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
      tags.push(formataPreco(game.prices.current))
    }
    console.log(tags)
    return tags
  }

  return (
    <SectionContainer id={id} backgroundColor={backgroundColor}>
      <div className="container">
        <Title>{sectionTitle}</Title>
        <List>
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
        </List>
      </div>
    </SectionContainer>
  )
}

export default ProductsList
