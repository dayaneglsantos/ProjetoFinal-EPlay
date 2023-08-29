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
            <Link>RPG</Link>
          </li>
          <li>
            <Link>Ação</Link>
          </li>
          <li>
            <Link>Aventura</Link>
          </li>
          <li>
            <Link>Esportes</Link>
          </li>
          <li>
            <Link>Simulação</Link>
          </li>
          <li>
            <Link>Estratégia</Link>
          </li>
          <li>
            <Link>FPS</Link>
          </li>
        </LinksList>
      </FooterSection>
      <FooterSection>
        <Title>Acesso rápido</Title>
        <LinksList>
          <li>
            <Link>Novidades</Link>
          </li>
          <li>
            <Link>Promoções</Link>
          </li>
          <li>
            <Link>Em breve</Link>
          </li>
        </LinksList>
      </FooterSection>
      <p>{currentYear} &copy; EPlay - Todos os direitos reservados</p>
    </div>
  </FooterContainer>
)

export default Footer
