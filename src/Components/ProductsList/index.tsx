import { Game } from '../../Pages/Home'
import Product from '../Product'
import { List, SectionContainer, Title } from './styles'

export type Props = {
  sectionTitle: string
  backgroundColor: 'gray' | 'black'
  games: Game[]
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ProductsList = ({ sectionTitle, backgroundColor, games }: Props) => {
  const getTags = (game: Game) => {
    const tags = []

    if (game.relase_date) {
      tags.push(game.relase_date)
    }
    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }
    if (game.prices.current) {
      tags.push(formataPreco(game.prices.current))
    }
    return tags
  }

  return (
    <SectionContainer backgroundColor={backgroundColor}>
      <div className="container">
        <Title>{sectionTitle}</Title>
        <List>
          {games.map((game) => (
            <Product
              key={game.id}
              title={game.name}
              category={game.details.category}
              description={game.description}
              img={game.media.thumbnail}
              sistem={game.details.system}
              infos={getTags(game)}
            />
          ))}
        </List>
      </div>
    </SectionContainer>
  )
}

export default ProductsList
