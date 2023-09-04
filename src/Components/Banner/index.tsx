import { ButtonLink } from '../Button/styles'
import Tag from '../Tag'

import { BannerContaier, Preco, Titulo } from './styles'

const Banner = () => (
  <BannerContaier>
    <div className="container">
      <Tag size="big">Destaque do dia</Tag>
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
