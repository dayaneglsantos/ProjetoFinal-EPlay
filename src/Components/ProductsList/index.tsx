import Product from '../Product'
import { List, Title } from './styles'

type Props = {
  sectionTitle: string
  backgroundColor: 'gray' | 'black'
}

const ProductsList = ({ sectionTitle, backgroundColor }: Props) => (
  <div className="container">
    <Title>{sectionTitle}</Title>
    <List>
      <Product />
      <Product />
      <Product />
      <Product />
    </List>
  </div>
)

export default ProductsList
