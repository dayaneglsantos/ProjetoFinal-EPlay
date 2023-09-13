import { useDispatch } from 'react-redux'

import { Game } from '../../Pages/Home'
import Button from '../Button'
import Tag from '../Tag'

import { add, open } from '../../Store/Reducers/cart'

import * as S from './styles'

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
      <S.Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
        <div className="container">
          <div>
            <Tag>{game.details.category}</Tag>
            <Tag>{game.details.system}</Tag>
          </div>
          <S.Infos>
            <h2>{game.name}</h2>
            <p>
              {game.prices.old && <span>De R$290,90</span>}
              {game.prices.current && <>Por R$ 190,90</>}
            </p>
            {game.prices.current && (
              <Button onClick={addToCart} type="button">
                Adicionar ao carrinho
              </Button>
            )}
          </S.Infos>
        </div>
      </S.Banner>
    </>
  )
}

export default Hero
