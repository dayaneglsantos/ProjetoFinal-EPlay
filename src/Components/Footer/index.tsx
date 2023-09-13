import * as S from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <S.FooterContainer>
    <div className="container">
      <S.FooterSection>
        <S.Title>Categorias</S.Title>
        <S.LinksList>
          <li>
            <S.Link to="/categorias#rpg">RPG</S.Link>
          </li>
          <li>
            <S.Link to="/categorias#action">Ação</S.Link>
          </li>
          <li>
            <S.Link to="/categorias#sports">Esportes</S.Link>
          </li>
          <li>
            <S.Link to="/categorias#simulation">Simulação</S.Link>
          </li>
          <li>
            <S.Link to="/categorias#fight">Luta</S.Link>
          </li>
        </S.LinksList>
      </S.FooterSection>
      <S.FooterSection>
        <S.Title>Acesso rápido</S.Title>
        <S.LinksList>
          <li>
            <S.Link to="/#onSale">Promoções</S.Link>
          </li>
          <li>
            <S.Link to="/#coming-soon">Em breve</S.Link>
          </li>
        </S.LinksList>
      </S.FooterSection>
      <p>{currentYear} &copy; EPlay - Todos os direitos reservados</p>
    </div>
  </S.FooterContainer>
)

export default Footer
