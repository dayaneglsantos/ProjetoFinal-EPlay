import Product from '../Product'
import { List, SectionContainer, Title } from './styles'
import ResidentImg from '../../Assets/Images/resident.png'

export type Props = {
  sectionTitle: string
  backgroundColor: 'gray' | 'black'
}

const ProductsList = ({ sectionTitle, backgroundColor }: Props) => (
  <SectionContainer backgroundColor={backgroundColor}>
    <div className="container">
      <Title>{sectionTitle}</Title>
      <List>
        <Product
          title="Título"
          category="Ação"
          description="Descrição do jogo"
          img={ResidentImg}
          sistem="Windows"
          infos={['-15%', 'R$ 199,00']}
        />
        <Product
          title="Título"
          category="Ação"
          description="Descrição do jogo"
          img={ResidentImg}
          sistem="Windows"
          infos={['-15%', 'R$ 199,00']}
        />
        <Product
          title="Título"
          category="Ação"
          description="Descrição do jogo"
          img={ResidentImg}
          sistem="Windows"
          infos={['-15%', 'R$ 199,00']}
        />
        <Product
          title="Título"
          category="Ação"
          description="Descrição do jogo"
          img={ResidentImg}
          sistem="Windows"
          infos={['-15%', 'R$ 199,00']}
        />
      </List>
    </div>
  </SectionContainer>
)

export default ProductsList
