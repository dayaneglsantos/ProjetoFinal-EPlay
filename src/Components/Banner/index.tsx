import { ButtonLink } from '../Button/styles'
import { TagContainer } from '../Tag/styles'
import { BannerContaier, Preco, Titulo } from './styles'

const Banner = () => (
  <BannerContaier>
    <div className="container">
      <TagContainer size="big">Destaque do dia</TagContainer>
      <div>
        <Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Titulo>
        <Preco>
          De <span>R$ 250,00</span> <br />
          por apenas R$ 99,99
        </Preco>
      </div>
      <ButtonLink to="/produto">Aproveitar</ButtonLink>
    </div>
  </BannerContaier>
)

export default Banner
