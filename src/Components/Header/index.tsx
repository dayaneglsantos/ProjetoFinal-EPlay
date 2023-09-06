import { Cabecalho, LinkCart, LinkItem, Links } from './styles'

import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../../Assets/Images/logo.svg'
import carrinho from '../../Assets/Images/carrinho.svg'
import { open } from '../../Store/Reducers/cart'
import { RootReducer } from '../../Store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <Cabecalho>
      <div>
        <Link to="/">
          <img src={logo} alt="Logo Eplay" />
        </Link>
        <Links>
          <LinkItem>
            <Link to="/categorias">Categorias</Link>
          </LinkItem>
          <LinkItem>
            <a href="#">Novidades</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Promoções</a>
          </LinkItem>
        </Links>
      </div>
      <LinkCart onClick={openCart} href="#">
        <span>{items.length} - produto(s)</span>
        <img src={carrinho} alt="" />
      </LinkCart>
    </Cabecalho>
  )
}

export default Header
