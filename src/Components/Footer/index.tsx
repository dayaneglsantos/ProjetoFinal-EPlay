import {
  FooterContainer,
  FooterSection,
  Link,
  LinksList,
  Title
} from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <FooterContainer>
    <div className="container">
      <FooterSection>
        <Title>Categorias</Title>
        <LinksList>
          <li>
            <Link to="/categorias#rpg">RPG</Link>
          </li>
          <li>
            <Link to="/categorias#action">Ação</Link>
          </li>
          <li>
            <Link to="/categorias#sports">Esportes</Link>
          </li>
          <li>
            <Link to="/categorias#simulation">Simulação</Link>
          </li>
          <li>
            <Link to="/categorias#fight">Luta</Link>
          </li>
        </LinksList>
      </FooterSection>
      <FooterSection>
        <Title>Acesso rápido</Title>
        <LinksList>
          <li>
            <Link to="/#onSale">Promoções</Link>
          </li>
          <li>
            <Link to="/#coming-soon">Em breve</Link>
          </li>
        </LinksList>
      </FooterSection>
      <p>{currentYear} &copy; EPlay - Todos os direitos reservados</p>
    </div>
  </FooterContainer>
)

export default Footer
