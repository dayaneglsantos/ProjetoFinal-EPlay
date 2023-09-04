import { useState, useEffect } from 'react'
import { Game } from '../../Pages/Home'
import { ButtonLink } from '../Button/styles'
import Tag from '../Tag'

import { BannerContaier, Preco, Titulo } from './styles'
import { formataPreco } from '../ProductsList'

const Banner = () => {
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
      .then((resp) => resp.json())
      .then((json) => setGame(json))
  }, [])

  return (
    <BannerContaier style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{game?.name}</Titulo>
          <Preco>
            De <span>{formataPreco(game?.prices.old)}</span> <br />
            por apenas {formataPreco(game?.prices.current)}
          </Preco>
        </div>
        <ButtonLink to={`produto/${game?.id}`}>Aproveitar</ButtonLink>
      </div>
    </BannerContaier>
  )
}

export default Banner
