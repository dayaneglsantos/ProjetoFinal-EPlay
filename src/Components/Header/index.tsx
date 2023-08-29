import { Cabecalho, LinkCart, LinkItem, Links } from './styles'

import logo from '../../Assets/Images/logo.svg'
import carrinho from '../../Assets/Images/carrinho.svg'
import { Link } from 'react-router-dom'

const Header = () => (
  <Cabecalho>
    <div>
      <img src={logo} alt="Logo Eplay" />
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
    <LinkCart href="#">
      <span>0 - produto(s)</span>
      <img src={carrinho} alt="" />
    </LinkCart>
  </Cabecalho>
)

export default Header
