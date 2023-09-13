import Tag from '../Tag'

import { useGetFeaturedGameQuery } from '../../Services/api'

import { ButtonLink } from '../Button/styles'
import * as S from './styles'
import { parseToBrl } from '../../Utils'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  return (
    <S.BannerContaier style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <S.Title>{game?.name}</S.Title>
          <S.Price>
            De <span>{parseToBrl(game?.prices.old)}</span> <br />
            por apenas {parseToBrl(game?.prices.current)}
          </S.Price>
        </div>
        <ButtonLink to={`produto/${game?.id}`}>Aproveitar</ButtonLink>
      </div>
    </S.BannerContaier>
  )
}

export default Banner
