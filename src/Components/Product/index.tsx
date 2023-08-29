import { Card, Description, Title } from './styles'
import img from '../../Assets/Images/resident.png'
import Tag from '../Tag'

const Product = () => (
  <Card>
    <img src={img} alt="" />
    <Title>Título</Title>
    <Tag>Ação</Tag>
    <Tag>Windows</Tag>
    <Description>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum accusamus
      iusto deserunt, consequatur expedita adipisci minus et quae voluptas error
      alias dignissimos veniam architecto hic eum ipsa. Provident, mollitia
      officia?
    </Description>
  </Card>
)

export default Product
