import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { HashLink } from 'react-router-hash-link'

import { open } from '../../Store/Reducers/cart'
import { RootReducer } from '../../Store'

import logo from '../../Assets/Images/logo.svg'
import carrinho from '../../Assets/Images/carrinho.svg'

import {
  Cabecalho,
  HeaderRow,
  LinkCart,
  LinkItem,
  Links,
  MenuSmall,
  NavMobile
} from './styles'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [menuOpen, setMenuOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <Cabecalho>
      <HeaderRow>
        <div>
          <MenuSmall onClick={() => setMenuOpen(!menuOpen)}>
            <span />
            <span />
            <span />
          </MenuSmall>
          <Link to="/">
            <img src={logo} alt="Logo Eplay" />
          </Link>
          <nav>
            <Links>
              <LinkItem>
                <Link to="/categorias">Categorias</Link>
              </LinkItem>
              <LinkItem>
                <HashLink to="#coming-soon">Em breve</HashLink>
              </LinkItem>
              <LinkItem>
                <HashLink to="#onSale">Promoções</HashLink>
              </LinkItem>
            </Links>
          </nav>
        </div>
        <LinkCart onClick={openCart} href="#">
          {items.length} <span> - produto(s)</span>
          <img src={carrinho} alt="" />
        </LinkCart>
      </HeaderRow>
      <NavMobile className={menuOpen ? 'active' : ''}>
        <Links>
          <LinkItem>
            <Link to="/categorias" onClick={() => setMenuOpen(false)}>
              Categorias
            </Link>
          </LinkItem>
          <LinkItem>
            <HashLink to="#coming-soon" onClick={() => setMenuOpen(false)}>
              Em breve
            </HashLink>
          </LinkItem>
          <LinkItem>
            <HashLink to="#onSale" onClick={() => setMenuOpen(false)}>
              Promoções
            </HashLink>
          </LinkItem>
        </Links>
      </NavMobile>
    </Cabecalho>
  )
}

export default Header
