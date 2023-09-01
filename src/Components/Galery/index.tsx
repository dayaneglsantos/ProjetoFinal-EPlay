import { Item, Items } from './styles'
import image from '../../Assets/Images/star_wars.png'

const Galery = () => (
  <Items>
    <Item>
      <img src={image} alt="" />
    </Item>
    <Item>
      <img src={image} alt="" />
    </Item>
    <Item>
      <img src={image} alt="" />
    </Item>
    <Item>
      <img src={image} alt="" />
    </Item>
  </Items>
)

export default Galery
