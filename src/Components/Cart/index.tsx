import { useDispatch, useSelector } from 'react-redux'
import {
  CartContainer,
  Overlay,
  Quantity,
  Sidebar,
  Price,
  CartItem
} from './styles'
import Botao from '../Button'
import Tag from '../Tag'
import { RootReducer } from '../../Store'
import { close, remove } from '../../Store/Reducers/cart'
import { formataPreco } from '../ProductsList'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acum, valor) => {
      return (acum += valor.prices.current)
    }, 0)
  }

  const removeItem = (id: number) => [dispatch(remove(id))]

  return (
    <CartContainer className={isOpen ? 'open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.media.thumbnail} alt="" />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{formataPreco(item.prices.current)}</span>
              </div>
              <button type="button" onClick={() => removeItem(item.id)} />
            </CartItem>
          ))}
        </ul>
        <Quantity>{items.length} jogo(s) no carrinho</Quantity>
        <Price>
          Total de R$ {formataPreco(getTotalPrice())}{' '}
          <span>em até 6x sem juros</span>
        </Price>
        <Botao type="button">Continuar com a compra</Botao>
      </Sidebar>
    </CartContainer>
  )
}
export default Cart
