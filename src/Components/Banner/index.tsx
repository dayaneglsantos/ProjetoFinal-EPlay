import { BannerContaier, Preco, Titulo } from './styles'

const Banner = () => (
  <BannerContaier>
    <div className="container">
      <Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Titulo>
      <Preco>
        De <span>R$ 250,00</span> <br />
        por apenas R$ 99,99
      </Preco>
    </div>
  </BannerContaier>
)

export default Banner
