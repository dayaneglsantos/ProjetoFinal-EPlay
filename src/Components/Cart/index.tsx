import { useDispatch, useSelector } from 'react-redux'

import Button from '../Button'
import Tag from '../Tag'

import { RootReducer } from '../../Store'
import { close, remove } from '../../Store/Reducers/cart'

import * as S from './styles'
import { parseToBrl } from '../../Utils'

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
    <S.CartContainer className={isOpen ? 'open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        <ul>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img src={item.media.thumbnail} alt="" />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{parseToBrl(item.prices.current)}</span>
              </div>
              <button type="button" onClick={() => removeItem(item.id)} />
            </S.CartItem>
          ))}
        </ul>
        <S.Quantity>{items.length} jogo(s) no carrinho</S.Quantity>
        <S.Price>
          Total de R$ {parseToBrl(getTotalPrice())}{' '}
          <span>em até 6x sem juros</span>
        </S.Price>
        <Button type="button">Continuar com a compra</Button>
      </S.Sidebar>
    </S.CartContainer>
  )
}
export default Cart
