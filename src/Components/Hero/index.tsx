import { useDispatch } from 'react-redux'

import { Game } from '../../Pages/Home'
import Botao from '../Button'
import Tag from '../Tag'

import { add, open } from '../../Store/Reducers/cart'

import { Banner, Infos } from './styles'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
    <>
      <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
        <div className="container">
          <div>
            <Tag>{game.details.category}</Tag>
            <Tag>{game.details.system}</Tag>
          </div>
          <Infos>
            <h2>{game.name}</h2>
            <p>
              {game.prices.old && <span>De R$290,90</span>}
              {game.prices.current && <>Por R$ 190,90</>}
            </p>
            {game.prices.current && (
              <Botao onClick={addToCart} type="button">
                Adicionar ao carrinho
              </Botao>
            )}
          </Infos>
        </div>
      </Banner>
    </>
  )
}

export default Hero
