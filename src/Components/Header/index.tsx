import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { HashLink } from 'react-router-hash-link'

import { open } from '../../Store/Reducers/cart'
import { RootReducer } from '../../Store'

import logo from '../../Assets/Images/logo.svg'
import cartIcon from '../../Assets/Images/carrinho.svg'

import * as S from './styles'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [menuOpen, setMenuOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderContainer>
      <S.HeaderRow>
        <div>
          <S.MenuSmall onClick={() => setMenuOpen(!menuOpen)}>
            <span />
            <span />
            <span />
          </S.MenuSmall>
          <Link to="/">
            <img src={logo} alt="Logo Eplay" />
          </Link>
          <nav>
            <S.Links>
              <S.LinkItem>
                <Link to="/categorias">Categorias</Link>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink to="#coming-soon">Em breve</HashLink>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink to="#onSale">Promoções</HashLink>
              </S.LinkItem>
            </S.Links>
          </nav>
        </div>
        <S.LinkCart onClick={openCart} href="#">
          {items.length} <span> - produto(s)</span>
          <img src={cartIcon} alt="" />
        </S.LinkCart>
      </S.HeaderRow>
      <S.NavMobile className={menuOpen ? 'active' : ''}>
        <S.Links>
          <S.LinkItem>
            <Link to="/categorias" onClick={() => setMenuOpen(false)}>
              Categorias
            </Link>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink to="#coming-soon" onClick={() => setMenuOpen(false)}>
              Em breve
            </HashLink>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink to="#onSale" onClick={() => setMenuOpen(false)}>
              Promoções
            </HashLink>
          </S.LinkItem>
        </S.Links>
      </S.NavMobile>
    </S.HeaderContainer>
  )
}

export default Header
