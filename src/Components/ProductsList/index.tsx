import Product from '../Product'
import { List, SectionContainer, Title } from './styles'
import Game from '../../Models/Game'

export type Props = {
  sectionTitle: string
  backgroundColor: 'gray' | 'black'
  games: Game[]
}

const ProductsList = ({ sectionTitle, backgroundColor, games }: Props) => (
  <SectionContainer backgroundColor={backgroundColor}>
    <div className="container">
      <Title>{sectionTitle}</Title>
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            title={game.title}
            category={game.categorie}
            description={game.description}
            img={game.image}
            sistem={game.sistem}
            infos={game.infos}
          />
        ))}
      </List>
    </div>
  </SectionContainer>
)

export default ProductsList
