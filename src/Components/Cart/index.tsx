import {
  CartContainer,
  Overlay,
  Quantity,
  Sidebar,
  Price,
  CartItem
} from './styles'
import foto from '../../Assets/Images/zelda.png'
import Botao from '../Button'
import Tag from '../Tag'

const Cart = () => (
  <CartContainer>
    <Overlay />
    <Sidebar>
      <ul>
        <CartItem>
          <img src={foto} alt="" />
          <div>
            <h3>Nome</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
            <span>R$ 190,00</span>
          </div>
          <button type="button" />
        </CartItem>
        <CartItem>
          <img src={foto} alt="" />
          <div>
            <h3>Nome</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
            <span>R$ 190,00</span>
          </div>
          <button type="button" />
        </CartItem>
      </ul>
      <Quantity>2 jogo(s) no carrinho</Quantity>
      <Price>
        Total de R$ 100,00 <span>em até 6x sem juros</span>
      </Price>
      <Botao type="button">Continuar com a compra</Botao>
    </Sidebar>
  </CartContainer>
)
export default Cart
