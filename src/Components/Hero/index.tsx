import Botao from '../Button'
import Tag from '../Tag'
import { Banner, Infos } from './styles'

const Hero = () => (
  <>
    <Banner>
      <div className="container">
        <div>
          <Tag>RPG</Tag>
          <Tag>PS5</Tag>
        </div>
        <Infos>
          <h2>Hogwarts Legacy</h2>
          <p>
            <span>De R$290,90</span> Por R$ 190,90
          </p>
          <Botao type="button">Adicionar ao carrinho</Botao>
        </Infos>
      </div>
    </Banner>
  </>
)

export default Hero
